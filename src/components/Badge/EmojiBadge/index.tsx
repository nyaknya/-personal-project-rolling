import classNames from 'classnames/bind';
import styles from './EmojiBadge.module.scss';

const cn = classNames.bind(styles);

interface EmojiBadgeProps {
  emoji: string;
  count: number;
}

export default function EmojiBadge({ emoji, count }: EmojiBadgeProps) {
  return (
    <div className={cn('emoji-badge')}>
      <span className={cn('emoji')}>{emoji}</span>
      <span className={cn('count')}>{count}</span>
    </div>
  );
}
