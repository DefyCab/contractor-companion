"use client";

import { getRoomData, roomInformation } from "../actions";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RoomData } from "../types";
import { calculatePaint } from "../logic";
import { PaintBucket } from "lucide-react";
import { House } from "lucide-react";

export function RoomInformationForm() {
  // const [litersPerRoom, setLitersPerRoom] = useState<number>();
  const [litersPerRoom, setLitersPerRoom] = useState<number | undefined>(
    undefined
  );
  const [rooms, setRooms] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

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

  const onSubmit = (data: any) => {
    let wallLength = 0;

    if (data.wall0) {
      wallLength = wallLength + Number(data.wall0);
    }

    if (data.wall1) {
      wallLength = wallLength + Number(data.wall1);
    }
    if (data.wall2) {
      wallLength = wallLength + Number(data.wall2);
    }
    if (data.wall3) {
      wallLength = wallLength + Number(data.wall3);
    }

    const roomData: RoomData = {
      ceilingHeight: data.ceilingHeight,
      wallLength: wallLength,
      numberOfWindows: data.numberOfWindows,
      numberOfDoors: data.numberOfDoors,
    };

    setLitersPerRoom(calculatePaint(roomData));
  };

  const addRoom = () => {
    if (litersPerRoom !== undefined) {
      setRooms((prevRooms) => [...prevRooms, litersPerRoom]);
    }
  };

  return (
    <main className="bg-slate-100">
      <h1 className="text-center text-xl font-semibold">Room Information</h1>
      <div className="flex justify-center">
        <form action={getRoomData} onSubmit={handleSubmit(onSubmit)}>
          <article className="flex flex-col p-4">
            <div>
              <label className="text-slate-600">Height</label>
              <input
                {...register("ceilingHeight")}
                className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm"
                placeholder="m"
                type="text"
                id="ceilingHeight"
                name="ceilingHeight"
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
                    {...register(`wall${index}`)}
                    className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm m-1"
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
              {...register("numberOfWindows")}
              className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm"
              placeholder="amount"
              type="text"
              id="numberOfWindows"
              name="numberOfWindows"
            />
          </article>
          <article className="flex flex-col p-4">
            <label className="text-slate-600">number of doors</label>
            <input
              {...register("numberOfDoors")}
              className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm"
              placeholder="amount"
              type="text"
              id="numberOfDoors"
              name="numberOfDoors"
            />
          </article>
          <div className="flex flex-row gap-4 justify-between p-4">
            <button
              className="bg-slate-400 rounded my-2 px-4 py-2"
              type="submit"
            >
              Calculate
            </button>
            <button
              onClick={addRoom}
              className="bg-emerald-400 rounded my-2 px-4 py-2"
              type="button"
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <PaintBucket />
        <p className="font-semibold pl-2">{litersPerRoom} Liters</p>
      </div>
      <div className="flex justify-center">
        <ul>
          {rooms.map((room, index) => (
            <li key={index} className="flex items-center space-x-2">
              <House />
              <p className="font-semibold">Room</p>
              <p className="font-bold text-blue-600"> {room} Liters</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
