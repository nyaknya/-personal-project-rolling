import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './CardList.module.scss';
import apiRequest from '../../../utils/apiRequest';
import Card from '../Card';
import { CardListResultData } from '../../../types';

const cn = classNames.bind(styles);

interface CardListProps {
  sort?: string;
}

export default function CardList({ sort }: CardListProps) {
  const [cardlist, setCardlist] = useState<CardListResultData[]>([]);

  const getCardlist = useCallback(async () => {
    try {
      const endpoint = `/recipients/?limit=15&${sort ? `sort=${sort}` : ''}`;
      const data = await apiRequest({ endpoint });
      setCardlist(data.results);
    } catch (error) {
      console.error(error);
    }
  }, [sort]);

  useEffect(() => {
    getCardlist();
  }, [getCardlist]);

  return (
    <div className={cn('card-list-wrap')}>
      <ul className={cn('card-list')}>
        {cardlist?.map((list) => (
          <li key={list.id}>
            <Card data={list} />
          </li>
        ))}
      </ul>
    </div>
  );
}
