import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ home }) => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About us" },
    { to: "/electricity", label: "Electricity" },
    { to: "/gas", label: "Gas" },
    { to: "/water", label: "Water" },
    { to: "/new-connection", label: "New Connection" },
    { to: "/supplier", label: "Our Supplier" },
  ];

  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <div
      className={`flex gap-2 p-4 justify-between ${!home && "bg-tealGreen"}`}
      ref={ref}
    >
      <div className="font-bold text-xl text-primaryGreen">UTILITIES SAVE</div>
      <div className="flex gap-4 capitalize items-center font-medium">
        {links.map((link, index) => (
          <Link
            className={`${
              location.pathname === link.to ? "text-primaryGreen" : "text-white"
            }`}
            key={index}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
        <Link className="px-6 py-2 bg-primaryGreen rounded-full hover:text-tealGreen transition-all">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
