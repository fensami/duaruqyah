"use-client";

import Image from "next/image";

import { BiBookmark, BiHomeAlt } from "react-icons/bi";
import { LuMenuSquare } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import jarIcon from '../../../public/ruqyah 1.svg'
import duaIcon from '../../../public/dua-info 1.svg'
import menuIcon from '../../../public/54-menu-2.svg'
import bookIcon from '../../../public/books 1.svg'
import supportIcon from '../../../public/I want to support.svg'

const LeftSideBar = () => {
  return (
    <div className="border items-center bg-white pb-20 rounded-3xl">
      <Image
        src="https://i.ibb.co/ZNHS5Tc/logo.png"
        alt="Picture of the author"
        width={200}
        height={100}
      />

      <div className="rounded-full mt-36 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <BiHomeAlt className="text-2xl text-[#868686]"></BiHomeAlt>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <LuMenuSquare className="text-2xl text-[#868686]"></LuMenuSquare>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <HiOutlineLightBulb className="text-2xl text-[#868686]"></HiOutlineLightBulb>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <BiBookmark className="text-2xl text-[#868686]"></BiBookmark>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <Image width={20} height={20} src={jarIcon} alt=""></Image>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <Image width={20} height={20} src={duaIcon} alt=""></Image>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <Image width={20} height={20} src={menuIcon} alt=""></Image>
      </div>
      <div className="rounded-full mt-7 bg-[#E8F0F5] flex justify-center items-center w-12 h-12  mx-auto">
        <Image width={20} height={20} src={bookIcon} alt=""></Image>
      </div>


     
        <div className="flex justify-center mt-60">
        <Image width={57} height={57} src={supportIcon} alt=""></Image>
        </div>


    </div>
  );
};

export default LeftSideBar;
