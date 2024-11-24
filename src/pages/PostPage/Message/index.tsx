import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import DefaultHeader from '../../../components/Header/DefaultHeader';
import Input from '../../../components/TextField/Input';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const cn = classNames.bind(styles);

export default function PostMessagePage() {
  return (
    <>
      <DefaultHeader />
      <main>
        <section className={cn('post-message-content')}>
          <h2>From.</h2>
          <Input
            placeholder="이름을 입력해 주세요."
            onChange={() => console.log('추가예정')}
          />
        </section>
        <section className={cn('post-message-content')}>
          <h2>프로필 이미지</h2>
          <div>프로필 셀렉 컴포넌트 삽입 예정</div>
        </section>
        <section className={cn('post-message-content')}>
          <h2>상대와의 관계</h2>
          <div>드롭다운 컴포넌트 예정</div>
        </section>
        <section className={cn('post-message-content')}>
          <h2>내용을 입력해 주세요</h2>
          <div>에디터 컴포넌트 예정</div>
        </section>
        <section className={cn('post-message-content')}>
          <h2>폰트 선택</h2>
          <div>드롭다운 예정2</div>
        </section>
        <section className={cn('button-area')}>
          <PrimaryButton
            size="L"
            onClick={() => {
              console.log('예정');
            }}
          >
            생성하기
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
