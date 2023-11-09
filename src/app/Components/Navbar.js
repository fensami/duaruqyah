"use-client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold"> Dua Page</h1>
      <div className="flex">


        <div className="flex mr-72 border-gray-400 rounded-xl border">
          <input
            type="search"
            placeholder="Search by Dua Name"
            className="pl-4 text-base rounded-xl font-normal w-[350px]  border-gray-400 outline-none"
          ></input>
          <div className="bg-[#F3F4F6] p-4 rounded-xl m-1">
            <CiSearch className="text-xl"></CiSearch>
          </div>
        </div>

        

        <Image
          src="https://i.ibb.co/z5VLBFB/imamlogo.png"
          alt=""
          width={65}
          height={35}
        />
      </div>
    </div>
  );
};

export default Navbar;
