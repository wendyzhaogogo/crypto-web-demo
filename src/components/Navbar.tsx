import { Link, useLocation } from "react-router-dom";
import { routes } from "../config/routes";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`flex flex-col items-center py-2 px-4 ${
              location.pathname === route.path ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {route.icon}
            <span className="text-xs mt-1">{route.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
