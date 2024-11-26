import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Edit.module.scss';
import DefaultHeader from '../../../components/Header/DefaultHeader';
import PostDetailHeader from '../../../components/Header/PostDetailHeader';
import { PostRecipientData } from '../../../types';
import apiRequest from '../../../utils/apiRequest';
import EditCardList from '../components/EditCardList';

const cn = classNames.bind(styles);

export default function PostEditPage() {
  const [postDetailData, setPostDetailData] =
    useState<PostRecipientData | null>(null);

  const { id } = useParams();

  const getCardlist = useCallback(async () => {
    try {
      const endpoint = `/recipients/${id}/`;
      const data = await apiRequest({ endpoint });
      setPostDetailData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    getCardlist();
  }, [getCardlist]);

  const { backgroundColor, backgroundImageURL } = postDetailData || {};

  return (
    <>
      <DefaultHeader />
      <main
        className={cn('post-detail-content', backgroundColor, {
          hasImage: !!backgroundImageURL,
        })}
        style={
          backgroundImageURL
            ? { backgroundImage: `url(${backgroundImageURL})` }
            : undefined
        }
      >
        {postDetailData && (
          <PostDetailHeader postDetailData={postDetailData!} />
        )}
        <section>
          <EditCardList id={id!} />
        </section>
      </main>
    </>
  );
}
