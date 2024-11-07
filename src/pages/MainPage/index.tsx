import classNames from 'classnames/bind';
import styles from './MainPage.module.scss';
import MainHeader from '../../components/Header/MainHeader';

const cn = classNames.bind(styles);

export default function MainPage() {
  return (
    <>
      <MainHeader />
      <main className={cn('main-wrap')}>
        <div className={cn('main-content')}>
          <div className={cn('main-txt')}>
            <strong>Point. 01</strong>
            <h2>
              누구나 손쉽게, 온라인
              <br />
              롤링 페이퍼를 만들 수 있어요
            </h2>
            <p>로그인 없이 자유롭게 만들어요.</p>
          </div>
          <div className={cn('main-image')}>
            <img src="/images/mainimg01.png" alt="롤링페이퍼 예시 사진" />
          </div>
        </div>
      </main>
    </>
  );
}
