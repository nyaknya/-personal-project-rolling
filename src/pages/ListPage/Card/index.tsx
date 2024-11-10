import classNames from 'classnames/bind';
import styles from './ListCard.module.scss';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

// 요청 데이터

interface ListCardProps {
  data: any; // 관련 데이터 타입 필요
}

export default function Card({ data }: ListCardProps) {
  const {
    name,
    id,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    reactionCount,
    topReactions,
  } = data;

  return (
    <div>
      <Link to="/post/:id">
        <h3>TO. {name}</h3>
        <p>{messageCount}명이 작성했어요!</p>
        <div className={cn('iconlist')}></div>
      </Link>
    </div>
  );
}
