import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Layout = () => {
  return (

      <div className="min-h-screen flex flex-col box-border">
        <header className="w-full bg-teal-200 flex items-center justify-around text-4xl h-40">
          <Link to="/weather">Погода</Link>
          <Link to="/crypto">Крипта</Link>
        </header>
        <div className="flex-grow max-w-[1400px] mx-auto">
          <Outlet />
        </div>

        <footer className="box-border bg-teal-600 flex justify-center items-center text-4xl h-20">
          ЭТО ФУТЕР ЕПТА
        </footer>
      </div>

  );
};
