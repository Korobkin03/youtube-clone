/** @format */

import Head from "next/head";
import { Box } from "@mui/material";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: any) => (
  <>
    <Head>
      <title>YouTube clone</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Youtube clone" />
      <link rel="icon" href="/favicon.png" />
    
    </Head>
    <Box sx={{ backgroundColor: "#000" }}>
      <Component {...pageProps} />
    </Box>
  </>
);

export default MyApp;
