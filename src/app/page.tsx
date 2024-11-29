"use client";

import { redirect } from "next/navigation";
import Image from "next/image";

export default function Root() {
  function onClick() {
    redirect("/home");
  }
  return (
    <main className="main h-screen bg-primary flex justify-center items-center">
      <section className="hero p-4">
        <div className="hero-content flex flex-col text-center md:flex-row">
          <div className="max-w-md">
            <h1 className="text-4xl font-semibold mb-2">Contractor's</h1>
            <h1 className="text-4xl font-semibold">Companion</h1>
            <p className="py-6">Your trusted partner in every situation!</p>
            <button
              className="bg-blue-300 rounded my-2 px-4 py-2"
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
              className="md:ml-10 pt-0 mt-6 md:mt-0 shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
