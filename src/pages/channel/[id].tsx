/** @format */

import { NextPage } from "next";
import { useRouter } from "next/router";

const Channel: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Channel: {id}</p>;
};

export default Channel;
