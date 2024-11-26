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

    if (wallFields.length < 4) {
      setWallFields([...wallFields, wallfield]);
    }
  };

  const removeWallField = () => {
    const removeWallFields = wallFields.slice(0, -1);

    setWallFields(removeWallFields);
  };

  return (
    <main className="bg-slate-100">
      <h1 className="text-center text-xl font-semibold">Room Information</h1>
      <div className="flex h-screen justify-center">
        <form action={getRoomData}>
          <article className="flex flex-col p-4">
            <div>
              <label className="text-slate-600">Height</label>
              <input
                className="border-slate-300 p-2"
                placeholder="m"
                type="text"
                id="ceilingheight"
                name="ceilingheight"
              />
            </div>
          </article>
          <article className="flex flex-col p-4">
            {wallFields.map((input, index) => {
              return (
                <div key={index}>
                  <label className="text-slate-600">{`Wall ${
                    index + 1
                  }`}</label>
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
            <div className="flex flex-row gap-4 justify-between">
              <button
                onClick={addWallField}
                className="bg-slate-400 rounded my-2 px-4 py-2"
              >
                Add Wall
              </button>
              <button
                onClick={removeWallField}
                className="bg-slate-400 rounded my-2 px-4 py-2"
              >
                Remove Wall
              </button>
            </div>
          </article>
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
