import classNames from 'classnames/bind';
import styles from './ListPage.module.scss';
import MainHeader from '../../components/Header/MainHeader';

const cn = classNames.bind(styles);

export default function ListPage() {
  return (
    <>
      <MainHeader />
      <main>
        <section className={cn('list-content')}>
          <h2>인기 롤링 페이퍼 🔥</h2>
        </section>
      </main>
    </>
  );
}
