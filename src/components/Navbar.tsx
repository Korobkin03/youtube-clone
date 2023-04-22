/** @format */

import { FC } from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "./index";

const Navbar: FC = () => (
  <Stack className="flex-row items-center p-2 sticky bg-[#000] top-0 justify-between  ">
    <Link href="/" className="flex items-center ml-3">
      <Image src="/logo.png" alt="logo" width={45} height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
