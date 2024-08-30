"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

import data from "./new_buddy.json";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getStudentId = async () => {
      setLoading(true);
      const temp_uid = localStorage.getItem("uid");
      if (temp_uid) {
        const docRef = doc(db, "user-profiles", temp_uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStudentId(docSnap.data().studentId);
        } else {
          console.log("Data not found!");
        }
      } else {
        router.push("/phase2/login");
      }
      setLoading(false);
    };
    getStudentId();
  }, []);

  return (
    <main className="flex min-h-[932px] max-h-fit items-center flex-col sm:max-w-[360px] sm:mx-auto relative bg-[#F1EDD9] overflow-hidden ">
      <p className="text-gray-400 font-semibold text-center mt-5 ">
        Merge CP50 | Buddy & Budder
      </p>

      {loading ? (
        <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center font-mitr text-[32px] text-[#DC6B19] ">
          Loading...
        </h1>
      ) : (
        <>
          {open ? (
            <>
              <Image
                src="/phase4/yourbuddy.png"
                height={74}
                width={314}
                quality={100}
                alt="your buddy text"
                className="mt-16 fade-in"
              />
              {[0].map(() => {
                const studentData = data.filter((item, index) => {
                  return item.student_id + "" === studentId;
                })[0];
                let budderData, buddyData;
                if (studentData) {
                  budderData = data[studentData.budder_index - 1];
                  buddyData = data[studentData.buddy_index - 1];
                }
                return !studentData ? (
                  <div>
                    Your data not found <br /> Please contact support
                  </div>
                ) : (
                  <div className="ml-4 w-[298px] h-[518px] bg-[url('/phase4/buddydetails.svg')]  bg-contain bg-no-repeat bg-top fade-in">
                    <p className="font-mitr font-normal text-2xl text-black text-center mt-[6.5rem] mr-4">
                      {budderData?.nickname} !
                    </p>
                    <p className="font-mitr font-semibold text-[15px] text-black text-center mt-[17rem] mr-4">
                      IG : {budderData?.instagram_facebook}
                      <br />
                      Line Id : {budderData?.line_id}
                    </p>
                    {/* <p className="font-mitr font-normal text-xl text-black text-center mt-[4rem] mr-4">
                      บัดเดอร์ของนายน่ะ! <br /> มีชื่อว่าาา <br /> "
                      {budderData?.nickname}" <br /> ยังไงล่ะะ!!!
                    </p>
                    <p className="font-mitr font-semibold text-[15px] text-black text-center mt-[14.5rem] mr-4">
                      IG : {budderData?.instagram_facebook}
                      <br />
                      Line Id : {budderData?.line_id}
                    </p> */}
                  </div>
                );
              })}
            </>
          ) : (
            <div
              onClick={(e) => {
                setOpen(true);
              }}
            >
              <Image
                src="/phase4/mail.svg"
                height={300}
                width={384}
                alt="mailbox"
                className="bottom-0 right-0 absolute "
              />
              <Image
                src="/phase4/textbubble.svg"
                height={178}
                width={221}
                alt="textbubble"
                className="bottom-[325px] left-0 absolute animate-rotate-left-right"
              />
            </div>
          )}
        </>
      )}
    </main>
  );
}

const Envalope = ({
  open,
  studentId,
}: {
  open: React.SetStateAction<boolean>;
  studentId: string;
}) => {
  const studentData = data.filter((item, index) => {
    return item.student_id + "" === studentId;
  })[0];
  let budderData, buddyData;
  if (studentData) {
    budderData = data[studentData.budder_index - 1];
    buddyData = data[studentData.buddy_index - 1];
  }
  return (
    <div className="absolute bottom-2 bg-[#E4E4E4] h-[206px] w-[323px] rounded-xl p-0 shadow-lg font-mitr text-white mt-[15vh] text-center font-semibold mx-auto space-y-[3px]">
      {open ? (
        <div className="w-[90%] mt-2 py-2 bottom-2 absolute h-[90%] flex flex-col items-center justify-center bg-[#B99470] left-4 overflow-y-scroll">
          {!studentData ? (
            <div>
              Your data not found <br /> Please contact support
            </div>
          ) : (
            <div className="absolute top-0 py-2 w-[80%] flex flex-col items-start justify-center  mx-auto font-light text-left">
              <br />
              <br />
              <br />
              <p className="self-center text-center font-normal">
                เลื่อนจดหมายลงเพื่อดูรายละเอียด
                <br />|
                <br />|
                <br />V
              </p>
              <br />
              <p className="self-center font-normal">รายละเอียดบัดดี้</p>
              <p>
                <span className="underline font-normal">ชื่อเล่น</span>
                {" : "}
                {buddyData?.nickname}
              </p>
              <p>
                <span className="underline font-normal">ไอจี/เฟซบุ๊ก</span>
                {" : "}
                {buddyData?.instagram_facebook}
              </p>
              <p>
                <span className="underline font-normal">ของที่ชอบ</span>
                {" : "}
                {buddyData?.favorite_foods}
              </p>
              <p className="w-full">
                <span className="underline font-normal">
                  ข้อความที่ฝากถึงบัดเดอร์
                </span>
                {" : "}
                <br />
                <pre className="font-mitr text-center">
                  "{buddyData?.message_to_budder}"
                </pre>
              </p>

              <p className="self-center text-center font-normal">
                .<br />
                .<br />
                เลื่อนอีกนิดนะ !
              </p>
              <br />
              <br />
              <br />
              <p className="self-center font-normal">รายละเอียดบัดเดอร์</p>
              <p>
                <span className="underline font-normal">คำใบ้ 1</span>
                {" : "}
                {budderData?.hint_1}
              </p>
              <p>
                <span className="underline font-normal">คำใบ้ 2</span>
                {" : "}
                {budderData?.hint_2}
              </p>
              <p>
                <span className="underline font-normal">คำใบ้ 3</span>
                {" : "}
                {budderData?.hint_3}
              </p>
              <br />
              <br />
              <br />
            </div>
          )}
        </div>
      ) : (
        <></>
      )}

      <div className={` ${open ? "animate-flip-180" : ""}`}>
        <div className="absolute top-0 -left-[4px]">
          <EnvalopeTip />
        </div>
        <div
          className={`absolute left-[125px] top-[90px] ${
            open ? "" : "animate-rotate-left-right"
          }`}
          style={{ zIndex: open ? "-20" : "20" }}
        >
          <Image src="/heart.png" width={75} height={75} alt="heart" />
        </div>
      </div>
    </div>
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
