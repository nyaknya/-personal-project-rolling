import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import DefaultHeader from '../../../components/Header/DefaultHeader';
import Input from '../../../components/TextField/Input';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import ProfileSelect from '../components/ProfileSelect';

const cn = classNames.bind(styles);

export default function PostMessagePage() {
  const [sender, setSender] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleProfileSelect = (profile: string) => {
    setProfileImage(profile);
  };

  return (
    <>
      <DefaultHeader />
      <main>
        <section className={cn('post-message-content')}>
          <h2>From.</h2>
          <Input
            placeholder="이름을 입력해 주세요."
            onChange={(value) => setSender(value)}
          />
        </section>
        <section className={cn('post-message-content')}>
          <h2>프로필 이미지</h2>
          <ProfileSelect
            selected={profileImage}
            onSelect={handleProfileSelect}
          />
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
              console.log({
                sender,
                profileImage,
              });
            }}
          >
            생성하기
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
