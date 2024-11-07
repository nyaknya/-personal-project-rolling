import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MainHeader.module.scss';

const cn = classNames.bind(styles);

export default function MainHeader() {
  return (
    <header className={cn('main-header')}>
      <div className={cn('main-header-inner')}>
        <h1>
          <Link to="/">
            <img src="/images/logo.svg" alt="로고" />
          </Link>
        </h1>
        <Link to="/post">
          <button type="button">롤링 페이퍼 만들기</button>
        </Link>
      </div>
    </header>
  );
}
