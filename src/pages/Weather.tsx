import React from "react";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchweather } from "../lib/fetchweather.tsx";
export const Weather = () => {
  const [place, setPlace] = useState("auto:ip");
  const { data, isPending, error } = useQuery({
    queryKey: ["weather", place],
    queryFn: () => fetchweather(place),
    placeholderData: keepPreviousData
  });
  if (isPending) return <span className="text-3xl">ЗАГРУЗОООООООК</span>;
 
  return (
    <div>
    <select value={place} onChange={(e)=>{
        setPlace(e.target.value)
    }}>
        <option value="auto:ip">По IP (bad)</option>
        <option value="Moscow">Москва</option>
        <option value="London">Лондон</option>
        <option value="Beijing">Пекин</option>
        <option value="56.334602,43.948548">Хз кароч</option>
    </select>
      <div className="flex text-xl flex-col bg-yellow-500">
        <span className="block">ТИМПЕРАТУРА В {data.location.name}</span>
        <span className="block">{data.current.temp_c} ГРОДУСОВ</span>
      </div>
      <div className="mt-5 flex items-center">
        <span className="block">ПАГОДНЫЙ УСЛОВИЯ:  {data.current.condition.text}</span>
        <img src={data.current.condition.icon}/>
      </div>
    </div>
  );
};
