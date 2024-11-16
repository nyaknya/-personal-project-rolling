import classNames from 'classnames/bind';
import styles from './PostDetailHeader.module.scss';

const cn = classNames.bind(styles);

export default function PostDetailHeader() {
  return (
    <div className={cn('post-detail-header')}>포스트 디텔 헤더~ (서브헤더)</div>
  );
}
