import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CardList.module.scss';
import apiRequest from '../../../utils/apiRequest';

const cn = classNames.bind(styles);

export default function CardList() {
  const [cardlist, setCardlist] = useState(null);

  const getCardlist = async () => {
    try {
      const data = await apiRequest({ endpoint: '/recipients/' });
      setCardlist(data);
      console.log(data);
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
        <li>카드리스트 들어올예정</li>
      </ul>
    </div>
  );
}
