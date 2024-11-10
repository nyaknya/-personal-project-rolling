import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CardList.module.scss';
import apiRequest from '../../../utils/apiRequest';
import Card from '../Card';
import { CardListResultData } from '../../../types';

const cn = classNames.bind(styles);

export default function CardList() {
  const [cardlist, setCardlist] = useState<CardListResultData[]>([]);

  const getCardlist = async () => {
    try {
      const data = await apiRequest({ endpoint: '/recipients/' });
      setCardlist(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCardlist();
  }, []);

  return (
    <div className={cn('card-list-wrap')}>
      <ul>
        {cardlist?.map((list) => {
          return <Card key={list.id} data={list} />;
        })}
      </ul>
    </div>
  );
}
