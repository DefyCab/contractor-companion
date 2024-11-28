"use client";

import { redirect } from "next/navigation";
import Image from "next/image";

export default function Root() {
  function onClick() {
    redirect("/home");
  }
  return (
    <div className="flex justify-center">
      <main className="bg-slate-50 flex justify-center items-center">
        <section className="hero p-4">
          <div className="flex flex-col text-center">
            <div className="">
              <h1 className="text-4xl font-bold mb-2">Contractor</h1>
              <h1 className="text-4xl font-bold">Companion</h1>
              <p className="py-6">Your trusted partner in every situation!</p>
              <button
                className="bg-slate-400 rounded my-2 px-8 py-4"
                onClick={onClick}
              >
                Start!
              </button>
            </div>
            <div className="flex justify-center py-3">
              <Image
                src="https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                height={300}
                alt="Contractor Hero Picture"
                className="pt-0 mt-6 shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
