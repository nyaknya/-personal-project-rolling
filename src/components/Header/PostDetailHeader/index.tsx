import classNames from 'classnames/bind';
import styles from './PostDetailHeader.module.scss';
import SenderList from '../../SenderList';
import { Sender } from '../../../types';

const cn = classNames.bind(styles);

interface PostDetailHeaderProps {
  recentMessages: Sender[];
  owner: string;
  messageCount: number;
}

export default function PostDetailHeader({
  owner,
  recentMessages,
  messageCount,
}: PostDetailHeaderProps) {
  return (
    <div className={cn('post-detail-header')}>
      <div className={cn('post-owner')}>To. {owner}</div>
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
      </div>
    </div>
  );
}
