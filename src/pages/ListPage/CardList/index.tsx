import classNames from 'classnames/bind';
import styles from './CardList.module.scss';

const cn = classNames.bind(styles);
export default function CardList() {
  return (
    <div className={cn('card-list-wrap')}>
      <ul>
        <li>카드리스트 들어올예정</li>
      </ul>
    </div>
  );
}
