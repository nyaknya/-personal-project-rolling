import classNames from 'classnames/bind';
import styles from './SenderList.module.scss';
import { Sender } from '../../types';

const cn = classNames.bind(styles);

interface SenderListProps {
  recentMessages: Sender[];
  messageCount: number;
}

export default function SenderList({
  recentMessages,
  messageCount,
}: SenderListProps) {
  const maxVisible = 3;
  const visibleSenders = recentMessages.slice(0, maxVisible);
  const restCount = Math.max(messageCount - maxVisible, 0);

  return (
    <div className={cn('sender-wrap')}>
      {visibleSenders.map((sender) => (
        <img
          key={sender.id}
          src={sender.profileImageURL}
          alt={`${sender.id}의 프로필 이미지`}
        />
      ))}
      {restCount > 0 && <span className={cn('rest-count')}>+{restCount}</span>}
    </div>
  );
}
