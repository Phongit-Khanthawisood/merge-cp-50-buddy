"use client";

import { SignInFunction } from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StudentIdForm from "@/components/StudentIdForm";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user", user);
          console.log("userEmail", user.email);
          setUserId(user.uid);
          setUserEmail(user.email ? user.email : "");
          setLoginStatus(true);
        } else {
          setLoginStatus(false);
        }
        setLoading(false);
      });
    };
    checkLogin();
  }, [auth]);

  return (
    <main className="flex min-h-[900px] h-screen flex-col sm:max-w-[360px] sm:mx-auto  bg-[#F3F7EC] overflow-hidden ">
      <HeaderSection />
      <ComingSoonTitleSection />

      {loading ? (
        <div className="flex justify-center items-center font-mitr text-[20px] text-[#DC6B19] ">
          loading...
        </div>
      ) : loginStatus ? (
        <div className="flex justify-center items-center">
          <StudentIdForm userId={userId} userEmail={userEmail} />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Button
            className="font-mitr font-semibold text-[20px] py-6 px-4 bg-[#F9E2AF] text-[#DC6B19] rounded-full drop-shadow-xl w-auto hover:bg-[#E58B4A] hover:text-white "
            onClick={SignInFunction}
          >
            Pre-register
          </Button>
        </div>
      )}
      <FooterSection />

      <Toaster />
    </main>
  );
}

const HeaderSection = () => {
  return (
    <header className="relative font-mitr text-[#CBCBCB] text-center font-semibold w-auto mx-auto mt-5 space-y-[3px]">
      <p className="text-[11px]">Merge CP50</p>
      <p className="text-[9px] border-t-[1px] border-[#E5E5E5] py-1 px-6">
        Computer Engineering
      </p>
      <Image
        className="absolute -left-[27px] top-0 "
        src="/phase1/dino1.png"
        alt="dino image"
        width={23}
        height={25}
      />
    </header>
  );
};

const ComingSoonTitleSection = () => {
  return (
    <div className="relative w-full h-1/2">
      <Image
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        src="/phase1/textbg.svg"
        alt="text background"
        width={655}
        height={1000}
      />
      <Image
        style={{
          transform: "translate(-53%, -50%)",
          animation: "wiggle 3s ease-in-out infinite",
        }}
        className="absolute top-1/2 left-1/2 "
        src="/phase1/comingsoon.svg"
        alt="coming soon text"
        width={655}
        height={1000}
      />
    </div>
  );
};

const FooterSection = () => {
  return (
    <div className="relative h-[310px]">
      <Image
        className="absolute -left-1/4"
        src="/phase1/comp.svg"
        alt="computer image"
        width={310}
        height={310}
      />
      <Image
        className="absolute right-[-10%] bottom-[-30px]"
        src="/phase1/headphone.svg"
        alt="headphone image"
        width={156}
        height={265}
      />
    </div>
  );
};
