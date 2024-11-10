import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ListPage.module.scss';
import MainHeader from '../../components/Header/MainHeader';
import CardList from './CardList';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const cn = classNames.bind(styles);

export default function ListPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/post');
  };

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
        <section className={cn('button-area')}>
          <PrimaryButton onClick={handleButtonClick}>
            나도 만들어보기
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
