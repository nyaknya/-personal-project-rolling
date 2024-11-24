import classNames from 'classnames/bind';
import styles from './ProfileSelect.module.scss';

const cn = classNames.bind(styles);

interface ProfileSelectProps {
  selected: boolean;
  onSelect: (color: string) => void;
}

export default function ProfileSelect({
  selected,
  onSelect,
}: ProfileSelectProps) {
  return (
    <div className={cn('profile-select')}>
      <div className={cn('now-selected')}>
        <img src="" alt="" />
      </div>
    </div>
  );
}
