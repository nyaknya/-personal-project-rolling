import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ListCard.module.scss';
import { CardListResultData } from '../../../types';
import EmojiBadge from '../../../components/Badge/EmojiBadge';

const cn = classNames.bind(styles);

interface ListCardProps {
  data: CardListResultData;
}

export default function Card({ data }: ListCardProps) {
  const {
    name,
    id,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    recentMessages,
    topReactions,
  } = data;

  return (
    <div
      className={cn('list-card', backgroundColor, {
        hasImage: !!backgroundImageURL,
      })}
      style={
        backgroundImageURL
          ? { backgroundImage: `url(${backgroundImageURL})` }
          : undefined
      }
    >
      <Link to={`/post/${id}`}>
        <div className={cn('txtlist')}>
          <h3>TO. {name}</h3>
          <div className={cn('sender-wrap')}>
            {recentMessages?.map((sender) => (
              <img
                key={sender.id}
                src={sender.profileImageURL}
                alt={`${sender}의 프로필 이미지`}
              />
            ))}
            {recentMessages && recentMessages.length > 2 && (
              <span className={cn('rest-count')}>
                +{recentMessages.length - 2}
              </span>
            )}
          </div>
          <p>
            <strong>{messageCount}</strong>명이 작성했어요!
          </p>
        </div>
        {topReactions && topReactions?.length > 1 && (
          <div className={cn('iconlist')}>
            <ul>
              {topReactions?.map((reaction) => (
                <li key={reaction.id}>
                  <EmojiBadge emoji={reaction.emoji} count={reaction.count} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Link>
    </div>
  );
}
