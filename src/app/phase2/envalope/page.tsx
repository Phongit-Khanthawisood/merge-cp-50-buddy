"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[900px] h-screen items-center flex-col sm:max-w-[360px] sm:mx-auto relative bg-[#F1EDD9] overflow-hidden ">
      <p className="text-gray-400 font-semibold text-center top-5 absolute">
        Merge CP50
      </p>

      <div className="mt-[20vh]">
        <EnvalopeClose />
        <p className="text-gray-400 font-semibold text-center mt-6">
          Click the heart to see the hint
        </p>
      </div>
    </main>
  );
}

const EnvalopeClose = () => {
  return (
    <section className="relative font-mitr text-white mt-[15vh] text-center p-0 font-semibold w-[323px] h-[206px] mx-auto space-y-[3px]">
      <div className="bg-[#E4E4E4] h-[206px] w-[323px] rounded-xl p-0 shadow-lg">
        <div className="absolute top-0 -left-[4px]">
          <EnvalopeTip />
        </div>
        <div className="absolute top-[40%] left-[40%] animate-rotate-left-right">
          <Image src="/heart.png" width={75} height={75} alt="heart" />
        </div>
      </div>
    </section>
  );
};

const EnvalopeTip = () => {
  return (
    <div>
      <svg
        width="332"
        height="135"
        viewBox="0 0 332 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_652_173)">
          <path
            d="M171.745 124.968C168.297 127.388 163.703 127.388 160.255 124.968L9.17902 18.9352C1.18146 13.3221 5.15305 0.75 14.9238 0.75L317.076 0.75C326.847 0.75 330.819 13.3221 322.821 18.9352L171.745 124.968Z"
            fill="#F1F1F1"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_652_173"
            x="0.904907"
            y="0.75"
            width="330.19"
            height="134.033"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_652_173"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_652_173"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
