import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.svg";

function Layout({ children }) {
  const location = useLocation();
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "IT Services", path: "/service" },
    { title: "Shop", path: "/shop" },
  ];

  return (
    <div>
      {/* content */}
      <div className="pb-44">{children}</div>

      {/* footer */}
      <div className="fixed top-0 left-0 right-0">
        <div className="flex w-full h-16 justify-center items-center bg-secondary">
          <img src={logo} className="px-10 mr-10" />
          {menuItems.map((item) => (
            <div className="flex flex-col items-center">
              <div className="px-20 text-white text-md py-2">
                <Link to={`${item.path}`}> {item.title} </Link>
              </div>
              {location.pathname === item.path && (
                <div className="bg-white">
                  <div className="h-1 w-20"></div>
                </div>
              )}
            </div>
          ))}
          <div className="rounded-lg pl-20">
            <button className="px-10 py-2 h-10 text-md align-text-top hover:align-top bg-red-500 text-white rounded-lg hover:bg-red-600">
              Lets talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
