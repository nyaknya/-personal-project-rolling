import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import DOMPurify from 'dompurify';
import styles from './Modal.module.scss';
import { Message } from '../../../../types';
import RelationshipBadge from '../../../../components/Badge/RelationshipBadge';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';

const cn = classNames.bind(styles);

interface ModalProps {
  card: Message;
  onClose: () => void;
}

export default function Modal({ card, onClose }: ModalProps) {
  const { profileImageURL, sender, relationship, content, createdAt } = card;
  const createdDate = createdAt.substring(0, createdAt.indexOf('T'));

  return ReactDOM.createPortal(
    <div className={cn('modal-overlay')} onClick={onClose}>
      <div className={cn('modal-content')} onClick={(e) => e.stopPropagation()}>
        <div className={cn('profile-user')}>
          <img src={profileImageURL} alt="프로필 사진" />
          <div className={cn('profile-name')}>
            <h3>
              From. <strong>{sender}</strong>
            </h3>
            <RelationshipBadge type={relationship} />
          </div>
          <div className={cn('create-date')}>{createdDate}</div>
        </div>
        <div
          className={cn('content')}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
        <div className={cn('button-section')}>
          <PrimaryButton size="S" onClick={onClose}>
            확인
          </PrimaryButton>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
}
