"use client";

import { getRoomData } from "../actions";
import { useState } from "react";

export function RoomInformationForm() {
  const [wallFields, setWallFields] = useState([
    {
      className: "",
      placeholder: "",
      type: "",
      id: "",
      name: "",
    },
  ]);

  const addWallField = () => {
    const wallfield = {
      className: "",
      placeholder: "",
      type: "",
      id: "",
      name: "",
    };

    setWallFields([...wallFields, wallfield]);
  };

  return (
    <main className="bg-slate-100">
      <div className="flex h-screen justify-center">
        <form action={getRoomData}>
          <article className="flex flex-col p-4">
            <label className="text-slate-600">ceiling height</label>
            <input
              className="border-slate-300 p-2"
              placeholder="m"
              type="text"
              id="ceilingheight"
              name="ceilingheight"
            />
          </article>
          {wallFields.map((input, index) => {
            return (
              <div key={index}>
                <label className="text-slate-600">{`Wall ${index + 1}`}</label>
                <input
                  className="border-slate-300 p-2 m-1"
                  placeholder="length"
                  type="text"
                  id="wallLength"
                  name={`wall${index}`}
                />
              </div>
            );
          })}
          <button
            onClick={addWallField}
            className="bg-slate-400 rounded my-2 px-8 py-4>Add Walls"
          >
            Add Wall
          </button>
          <article className="flex flex-col p-4">
            <label className="text-slate-600">number of windows</label>
            <p className="text-sm text-slate-400">Double window count as 2</p>
            <input
              className="border-slate-300 p-2"
              placeholder="amount"
              type="text"
              id="numberOfWindows"
              name="numberOfWindows"
            />
          </article>
          <article className="flex flex-col p-4">
            <label className="text-slate-600">number of doors</label>
            <input
              className="border-slate-300 p-2"
              placeholder="amount"
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
