import classNames from 'classnames/bind';
import styles from './CardList.module.scss';

const cn = classNames.bind(styles);

export default function CardList() {
  return (
    <div className={cn('post-detail-cards')}>
      <ul>
        <li>
          <div className={cn('add-new')}>
            <img src="/images/addreaction.svg" alt="리액션 추가하기 이미지" />
          </div>
        </li>
      </ul>
    </div>
  );
}
