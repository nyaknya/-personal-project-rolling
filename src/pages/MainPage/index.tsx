import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import MainHeader from '../../components/Header/MainHeader';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import styles from './MainPage.module.scss';

const cn = classNames.bind(styles);

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <>
      <MainHeader />
      <main className={cn('main-wrap')}>
        <div className={cn('main-content', 'main-point01')}>
          <div>
            <strong>Point. 01</strong>
            <h2>
              누구나 손쉽게, 온라인&nbsp;
              <br />
              롤링 페이퍼를 만들 수 있어요
            </h2>
            <p>로그인 없이 자유롭게 만들어요.</p>
          </div>
          <div className={cn('main-image')}>
            <img src="/images/mainimg01.png" alt="롤링페이퍼 예시 사진01" />
          </div>
        </div>
        <div className={cn('main-content', 'main-point02')}>
          <div className={cn('main-image')}>
            <img src="/images/mainimg02.png" alt="롤링페이퍼 예시 사진02" />
          </div>
          <div>
            <strong>Point. 02</strong>
            <h2>
              서로에게 이모지로 감정을&nbsp;
              <br />
              표현해보세요
            </h2>
            <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
          </div>
        </div>
        <div className={cn('main-button')}>
          <PrimaryButton onClick={handleButtonClick}>구경해보기</PrimaryButton>
        </div>
      </main>
    </>
  );
}
