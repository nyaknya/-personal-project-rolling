import classNames from 'classnames/bind';
import styles from './RelationshipBadge.module.scss';

const cn = classNames.bind(styles);

const typeToClassName: Record<'지인' | '동료' | '가족' | '친구', string> = {
  지인: 'acquaintance',
  동료: 'colleague',
  가족: 'family',
  친구: 'friend',
};

interface RelationshipBadgeProps {
  type: '지인' | '동료' | '가족' | '친구';
}

export default function RelationshipBadge({ type }: RelationshipBadgeProps) {
  return (
    <div className={cn('badge', typeToClassName[type])}>
      <span>{type}</span>
    </div>
  );
}
