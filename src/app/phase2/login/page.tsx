"use client";

import { Button } from "@/components/ui/button";
import { Cloud } from "@/components/ui/cloud";
import { Stardrop } from "@/components/ui/starbrop";
import { ST } from "next/dist/shared/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-[900px] h-screen flex-col sm:max-w-[360px] sm:mx-auto  bg-[##F1EDD9] overflow-hidden ">
      <Cloud />

      <LoginSection />
    </main>
  );
}

const LoginSection = () => {
  return (
    <section className="relative font-mitr text-[#CBCBCB] mt-[15vh] text-center font-semibold w-auto mx-auto space-y-[3px]">
      <p className="text-3xl text-[#4A249D] mb-5">Merge CP50</p>
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
