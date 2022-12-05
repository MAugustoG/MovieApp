// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useEffect, useRef } from 'react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Frame } from './styles';
import { Loader } from '../../components/Loader';
import { YOUTUBE_VIDEO_BASE_URL } from '../../constants';
import { useMovieVideos } from '../../../services/hooks/useMovieVideos';

interface VideoSectionProps {
  id: number;
  title: string;
}

export const VideoSection = ({ id, title }: VideoSectionProps) => {
  const videoFrame = useRef<HTMLIFrameElement>(null);
  const { data, error, isLoading } = useMovieVideos({ id });

  useEffect(() => {
    if (videoFrame.current !== null) {
      const height = (videoFrame.current.offsetWidth * 9) / 16 + 'px';
      videoFrame.current.setAttribute('height', height);
    }
  }, []);

  if (error) return null;

  if (isLoading || !data) return <Loader />;

  const { results } = data;

  if (!data.results.length) return null;

  const { key, name } = results[0];

  return (
    <Stack spacing={2}>
      <Typography>{name}</Typography>
      <Frame
        role={title}
        frameBorder='0'
        ref={videoFrame}
        title={`${title}-video`}
        src={`${YOUTUBE_VIDEO_BASE_URL}${key}`}
      />
    </Stack>
  );
};
