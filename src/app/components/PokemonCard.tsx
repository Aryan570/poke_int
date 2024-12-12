"use client"
import Image from "next/image";
import React, { useState } from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  type: string;
  sprite: string;
  values: number[]
}
const mpp = new Map([
  ["electric", "bg-purple-500"],
  ["fire", "bg-red-500"],
  ["geo", "bg-yellow-500"],
  ["water", "bg-blue-500"],
]);
const mpp2 = new Map([
  ["electric", "hover:bg-purple-400"],
  ["fire", "hover:bg-red-400"],
  ["geo", "hover:bg-yellow-400"],
  ["water", "hover:bg-blue-400"],
]);
export const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, type, sprite, values }) => {
  const [Comp, setComp] = useState(false);
  if (Comp) {
    return (
      <div onMouseLeave={() => setComp(false)} className={`flex items-center p-4 h-[216px] bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-105 ${mpp2.get(type)}`}>
        <Image src={sprite} alt={name} className="w-24 h-24" width={150} height={150} />
        <div className="ml-2 flex flex-col gap-2 w-2/3">
          <div className="flex justify-end items-center gap-1 w-full">
            <div className="text-xs">health</div>
            <div className="relative h-2 bg-gray-200 rounded w-full">
              <div
                className="absolute top-0 left-0 h-full bg-emerald-600 rounded"
                style={{ width: `${values[0]}%` }}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 w-full">
            <div className="text-xs">stamina</div>
            <div className="relative h-2 bg-gray-200 rounded w-full">
              <div
                className="absolute top-0 left-0 h-full bg-emerald-600 rounded"
                style={{ width: `${values[1]}%` }}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 w-full">
            <div className="text-xs">defense</div>
            <div className="relative h-2 bg-gray-200 rounded w-full">
              <div
                className="absolute top-0 left-0 h-full bg-emerald-600 rounded"
                style={{ width: `${values[2]}%` }}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 w-full">
            <div className="text-xs">speed</div>
            <div className="relative h-2 bg-gray-200 rounded w-full">
              <div
                className="absolute top-0 left-0 h-full bg-emerald-600 rounded"
                style={{ width: `${values[3]}%` }}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 w-full" >
            <div className="text-xs">attack</div>
            <div className="relative h-2 bg-gray-200 rounded w-full">
              <div
                className="absolute top-0 left-0 h-full bg-emerald-600 rounded w-2/3"
                style={{ width: `${values[4]}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div onMouseEnter={() => setComp(true)} className={`flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-105 ${mpp2.get(type)}`}>
      <Image src={sprite} alt={name} className="w-24 h-24" width={150} height={150} />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500">#{id}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        <span key={type} className={`px-2 py-1 text-xs text-white ${mpp.get(type)} rounded`}>
          {type}
        </span>
      </div>
    </div>
  );
};