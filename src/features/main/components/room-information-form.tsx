import { getRoomData } from "../actions";

export function RoomInformationForm() {
  return (
    <main className="bg-yellow-100">
      <div className="flex h-screen justify-center">
        <form action={getRoomData}>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="enter ceiling height"
              type="text"
              id="ceilingheight"
              name="ceilingheight"
            />
          </article>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="enter wallheight"
              type="text"
              id="wallLength"
              name="wallLength"
            />
          </article>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="number of walls"
              type="text"
              id="numberOfWalls"
              name="numberOfWalls"
            />
          </article>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="number of windows"
              type="text"
              id="numberOfWindows"
              name="numberOfWindows"
            />
          </article>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="number of doors"
              type="text"
              id="numberOfDoors"
              name="numberOfDoors"
            />
          </article>
          {/* <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="number of coats"
              type="text"
              id="numbefOfCoats"
              name="numberOfCoats"
            />
          </article> */}
          <div className="flex justify-center">
            <button
              className="bg-slate-400 rounded my-2 px-8 py-4"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
