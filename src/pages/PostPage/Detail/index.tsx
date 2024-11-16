import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultHeader from '../../../components/Header/DefaultHeader';
import PostDetailHeader from '../../../components/Header/PostDetailHeader';
import { PostRecipientData } from '../../../types';
import apiRequest from '../../../utils/apiRequest';

export default function PostDetailPage() {
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

  const { name, recentMessages, messageCount } = postDetailData || {};

  return (
    <>
      <DefaultHeader />
      <main>
        {postDetailData && (
          <PostDetailHeader
            owner={name!}
            recentMessages={recentMessages!}
            messageCount={messageCount!}
          />
        )}
      </main>
    </>
  );
}
