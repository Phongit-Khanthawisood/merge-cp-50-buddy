"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[900px] h-screen flex-col sm:max-w-[360px] sm:mx-auto  bg-[#F3F7EC] overflow-hidden ">
      <Link
        href="/phase2/login"
        className="text-xl m-2 p-2 w-40 flex items-center justify-center bg-blue-300 rounded-xl"
      >
        Login
      </Link>
      <Link
        href="/phase2/envalope"
        className="text-xl m-2 p-2 w-40 flex items-center justify-center bg-blue-300 rounded-xl"
      >
        Envalope
      </Link>
    </main>
  );
}
