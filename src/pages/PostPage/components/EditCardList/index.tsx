import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { PaginatedMessages } from '../../../../types';
import styles from '../CardList/CardList.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import EditCard from '../EditCard';

const cn = classNames.bind(styles);

interface CardListProps {
  id: string;
}

export default function EditCardList({ id }: CardListProps) {
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
      console.error('카드 리스트 로드 실패:', error);
    }
  }, [id]);

  useEffect(() => {
    getCardlist();
  }, [getCardlist]);

  const handleDeleteCard = (cardId: string) => {
    setCardlist((prev) => {
      const filteredResults = prev.results.filter(
        (card) => String(card.id) !== cardId,
      );
      return {
        ...prev,
        results: filteredResults,
      };
    });
  };

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
            <EditCard card={card} onDelete={handleDeleteCard} />
          </li>
        ))}
      </ul>
    </div>
  );
}
