import classNames from 'classnames/bind';
import styles from './ListPage.module.scss';
import MainHeader from '../../components/Header/MainHeader';
import CardList from './CardList';

const cn = classNames.bind(styles);

export default function ListPage() {
  return (
    <>
      <MainHeader />
      <main>
        <section className={cn('list-content')}>
          <h2>인기 롤링 페이퍼 🔥</h2>
          <CardList sort="like" />
        </section>
        <section className={cn('list-content')}>
          <h2>최근에 만든 롤링 페이퍼 ⭐️️</h2>
          <CardList />
        </section>
      </main>
    </>
  );
}
