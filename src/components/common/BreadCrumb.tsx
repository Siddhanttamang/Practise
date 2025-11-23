import React from "react";
import { Link, useLocation } from "react-router-dom";
import SlashImg from "../../assets/SlashImg.png";

const breadcrumbNameMap: Record<string, string> = {
  "": "Home",
  marketplace: "Marketplace",
  addVegetables: "Add Vegetables",
  cart: "Cart",
  product: "Product",
  vegetables: "Vegetables Prices",
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="bg-white p-2">
      <ul className="flex items-center gap-2 text-sm text-[#2E4053]">
        {pathnames.length === 0 ? (
          <li></li>
        ) : (
          <li>
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>
          </li>
        )}

        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const name =
            breadcrumbNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <React.Fragment key={routeTo}>
              <img src={SlashImg} className="w-2 h-2" alt="slash" />
              {isLast ? (
                <li>{name}</li>
              ) : (
                <li>
                  <Link to={routeTo} className="cursor-pointer hover:underline">
                    {name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
