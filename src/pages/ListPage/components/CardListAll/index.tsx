import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CardListAll.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import Card from '../Card';
import { CardListResultData } from '../../../../types';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';

const cn = classNames.bind(styles);

export default function CardListAll() {
  const [cardlist, setCardlist] = useState<CardListResultData[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 8;

  const fetchInitialData = async () => {
    try {
      setIsLoading(true);
      const endpoint = `/recipients/?limit=${limit}&offset=0`;
      const data = await apiRequest({ endpoint });
      setCardlist(data.results);
      setOffset(limit);
      if (data.results.length < limit) setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreData = async () => {
    if (isLoading || !hasMore) return;

    try {
      setIsLoading(true);
      const endpoint = `/recipients/?limit=${limit}&offset=${offset}`;
      const data = await apiRequest({ endpoint });
      setCardlist((prev) => [...prev, ...data.results]);
      setOffset((prevOffset) => prevOffset + limit);
      if (data.results.length < limit) setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleLoadMore = () => {
    fetchMoreData();
  };

  return (
    <div className={cn('card-list-wrap')}>
      <ul className={cn('card-list')}>
        {cardlist.map((list) => (
          <li key={list.id}>
            <Card data={list} />
          </li>
        ))}
      </ul>
      <div className={cn('button-section')}>
        {hasMore ? (
          <PrimaryButton onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? '불러오는 중...' : '더 불러오기'}
          </PrimaryButton>
        ) : (
          <span>끝이에요! 😊</span>
        )}
      </div>
    </div>
  );
}
