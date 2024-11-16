import classNames from 'classnames/bind';
import styles from './PostDetailHeader.module.scss';
import SenderList from '../../SenderList';
import { PostRecipientData } from '../../../types';
import EmojiBadge from '../../Badge/EmojiBadge';

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
      </div>
    </div>
  );
}
