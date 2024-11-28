import { useRef, useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import classNames from 'classnames/bind';
import styles from './PostDetailHeader.module.scss';
import SenderList from '../../SenderList';
import { PostRecipientData } from '../../../types';
import EmojiBadge from '../../Badge/EmojiBadge';
import IconButton from '../../Buttons/IconButton';
import useOutsideClick from '../../../hooks/useOutSideClick';
import apiRequest from '../../../utils/apiRequest';

const cn = classNames.bind(styles);

interface PostDetailHeaderProps {
  postDetailData: PostRecipientData;
  hasDeleteButton?: boolean;
  onClick?: () => void;
}

export default function PostDetailHeader({
  postDetailData,
  hasDeleteButton,
  onClick,
}: PostDetailHeaderProps) {
  const { id, name, recentMessages, messageCount, topReactions } =
    postDetailData || {};

  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: emojiPickerRef,
    callback: () => {
      setIsEmojiPickerOpen(false);
    },
    enabled: isEmojiPickerOpen,
  });

  const handleEmojiSelect = async (emojiData: EmojiClickData) => {
    const emoji = String.fromCodePoint(
      ...emojiData.unified.split('-').map((hex) => parseInt(hex, 16)),
    );

    const body = {
      emoji,
      type: 'increase',
    };

    try {
      await apiRequest({
        endpoint: `/recipients/${id}/reactions/`,
        method: 'POST',
        body,
      });
    } catch (error) {
      console.error('API 요청 실패:', error);
    }

    setIsEmojiPickerOpen(false);
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen((prev) => !prev);
  };

  return (
    <div className={cn('post-detail-header')}>
      <div className={cn('post-header-inner')}>
        <div className={cn('post-owner')}>To. {name}</div>
        <div className={cn('post-infomation')}>
          {recentMessages && (
            <div className={cn('recent')}>
              <SenderList
                recentMessages={recentMessages}
                messageCount={messageCount}
              />
              <p>
                <strong>{messageCount}</strong>명이 작성했어요!
              </p>
            </div>
          )}

          {topReactions && topReactions?.length > 0 && (
            <div className={cn('iconlist')}>
              <ul>
                {topReactions?.map((reaction) => (
                  <li key={reaction.id}>
                    <EmojiBadge emoji={reaction.emoji} count={reaction.count} />
                  </li>
                ))}
              </ul>
              <button className={cn('iconlist-moreview')}>
                <img src="/images/arrowdown.svg" alt="이모지 더보기" />
              </button>
            </div>
          )}

          <div className={cn('post-add-emoji')}>
            <IconButton onClick={toggleEmojiPicker}>
              <img src="/images/emojiadd.svg" alt="이모지 추가 버튼 이미지" />
              <span>추가</span>
            </IconButton>
            {isEmojiPickerOpen && (
              <div ref={emojiPickerRef} className={cn('emoji-picker')}>
                <EmojiPicker
                  onEmojiClick={handleEmojiSelect}
                  width={306}
                  height={380}
                />
              </div>
            )}
          </div>

          <div className={cn('post-share')}>
            <IconButton
              onClick={() => {
                console.log('공유 로직 추가 예정');
              }}
            >
              <img src="/images/share.svg" alt="포스트 공유 버튼 이미지" />
            </IconButton>
          </div>

          {hasDeleteButton && (
            <div className={cn('post-delete')}>
              <button
                onClick={onClick}
                type="button"
                className={cn('post-delete-button')}
              >
                삭제하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
