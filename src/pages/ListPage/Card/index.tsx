import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ListCard.module.scss';
import { CardListResultData } from '../../../types';

const cn = classNames.bind(styles);

interface ListCardProps {
  data: CardListResultData;
}

export default function Card({ data }: ListCardProps) {
  const {
    name,
    id,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    recentMessages,
    topReactions,
  } = data;

  const cardBackground = backgroundImageURL
    ? backgroundImageURL
    : backgroundColor;

  return (
    <div className={cn('list-card', cardBackground)}>
      <Link to={`/post/${id}`}>
        <h3>TO. {name}</h3>
        <div className={cn('sender-wrap')}>
          {recentMessages?.map((sender) => {
            return (
              <img
                src={sender.profileImageURL}
                alt={`${sender}의 프로필 이미지`}
              />
            );
          })}
        </div>
        <p>{messageCount}명이 작성했어요!</p>
        <div className={cn('iconlist')}></div>
      </Link>
    </div>
  );
}
