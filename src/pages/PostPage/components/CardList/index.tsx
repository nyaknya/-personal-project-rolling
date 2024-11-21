import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { PaginatedMessages } from '../../../../types';
import styles from './CardList.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import Card from '../Card';

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

  const getCardlist = useCallback(async () => {
    try {
      const endpoint = `/recipients/${id}/messages/`;
      const data = await apiRequest({ endpoint });
      setCardlist(data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    getCardlist();
  }, [getCardlist]);

  return (
    <div className={cn('post-detail-cards')}>
      <ul>
        <li>
          <div className={cn('add-new')}>
            <img src="/images/addreaction.svg" alt="리액션 추가하기 이미지" />
          </div>
        </li>
        {cardlist.results &&
          cardlist.results.map((card) => {
            return (
              <li key={card.id} className={cn('card')}>
                <Card card={card} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
