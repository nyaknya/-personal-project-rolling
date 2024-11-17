import classNames from 'classnames/bind';
import styles from './PostDetailHeader.module.scss';
import SenderList from '../../SenderList';
import { PostRecipientData } from '../../../types';
import EmojiBadge from '../../Badge/EmojiBadge';
import IconButton from '../../Buttons/IconButton';

const cn = classNames.bind(styles);

interface PostDetailHeaderProps {
  postDetailData: PostRecipientData;
}

export default function PostDetailHeader({
  postDetailData,
}: PostDetailHeaderProps) {
  const { name, recentMessages, messageCount, topReactions } =
    postDetailData || {};

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
            <IconButton
              onClick={() => {
                console.log('이모지 플러그인 삽입 예정');
              }}
            >
              <img src="/images/emojiadd.svg" alt="이모지 추가 버튼 이미지" />
              <span>추가</span>
            </IconButton>
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
        </div>
      </div>
    </div>
  );
}
