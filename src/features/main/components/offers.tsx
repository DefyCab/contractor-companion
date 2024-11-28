import Image from "next/image";

export type Props = {
  litersOfPaint: number;
};

export function Offers({ litersOfPaint }: Props) {
  return (
    <div className="flex flex-col w-60 justify-center">
      <main className="flex flex-col justify-center items-center bg-slate-50">
        <article className="p-4 border-2 border-slate-200 h-64 flex flex-col justify-center items-center w-60">
          <Image src="/bauhaus.png" width={130} height={130} alt="bauhaus" />
          <p className="text-sm font-semibol mt-2">
            You need {litersOfPaint} liters of paint
          </p>
          <div className="flex flex-row justify-center">
            <div className="p-4">
              <p className="text-[0.5rem]">1 liter x 2</p>
              <Image
                src="/bauhaus-becker-1.jpg"
                width={40}
                height={20}
                alt="bauhaus"
              />
            </div>
            <div className="p-4">
              <p className="text-[0.5rem]">3 liter x 2</p>
              <Image
                src="/bauhaus-beckers-3.jpg"
                width={40}
                height={20}
                alt="3-liters"
              />
            </div>
          </div>
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
      </main>
    </div>
  );
}
