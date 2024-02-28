// Hero component
import React from "react";
import Image from "next/image";

export default function Hero({ children }: any) {
  return (
    <>
    <section className="relative max-w-[2420] h-full overflow-x-clip">
      {children}
      <div className="box-border absolute w-[2496px] h-[2238px] left-[-335px] top-[-143px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[2256px] h-[2056px] left-[-235px] top-[-52px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[2078px] h-[1894px] left-[-146px] top-[29px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1916px] h-[1746px] left-[-65px] top-[103px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1756px] h-[1600px] left-[15px] top-[176px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1602px] h-[1460px] left-[92px] top-[256px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1442px] h-[1314px] left-[172px] top-[319px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1306px] h-[1190px] left-[240px] top-[381px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1180px] h-[1076px] left-[303px] top-[438px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[1058px] h-[964px] left-[364px] top-[494px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[950px] h-[866px] left-[418px] top-[543px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="box-border absolute w-[830px] h-[756px] left-[478px] top-[598px] border-2 border-purple-500 border-opacity-20 rounded-full"></div>

      <div className="absolute top-[284px] left-[332px] text-center">
        <h2 className="">Mud<span className="">i</span>ta</h2>
      </div>
      <Image
        src="/Glyph.png"
        width={56}
        height={56}
        alt="Glyph Icon"
        className=" bg-white z-20 rounded-full shadow-md p-2 absolute top-[212px] left-[167px]"
      />
      <Image
        src="/Icon2.png"
        width={44}
        height={44}
        alt="Glyph Icon"
        className=" bg-white absolute top-[150px] left-[1600px] p-2 rounded-full -rotate-[15] shadow-md z-20"
      />
      <Image
        src="/Icon3.png"
        width={80}
        height={80}
        alt="Glyph Icon"
        className=" bg-white absolute top-[312px] left-[1410px] p-2 rounded-full shadow-md z-20"
      />
      <Image
        src="/Icon4.png"
        width={78}
        height={78}
        alt="Glyph Icon"
        className=" bg-white absolute top-[437px] left-[122px] p-2 rounded-full shadow-md z-20"
      />
      <Image
        src="/Icon5.png"
        width={59}
        height={59}
        alt="Glyph Icon"
        className=" bg-white absolute top-[490px] left-[316px] p-2 rounded-full shadow-md z-20"
      />
      <Image
        src="/Icon6.png"
        width={80}
        height={80}
        alt="Glyph Icon"
        className=" bg-white absolute top-[660px] left-[186px] p-2 rounded-full shadow-md z-20 -rotate-[15]"
      />
      <Image
        src="/Icon7.png"
        width={87}
        height={87}
        alt="Glyph Icon"
        className=" bg-white absolute top-[552px] left-[1663px] p-4 shadow-md z-20 -rotate-[15]"
      />
    </section>
    </>
  );
}
