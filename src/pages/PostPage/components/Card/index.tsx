import { useState } from 'react';
import DOMPurify from 'dompurify';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { Message } from '../../../../types';
import RelationshipBadge from '../../../../components/Badge/RelationshipBadge';
import Modal from '../Modal';

const cn = classNames.bind(styles);

interface CardProps {
  card: Message;
}

export default function Card({ card }: CardProps) {
  const { profileImageURL, sender, relationship, content, createdAt, font } =
    card;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const createdDate = createdAt.substring(0, createdAt.indexOf('T'));

  const fontstyle = cn({
    pretendard: font === 'Pretendard',
    noto: font === 'Noto Sans',
    nanummyeongjo: font === '나눔명조',
    nanumpen: font === '나눔손글씨 손편지체',
  });

  return (
    <>
      <div className={cn('profile', fontstyle)} onClick={openModal}>
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

      {isModalOpen && <Modal card={card} onClose={closeModal} />}
    </>
  );
}
