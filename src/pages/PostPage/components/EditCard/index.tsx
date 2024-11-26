import DOMPurify from 'dompurify';
import classNames from 'classnames/bind';
import styles from './EditCard.module.scss';
import { Message } from '../../../../types';
import RelationshipBadge from '../../../../components/Badge/RelationshipBadge';
import IconButton from '../../../../components/Buttons/IconButton';
import apiRequest from '../../../../utils/apiRequest';

const cn = classNames.bind(styles);

interface CardProps {
  card: Message;
  onDelete: (cardId: string) => void;
}

export default function EditCard({ card, onDelete }: CardProps) {
  const { id, profileImageURL, sender, relationship, content, createdAt } =
    card;

  const createdDate = createdAt.substring(0, createdAt.indexOf('T'));

  const handleDeleteButton = async () => {
    try {
      await apiRequest({
        endpoint: `/messages/${id}/`,
        method: 'DELETE',
      });
      onDelete(String(id)); // 부모로 삭제 이벤트 전달
    } catch (error) {
      console.error('카드 삭제 실패:', error);
    }
  };

  return (
    <div className={cn('profile')}>
      <IconButton onClick={handleDeleteButton}>
        <img src="/images/deleted.svg" alt="카드 삭제" />
      </IconButton>
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
