import React, { FC } from 'react';
import Link from 'next/link';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';
import { IVideo } from '@/utils/types';

const VideoCard: FC<{ video: IVideo }> = ({ video }) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: '320px' },
      boxShadow: 'none',
      borderRadius: 0,
    }}
  >
    <Link
      href={
        video.id.videoId ? `/video/${video.id.videoId}` : `/video/cV2gBU6hKfY`
      }
    >
      <CardMedia
        image={video.snippet.thumbnails?.high?.url || demoThumbnailUrl}
        component="img"
        alt={video.snippet.title}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
      <Link
        href={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
      >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {video.snippet.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        href={
          video.snippet.channelId
            ? `/channel/${video.snippet.channelId}`
            : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {video.snippet.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);
export default VideoCard;
