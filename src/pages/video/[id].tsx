/** @format */

import { NextPage } from "next";
import { useRouter } from "next/router";

const Video: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Video: {id}</p>;
};

export default Video;
