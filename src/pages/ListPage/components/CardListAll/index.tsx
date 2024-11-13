import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './CardListAll.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import Card from '../Card';
import { CardListResultData } from '../../../../types';

const cn = classNames.bind(styles);

export default function CardListAll() {
  const [cardlist, setCardlist] = useState<CardListResultData[]>([]);

  const getCardlist = useCallback(async () => {
    try {
      const endpoint = '/recipients/?limit=20';
      const data = await apiRequest({ endpoint });
      setCardlist(data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
