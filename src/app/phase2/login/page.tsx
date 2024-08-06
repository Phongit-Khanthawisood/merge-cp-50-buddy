"use client";

import { Button } from "@/components/ui/button";
import { Cloud } from "@/components/ui/cloud";
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

      <div className="relative w-screen h-[240px]">
        <Button
          variant="login"
          className="absolute z-10 left-[95px] top-[305px]"
        >
          LOG IN
        </Button>
        <Image
          src="/phase2/mailbox.svg"
          height={300}
          width={384}
          alt="merge cp text"
          className="absolute left-[20px]"
        />
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
