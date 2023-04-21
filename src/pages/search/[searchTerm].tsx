/** @format */

import { NextPage } from "next";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();
  const { searchTerm } = router.query;

  return <p>Search: {searchTerm}</p>;
};

export default Search;
