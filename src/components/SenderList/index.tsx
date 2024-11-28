import classNames from 'classnames/bind';
import styles from './SenderList.module.scss';
import { Sender } from '../../types';

const cn = classNames.bind(styles);

interface SenderListProps {
  recentMessages: Sender[];
  messageCount: number; // 전체 메시지 수
}

export default function SenderList({
  recentMessages,
  messageCount,
}: SenderListProps) {
  const maxVisible = 3; // 최대 보이는 이미지 수
  const visibleSenders = recentMessages.slice(0, maxVisible); // 최대 3개까지 최근 메시지 표시
  const restCount = Math.max(messageCount - maxVisible, 0); // 전체 메시지에서 최대 3개를 제외한 나머지 계산

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
