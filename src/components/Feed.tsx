/** @format */

import { FC, useState, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Sidebar, Videos } from './index';
import { fetchFromAPI } from '@/pages/api/fetchFromAPI';

const Feed: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack className="md:flex-row flex-column ">
      <Box className="h-auto md:h-[92vh] border-r-[1px] border-solid border-[#3d3d3d] px-0 md:px-2">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography
          className="flex copyright mt-1.5 text-[#fff] items-center justify-center"
          variant="body2"
        >
          Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        {/* <Videos videos={videos} /> */}
      </Box>
    </Stack>
  );
};

export default Feed;
