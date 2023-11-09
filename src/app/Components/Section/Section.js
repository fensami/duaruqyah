"use-client";

import Image from "next/image";
import double from "../../../../public/double.svg";
import bookmark from "../../../../public/bookmark 1.svg";
import light from "../../../../public/light.svg";
import share from "../../../../public/Share.svg";
import report from "../../../../public/report.svg";

const Section = () => {
  return (
    <div>
      <div className="px-8 py-3 border rounded-xl">
        <h1 className="text-red-400 font-bold">
          <span className="text-[rgb(31,164,91)]">Section :</span>The servant is
          dependent on his Lord
        </h1>
      </div>

      <div className="border mt-3 rounded-xl px-8">
        <div className="flex gap-2 items-center mt-4">
          <Image
            src="https://i.ibb.co/8N1Mdx7/allah-1-Traced.png"
            alt="Picture of the author"
            width={35}
            height={35}
          />

          <p className="text-base font-semibold text-[#1FA45B]">
            1. The servant is dependent on his Lord #1
          </p>
        </div>

        <p className="mt-6 text-base font-normal">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah
          says(interpretation of the meaning): O mankind, you are those in need
          of Allah, while Allah is the Free of need, the Praiseworthy.
        </p>

        <div className="mt-7">
          <p className="text-base font-semibold text-[#1FA45B]">Reference:</p>
          <p className="text-base font-medium text-[#1FA45B]">
            Surah Al-Fatir 35:15
          </p>
        </div>

        <div className="flex justify-end gap-9 items-center mt-7 mb-4">
          <Image width={24} height={24} alt="" src={double}></Image>
          <Image width={24} height={24} alt="" src={bookmark}></Image>
          <Image width={24} height={24} alt="" src={light}></Image>
          <Image width={24} height={24} alt="" src={share}></Image>
          <Image width={24} height={24} alt="" src={report}></Image>
        </div>
      </div>
      <div className="border mt-3 rounded-xl px-8">
        <div className="flex gap-2 items-center mt-4">
          <Image
            src="https://i.ibb.co/8N1Mdx7/allah-1-Traced.png"
            alt="Picture of the author"
            width={35}
            height={35}
          />

          <p className="text-base font-semibold text-[#1FA45B]">
            1. The servant is dependent on his Lord #1
          </p>
        </div>

        <p className="mt-6 text-base font-normal">
        Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.
        </p>

        <dir>
        لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
        </dir>

        <p className="mt-6 text-base font-normal">
        <span className="text-base font-semibold">Transliteration:</span> Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa alaa kulli shay in qadir. Allaahumma laa maani a limaa a taita wa laa mu tia limaa mana ta wa laa yanfa u dhal-jaddi minka al-jaddu
        </p>
        <p className="mt-6 text-base font-normal">
        <span className="text-base font-semibold">Translation:</span> There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.
        </p>

        <div className="mt-7">
          <p className="text-base font-semibold text-[#1FA45B]">Reference:</p>
          <p className="text-base font-medium text-[#1FA45B]">
            Surah Al-Fatir 35:15
          </p>
        </div>

        <div className="flex justify-end gap-9 items-center mt-7 mb-4">
          <Image width={24} height={24} alt="" src={double}></Image>
          <Image width={24} height={24} alt="" src={bookmark}></Image>
          <Image width={24} height={24} alt="" src={light}></Image>
          <Image width={24} height={24} alt="" src={share}></Image>
          <Image width={24} height={24} alt="" src={report}></Image>
        </div>
      </div>
    </div>
  );
};

export default Section;
