import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { PaginatedMessages } from '../../../../types';
import styles from './CardList.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import Card from '../Card';
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll';

const cn = classNames.bind(styles);

interface CardListProps {
  id: string;
}

export default function CardList({ id }: CardListProps) {
  const [cardlist, setCardlist] = useState<PaginatedMessages>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 8;

  const fetchCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const endpoint = `/recipients/${id}/messages/?limit=${limit}&offset=${offset}`;
      const data = await apiRequest({ endpoint });
      setCardlist((prev) => ({
        ...data,
        results: [...prev.results, ...data.results],
      }));
      setIsLoading(false);
    } catch (error) {
      console.error('카드 로드 실패:', error);
      setIsLoading(false);
    }
  }, [id, limit, offset]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const observerRef = useInfiniteScroll({
    onIntersect: () => setOffset((prev) => prev + limit),
    isLoading,
    hasNextPage: Boolean(cardlist.next),
  });

  return (
    <div className={cn('post-detail-cards')}>
      <ul>
        <li>
          <Link to={`/post/${id}/message/`}>
            <div className={cn('add-new')}>
              <img src="/images/addreaction.svg" alt="리액션 추가하기 이미지" />
            </div>
          </Link>
        </li>
        {cardlist.results.map((card) => (
          <li key={card.id} className={cn('card')}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      {isLoading && <div className={cn('loading')}>로딩 중...</div>}
      <div ref={observerRef} className={cn('observer-target')} />
    </div>
  );
}
