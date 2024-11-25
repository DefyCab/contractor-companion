import { roomInformation } from "@/features/main/actions";

export default async function RoomInformationForm() {
  return (
    <main className="flex h-screen justify-center bg-slate-200">
      <form action={roomInformation}>
        <article className="flex flex-col p-4">
          <input
            className="border-slate-300 rounded-md p-2"
            placeholder="enter ceiling heigth"
            type="text"
            id="ceilingHeigth"
            name="ceilingHeigth"
          />
        </article>
        <article className="flex flex-col p-4">
          <input
            className="border-slate-300 rounded-md p-2"
            placeholder="enter wallheigth"
            type="text"
            id="wallLength"
            name="wallLength"
          />
        </article>
      </form>
    </main>
  );
}
