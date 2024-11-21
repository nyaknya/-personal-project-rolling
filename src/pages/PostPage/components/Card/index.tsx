import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { Message } from '../../../../types';

const cn = classNames.bind(styles);

interface CardProps {
  card: Message;
}

export default function Card({ card }: CardProps) {
  const { profileImageURL, sender, relationship, content, createdAt } = card;

  const createdDate = createdAt.substring(0, createdAt.indexOf('T'));

  return (
    <div className={cn('profile')}>
      <div className={cn('profile-user')}>
        <img src={profileImageURL} alt="프로필 사진" />
        <div className={cn('profile-name')}>
          <h3>
            From. <strong>{sender}</strong>
          </h3>
          <span>뱃지 컴포넌트 추가 예정 : {relationship}</span>
        </div>
      </div>
      <div className={cn('content')}>
        <p>{content}</p>
      </div>
      <div className={cn('create-date')}>{createdDate}</div>
    </div>
  );
}
