"use client";

import { getRoomData } from "../actions";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RoomData } from "../types";
import { calculatePaint } from "../logic";
import {
  PaintBucket,
  House,
  Ruler,
  HousePlus,
  PanelsTopLeft,
  DoorOpen,
} from "lucide-react";
import { BottomNav } from "./bottom-nav";
import { redirect } from "next/navigation";

export function RoomInformationForm() {
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

    reset();
  };
  const totalLiters = rooms.reduce((sum, room) => sum + room, 0);

  return (
    <main className="bg-slate-50 border-2 border-slate-200">
      <h1 className="text-center text-xl font-normal text-slate-700">
        Paint Calculator
      </h1>
      <div className="flex justify-center">
        <form action={getRoomData} onSubmit={handleSubmit(onSubmit)}>
          <article className="flex justify-between p-2">
            <div className="flex">
              <div className="flex mr-2 items-center justify-center">
                <Ruler />
              </div>
              <input
                {...register("ceilingHeight")}
                className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm shadow-md"
                placeholder="height m"
                type="text"
                id="ceilingHeight"
                name="ceilingHeight"
              />
            </div>
          </article>
          <article className="flex flex-col p-2">
            {wallFields.map((input, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="flex mr-2 items-center justify-center">
                    <HousePlus />
                  </div>
                  <input
                    {...register(`wall${index}`)}
                    className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm my-0.5 shadow-md"
                    placeholder="wall length m"
                    type="text"
                    id="wallLength"
                    name={`wall${index}`}
                  />
                </div>
              );
            })}
            <div className="flex flex-row justify-between mt-2">
              <button
                onClick={addWallField}
                className="bg-blue-300 text-slate-700 rounded my-2 px-4 py-2 shadow-md"
              >
                Add Wall
              </button>
              <button
                onClick={removeWallField}
                className="bg-blue-300  text-slate-700 rounded my-2 px-4 py-2 shadow-md"
              >
                Remove Wall
              </button>
            </div>
          </article>
          <article className="flex justify-between p-2">
            <div className="flex mr-2 items-center justify-center">
              <PanelsTopLeft />
            </div>
            <input
              {...register("numberOfWindows")}
              className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm shadow-md"
              placeholder="number of windows"
              type="text"
              id="numberOfWindows"
              name="numberOfWindows"
            />
          </article>
          <article className="flex justify-between p-2">
            <div className="flex  items-center justify-center">
              <DoorOpen />
            </div>
            <input
              {...register("numberOfDoors")}
              className="border-slate-300 border-2 outline-slate-400 p-2 rounded-sm shadow-md"
              placeholder="number of doors"
              type="text"
              id="numberOfDoors"
              name="numberOfDoors"
            />
          </article>
          <div className="flex flex-row px-2 justify-between">
            <button
              className="bg-blue-300 rounded my-2 px-4 py-2 shadow-md"
              type="submit"
            >
              Calculate
            </button>
            <button
              onClick={addRoom}
              className="bg-emerald-300 rounded my-2 px-4 py-2 shadow-md"
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
            <li key={index} className="flex items-center space-x-1">
              <House />
              <p className="font-semibold">Room</p>
              <p className="font-bold text-blue-600"> {room} Liters</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-1 mb-2">
        <PaintBucket />
        <p className="font-semibold">Total </p>
        <p className="font-bold text-green-600">
          {totalLiters ? `${totalLiters} Liters` : ""}
        </p>
      </div>
      <BottomNav />
    </main>
  );
}
