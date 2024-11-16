import classNames from 'classnames/bind';
import styles from './PostDetailHeader.module.scss';

const cn = classNames.bind(styles);

interface PostDetailHeaderProps {
  owner: string;
}

export default function PostDetailHeader({ owner }: PostDetailHeaderProps) {
  return (
    <div className={cn('post-detail-header')}>
      <div className={cn('post-owner')}>To. {owner}</div>
    </div>
  );
}
