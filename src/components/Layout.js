import React from "react";
import { Link, useLocation } from "react-router-dom";

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
      <div className="fixed top-10 left-0 right-0">
        <div className="flex w-full justify-center bg-primary items-center">
          {menuItems.map((item) => (
            <div className="flex flex-col items-center">
              <div className="px-20 text-white py-5">
                <Link to={`${item.path}`}> {item.title} </Link>
              </div>
              {location.pathname === item.path && (
                <div className="bg-white">
                  <div className="h-1 w-10"></div>
                </div>
              )}
            </div>
          ))}
          <div className="rounded-lg pl-20">
            <button className="px-10 py-2 text-xl bg-red-500 text-white rounded-lg hover:bg-red-600">
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
