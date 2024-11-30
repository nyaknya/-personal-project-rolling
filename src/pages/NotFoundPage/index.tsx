import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NotFoundPage.module.scss';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const cn = classNames.bind(styles);

export default function NotFoundPage() {
  const navigate = useNavigate();
  const backToReturn = () => {
    navigate(-1);
  };

  return (
    <main>
      <div className={cn('notfound-content')}>
        <h2>
          404 <br />
          PAGE NOT FOUND
        </h2>
        <p>페이지를 찾을 수 없습니다.</p>
        <PrimaryButton onClick={backToReturn}>이전으로 돌아가기</PrimaryButton>
      </div>
    </main>
  );
}
