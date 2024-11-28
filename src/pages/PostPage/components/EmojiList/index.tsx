import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EmojiList.module.scss';
import apiRequest from '../../../../utils/apiRequest';
import EmojiBadge from '../../../../components/Badge/EmojiBadge';
import { PostReaction } from '../../../../types';

const cn = classNames.bind(styles);

interface EmojiListProps {
  id: number;
}

export default function EmojiList({ id }: EmojiListProps) {
  const [emojiList, setEmojiList] = useState<PostReaction[] | null>([]);

  const getEmojiData = useCallback(async () => {
    try {
      const data = await apiRequest({
        endpoint: `/recipients/${id}/reactions/`,
      });
      setEmojiList(data.results);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    getEmojiData();
  }, [getEmojiData]);

  return (
    <div className={cn('emoji-list')}>
      <ul>
        {emojiList &&
          emojiList.map((reaction) => (
            <li key={reaction.id}>
              <EmojiBadge emoji={reaction.emoji} count={reaction.count} />
            </li>
          ))}
      </ul>
    </div>
  );
}
