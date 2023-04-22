
/** @format */

import { FC, useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar: FC = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    className="rounded-[15px] border-solid border-[1px] border-[#e3e3e3] pl-2 shadow-none sm:mr-5 mt-1"
  >
    <input
      className="search-bar"
      placeholder="Search..."
      value=""
      onChange={() => {}}
    />
    <IconButton type="submit" className="p-[10px] ">
      {" "}
      <Search className='fill-red-600'/>{" "}
    </IconButton>
  </Paper>
);

export default SearchBar;