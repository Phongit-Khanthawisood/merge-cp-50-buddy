"use client";

import { Button } from "@/components/ui/button";
import { Cloud } from "@/components/ui/cloud";
import { Stardrop } from "@/components/ui/starbrop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[900px] h-screen flex-col sm:max-w-[360px] sm:mx-auto  bg-[#F1EDD9] overflow-hidden ">
      <DecoSession />

      <LoginSection />
    </main>
  );
}

const LoginSection = () => {
  return (
    <section className="relative font-mitr text-[#CBCBCB] mt-[15vh] text-center font-semibold w-auto mx-auto space-y-[3px]">
      <div className="w-full h-auto flex items-center justify-center">
        <Image
          src="/phase2/Merge_CP50_text.svg"
          height={60}
          width={200}
          alt="merge cp text"
        />
      </div>

      <div className="relative w-[300px] h-[240px] ">
        <div className="w-[300px] h-[240px] bg-[#009FBD] rounded-[20px] flex flex-col space-y-5 items-center justify-center z-20 absolute">
          <input
            type="text"
            className="px-2 h-[40px] rounded-md w-[90%] text-black"
            placeholder="student id"
          ></input>
          <input
            type="text"
            className="px-2 h-[40px] rounded-md w-[90%] text-black"
            placeholder="password"
          ></input>
          <Button variant="login">LOG IN</Button>
        </div>
        <div className="absolute -bottom-[150px]">
          <Stardrop />
        </div>
      </div>
    </section>
  );
};

const DecoSession = () => {
  return (
    <div className="relative flex w-full h-[140px]">
      <Cloud />

      <Image
        src="/phase2/star.svg"
        height={60}
        width={30}
        alt="merge cp text"
        className="absolute top-[100px] left-[20px] animate-[up-and-down_2.5s_infinite]"
      />
      <Image
        src="/phase2/star.svg"
        height={60}
        width={34}
        alt="merge cp text"
        className="absolute  top-[70px] left-[100px] animate-[up-and-down_3s_infinite]"
      />
      <Image
        src="/phase2/star.svg"
        height={60}
        width={30}
        alt="merge cp text"
        className="absolute  top-[40px] left-[150px] animate-[up-and-down_2s_infinite]"
      />

      <Image
        src="/phase2/star.svg"
        height={60}
        width={25}
        alt="merge cp text"
        className="absolute  top-[80px] left-[250px] animate-[up-and-down_2s_infinite]"
      />
      <Image
        src="/phase2/star.svg"
        height={60}
        width={34}
        alt="merge cp text"
        className="absolute  top-[37px] left-[300px] animate-[up-and-down_2s_infinite]"
      />
    </div>
  );
};
