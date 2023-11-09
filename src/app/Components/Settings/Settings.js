"use-client";
import Image from "next/image";
import menu from "../../../../public/54-menu-2.svg";
import language from "../../../../public/language.svg";
import general from "../../../../public/general.svg";

const Settings = () => {
  return (
    <div className="    border  rounded-3xl">
      <div className="font-bold text-center w-80">
        <h1 className="text-[#868686] py-4">Settings</h1>

        <div className="flex justify-center bg-[#F7F8FA] py-4 mb-4  mx-5 gap-3 rounded-md items-center">
          <Image width={24} height={24} alt="" src={language}></Image>

          <p className=" text-base font-normal ">Language Settings</p>
        </div>

        <div className="flex justify-center bg-[#F7F8FA] py-4 mb-4  mx-5 gap-3 rounded-md items-center">
          <Image width={24} height={24} alt="" src={general}></Image>

          <p className=" text-base font-normal ">General Settings</p>
        </div>
        <div className="flex justify-center bg-[#F7F8FA] py-4 mb-4  mx-5 gap-3 rounded-md items-center">
          <Image width={24} height={24} alt="" src={menu}></Image>

          <p className=" text-base font-normal ">Font Settings</p>
        </div>
        <div className="flex justify-center bg-[#F7F8FA] py-4 mb-4  mx-5 gap-3 rounded-md items-center">
          <Image width={24} height={24} alt="" src={menu}></Image>

          <p className=" text-base font-normal "> Appearance Settings</p>
        </div>

       
       
      </div>
        <p className="ml-4 text-blue-400 text-base font-normal">
          Night Mode
        </p>
    </div>
  );
};

export default Settings;
