import { redirect } from "next/navigation";

const OnClick = () => {
  redirect("/home/offers");
};

export function BottomNav() {
  return (
    <main>
      <nav
        onClick={OnClick}
        className="bg-slate-300 h-12 rounded-md shadow-md flex justify-center items-center cursor-pointer"
      >
        <h3 className="text-lg text-slate-800 ">Get Offers!</h3>
      </nav>
    </main>
  );
}
