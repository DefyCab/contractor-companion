"use client";

import { redirect } from "next/navigation";
import Image from "next/image";

export default function Root() {
  function onClick() {
    redirect("/home");
  }
  return (
    <main className="h-screen bg-slate-100 flex justify-center items-center">
      <section className="hero p-4">
        <div className="hero-content flex flex-col text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Contractor Companion</h1>
            <p className="py-6">Your trusted partner in every situation!</p>
            <button
              className="bg-slate-500 rounded my-2 px-8 py-4"
              onClick={onClick}
            >
              Start!
            </button>
          </div>
          <div className="flex justify-center">
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
  );
}
