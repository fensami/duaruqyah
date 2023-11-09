'use-client'

import Image from "next/image";
import Image2 from '../../../../public/005-fever.svg'

import { CiSearch } from "react-icons/ci";

const Categories = () => {
  return (
    <div className=" border rounded-t-xl">
  <div className='rounded-t-xl bg-[#1FA45B]  font-bold text-center px-28 py-3'>
     <h1 className='text-white'>Category</h1>
  </div>

  
  <div className="flex items-center border mx-1 rounded-xl mt-4">
  <CiSearch className="text-2xl ml-2"></CiSearch>
  <input
            type="search"
            placeholder="Search by Categories"
            className="p-3 text-base rounded-xl font-normal  border-gray-400 outline-none"
          ></input>

  </div>
 <div className="bg-[#CFE0E5] flex mt-5 items-center gap-3 rounded-xl mx-1">
 <Image className="mt-4 bg-[#CFE0E5] rounded-xl p-2"
      src={Image2}
      alt="Picture of the author"
      width={50}
      height={40}    />

     <article className="flex gap-5 justify-between">
     <div>
        <p className="text-base font-semibold text-[#1FA45B]">Introduction to Dua</p>
        <p className="text-sm font-normal text-[#7E7E7E]">Subcategory: 11</p>
      </div>
      <div className="text-center">
        <p className="text-base font-semibold">15</p>
        <p className="text-sm font-normal text-[#7E7E7E]">Duas</p>
      </div>
     </article>
 </div>


 <div className="mt-5 mx-2">
  <p className="text-base font-medium">What is Dua</p>
  <p className="text-base mt-4 font-medium">Conditions for Dua to be successful</p>
  <p className="text-base mt-4 font-medium">The Methode Of Dua</p>
  <p className="text-base mt-4 font-medium">Before Dua</p>
  <p className="text-base mt-4 font-medium">Prerequisites of writing Dua and drinking it’s water</p>
  <p className="text-base mt-4 font-medium">The correct way to perform Dua for a small child</p>
 </div>

 <div className="bg-[#CFE0E5] flex mt-5 items-center gap-3 rounded-xl mx-1">
 <Image className="mt-4 bg-[#CFE0E5] rounded-xl p-2"
      src={Image2}
      alt="Picture of the author"
      width={50}
      height={40}    />

     <article className="flex gap-5 justify-between">
     <div>
        <p className="text-base font-semibold text-[#1FA45B]">Introduction to Dua</p>
        <p className="text-sm font-normal text-[#7E7E7E]">Subcategory: 11</p>
      </div>
      <div className="text-center">
        <p className="text-base font-semibold">15</p>
        <p className="text-sm font-normal text-[#7E7E7E]">Duas</p>
      </div>
     </article>
 </div>

 <div className="bg-[#CFE0E5] flex mt-5 items-center gap-3 rounded-xl mx-1">
 <Image className="mt-4 bg-[#CFE0E5] rounded-xl p-2"
      src={Image2}
      alt="Picture of the author"
      width={50}
      height={40}    />

     <article className="flex gap-5 justify-between">
     <div>
        <p className="text-base font-semibold text-[#1FA45B]">Introduction to Dua</p>
        <p className="text-sm font-normal text-[#7E7E7E]">Subcategory: 11</p>
      </div>
      <div className="text-center">
        <p className="text-base font-semibold">15</p>
        <p className="text-sm font-normal text-[#7E7E7E]">Duas</p>
      </div>
     </article>
 </div>

    </div>
  );
};

export default Categories;