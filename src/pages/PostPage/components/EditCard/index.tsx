import DOMPurify from 'dompurify';
import classNames from 'classnames/bind';
import styles from './EditCard.module.scss';
import { Message } from '../../../../types';
import RelationshipBadge from '../../../../components/Badge/RelationshipBadge';

const cn = classNames.bind(styles);

interface CardProps {
  card: Message;
}

export default function EditCard({ card }: CardProps) {
  const { id, profileImageURL, sender, relationship, content, createdAt } =
    card;

  const createdDate = createdAt.substring(0, createdAt.indexOf('T'));

  return (
    <div className={cn('profile')}>
      <button className={cn('delete-button')}>
        <img src="/images/delete.svg" alt="카드 삭제" />
      </button>
      <div className={cn('profile-user')}>
        <img src={profileImageURL} alt="프로필 사진" />
        <div className={cn('profile-name')}>
          <h3>
            From. <strong>{sender}</strong>
          </h3>
          <RelationshipBadge type={relationship} />
        </div>
      </div>
      <div
        className={cn('content')}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
      <div className={cn('create-date')}>{createdDate}</div>
    </div>
  );
}