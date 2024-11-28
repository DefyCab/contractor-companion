import Image from "next/image";

export function Offers() {
  return (
    <div className="flex flex-col">
      <main>
        <article className="p-4 border-2 border-slate-400">
          <Image src="/bauhaus.png" width={130} height={130} alt="bauhaus" />
          <div className="flex flex-row justify-center">
            <div className="p-2">
              <p className="">1L x 100 SEK</p>
              <Image
                src="/bauhaus-becker-1.jpg"
                width={40}
                height={20}
                alt="bauhaus"
              />
            </div>
            <div className="p-2">
              <p className="text-xs">3L x 299 SEK</p>
              <Image
                src="/bauhaus-beckers-3.jpg"
                width={40}
                height={20}
                alt="3-liters"
              />
            </div>
          </div>
          <div className="p-2">
            <Image
              src="/bauhaus-barcode.gif"
              width={130}
              height={20}
              alt="barcode"
            />
          </div>
        </article>
        <article className="p-4 border-2 border-slate-400">
          <Image
            className="rounded-2xl"
            src="/k-rauta-main.png"
            width={130}
            height={130}
            alt="k-rauta"
          />
        </article>
        <article className="p-4 border-2 border-slate-400">
          <Image
            className="rounded-2xl "
            src="/hornbach.png"
            width={130}
            height={130}
            alt="hornbach"
          />
        </article>
      </main>
    </div>
  );
}
