export function RoomInformationForm() {
  return (
    <main className="bg-yellow-100">
      <div className="flex h-screen justify-center">
        <form>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="enter ceiling heigth"
              type="text"
              id="ceilingHeigth"
              name="ceilingHeigth"
            />
          </article>
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="enter wallheigth"
              type="text"
              id="wallLength"
              name="wallLength"
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
          <article className="flex flex-col p-4">
            <input
              className="border-slate-300 p-2"
              placeholder="number of coats"
              type="text"
              id="numbefOfCoats"
              name="numberOfCoats"
            />
          </article>
        </form>
      </div>
    </main>
  );
}
