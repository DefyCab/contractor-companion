"use client";

import Image from "next/image";
import { useState } from "react";

export type Props = {
  litersOfPaint: number;
};

export function Offers({ litersOfPaint }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <main className="flex flex-col justify-center items-center border-2 border-slate-500 rounded-lg">
        <h3 className="text-xl mb-2">Offers</h3>
        <article
          onClick={() => {
            setIsVisible(true);
          }}
          className="cursor-pointer flex flex-col justify-center items-center border-2 border-slate-200 my-2"
        >
          <Image
            className="my-1 p-1"
            src="/bauhaus.png"
            width={130}
            height={130}
            alt="bauhaus"
          />
          <div className="flex flex-row">
            <p className="ml-2">{litersOfPaint} liters for</p>
            <p className="text-red-600">&nbsp;696</p>
            <p className="mr-2">&nbsp;SEK</p>
          </div>
        </article>
        <article className="cursor-pointer flex flex-col justify-center items-center border-2 border-slate-200 my-2">
          <Image
            className="my-1 p-1"
            src="/k-rauta-main.png"
            width={110}
            height={110}
            alt="k-rauta"
          />
          <div className="flex flex-row">
            <p className="ml-2">{litersOfPaint} liters for</p>
            <p className="text-red-600">&nbsp;729</p>
            <p className="mr-2">&nbsp;SEK</p>
          </div>
        </article>
        <article className="cursor-pointer flex flex-col justify-center items-center border-2 border-slate-200 my-2">
          <Image
            className="my-1 p-1"
            src="/hornbach.png"
            width={130}
            height={130}
            alt="hornbach"
          />
          <div className="flex flex-row">
            <p className="ml-2">{litersOfPaint} liters for</p>
            <p className="text-red-600">&nbsp;749</p>
            <p className="mr-2">&nbsp;SEK</p>
          </div>
        </article>
        <div className={isVisible ? "visible" : "invisible"}>
          <article className="p-4 border-2 border-slate-200 h-64 flex flex-col justify-center items-center w-64">
            <Image src="/bauhaus.png" width={130} height={130} alt="bauhaus" />
            <p className="text-sm font-semibold mt-2">
              You got {litersOfPaint} liters of paint!
            </p>
            <div className="flex flex-row justify-center">
              <div className="p-4">
                <p className="text-[0.6rem]">1 liter x 2</p>
                <Image
                  src="/bauhaus-becker-1.jpg"
                  width={40}
                  height={20}
                  alt="bauhaus"
                />
              </div>
              <div className="p-4">
                <p className="text-[0.6rem]">3 liter x 2</p>
                <Image
                  src="/bauhaus-beckers-3.jpg"
                  width={40}
                  height={20}
                  alt="3-liters"
                />
              </div>
            </div>
            <p className="text-sm font-semibold">Our price 696 SEK</p>
            <p className="text-[0.5rem] font-semibold">
              Show this barcode in register to claim your offer!
            </p>
            <div className="p-2">
              <Image
                src="/bauhaus-barcode.gif"
                width={130}
                height={20}
                alt="barcode"
              />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
