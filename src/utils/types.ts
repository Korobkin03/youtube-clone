/** @format */
import { SvgIconComponent } from '@mui/icons-material';
import { ReactElement } from 'react';

export interface ICategory {
  name: string;
  icon: SvgIconComponent;
}

export interface IVideo {
  id: { videoId: string };
  snippet: {
    thumbnails?: {
      high?: {
        url?: string;
      };
    };
    title?: string;
    channelId?: string;
    channelTitle?: string;
  };
}
