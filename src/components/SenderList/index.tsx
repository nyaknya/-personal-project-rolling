import classNames from 'classnames/bind';
import styles from './SenderList.module.scss';

const cn = classNames.bind(styles);

interface Sender {
  id: number;
  profileImageURL: string;
}

interface SenderListProps {
  recentMessages: Sender[];
  messageCount: number; // 총 메시지 갯수
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
