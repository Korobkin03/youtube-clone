/** @format */

import { FC, useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Sidebar } from "./index";

const Feed: FC = () => {
  return (
    <Stack className="md:flex-row flex-column ">
      <Box className="h-auto md:h-[92vh] border-r-[1px] border-solid border-[#3d3d3d] px-0 md:px-2">
        <Sidebar />

        <Typography className="flex copyright mt-1.5 text-[#fff] items-center justify-center" variant="body2">
          Copyright 2023
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
