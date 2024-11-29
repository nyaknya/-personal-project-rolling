import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PostDetail.module.scss';
import DefaultHeader from '../../../components/Header/DefaultHeader';
import PostDetailHeader from '../../../components/Header/PostDetailHeader';
import { PostRecipientData } from '../../../types';
import apiRequest from '../../../utils/apiRequest';
import CardList from '../components/CardList';

const cn = classNames.bind(styles);

export default function PostDetailPage() {
  const [postDetailData, setPostDetailData] =
    useState<PostRecipientData | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const getCardlist = useCallback(async () => {
    try {
      const endpoint = `/recipients/${id}/`;
      const data = await apiRequest({ endpoint });

      if (!data || !data.id) {
        navigate('/list', { replace: true });
        return;
      }

      setPostDetailData(data);
    } catch (error) {
      console.error(error);
      navigate('/list', { replace: true });
    }
  }, [id, navigate]);

  useEffect(() => {
    if (!id) {
      navigate('/list', { replace: true });
    } else {
      getCardlist();
    }
  }, [id, getCardlist, navigate]);

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
          <CardList id={id!} />
        </section>
      </main>
    </>
  );
}
