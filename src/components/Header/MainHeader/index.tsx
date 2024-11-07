import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src="/images/logo.svg" alt="로고" />
        </Link>
      </h1>
      <Link to="/">
        <button>롤링 페이퍼 만들기</button>
      </Link>
    </header>
  );
}
