import React, { useCallback } from "react";
import { useState, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchcrypto } from "../lib/fetchcrypto.tsx";
export const Crypto = () => {
  const { data, isPending, fetchNextPage, error } = useInfiniteQuery({
    queryKey: ["ticker"],
    queryFn: (meta) => fetchcrypto(meta.pageParam),
    initialPageParam: 1,
    getNextPageParam: (r) => r.next
  });
  const cursorRef = useIntersection(()=>{fetchNextPage()})
  if (isPending) return <h1>ЗАГРУЗКО</h1>;
  const flatdata = data?.pages.flatMap(item=>item.data)
  return (
    <>
    <button className="text-xl" onClick={()=>{
        fetchNextPage()
    }}>LoadMore</button>
    { <div className="flex flex-col w-[500px]">
      {flatdata?.map((item, i) => (
          <div ref={flatdata.length-i==5 ? cursorRef : null} key={i} className="border border-slate-200 rounded-xl relative my-2 px-4 py-2 text-xl font-bold">
            {item.name} : ${item.symbol}
            <span className="absolute right-5 top-0">№{i}</span>
          </div>
        ))}
    </div>}
    </>
  );
};

export const useIntersection = (callbackFn: () => void) => {
    const unsubscribe = useRef(()=>{})

    return useCallback((el) => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(int => {
                if (int.isIntersecting){
                    callbackFn();
                    unsubscribe.current()
                }
            })
        }, {
          threshold:0.5
        })

        if (el){
            observer.observe(el);
            unsubscribe.current = () => observer.disconnect()
        } else{
            unsubscribe.current()
        }
    },[])
}