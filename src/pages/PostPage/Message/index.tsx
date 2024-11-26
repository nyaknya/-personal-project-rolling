import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import DefaultHeader from '../../../components/Header/DefaultHeader';
import Input from '../../../components/TextField/Input';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import ProfileSelect from '../components/ProfileSelect';
import Select from '../../../components/TextField/Select';
import apiRequest from '../../../utils/apiRequest';

const cn = classNames.bind(styles);

export default function PostMessagePage() {
  const [sender, setSender] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('지인');
  const [textEditor, setTextEditor] = useState<string>('');
  const [selectFont, setSelectFont] = useState<string>('Pretendard');

  const navigate = useNavigate();
  const { id } = useParams();

  const handleProfileSelect = (profile: string) => setProfileImage(profile);
  const handleSelect = (option: string) => setSelectedOption(option);
  const handleSelectFont = (font: string) => setSelectFont(font);

  const handleCreateMessage = async () => {
    const body = {
      team: '3-심은주',
      recipientId: 0,
      sender,
      profileImageURL: profileImage,
      relationship: selectedOption,
      content: textEditor,
      font: selectFont,
    };

    try {
      await apiRequest({
        endpoint: `/recipients/${id}/messages/`,
        method: 'POST',
        body,
      });
      navigate(`/post/${id}`);
    } catch (error) {
      console.error(error);
    }
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
          <Select
            options={['지인', '동료', '가족', '친구']}
            selected={selectedOption}
            onSelect={handleSelect}
          />
        </section>

        <section className={cn('post-message-content')}>
          <h2>내용을 입력해 주세요</h2>
          <div className={cn('text-editor')}>
            <ReactQuill
              theme="snow"
              value={textEditor}
              onChange={setTextEditor}
            />
          </div>
        </section>

        <section className={cn('post-message-content')}>
          <h2>폰트 선택</h2>
          <Select
            options={[
              'Pretendard',
              'Noto Sans',
              '나눔명조',
              '나눔손글씨 손편지체',
            ]}
            selected={selectFont}
            onSelect={handleSelectFont}
          />
        </section>

        <section className={cn('button-area')}>
          <PrimaryButton
            size="L"
            onClick={handleCreateMessage}
            disabled={!sender || !textEditor}
          >
            생성하기
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
