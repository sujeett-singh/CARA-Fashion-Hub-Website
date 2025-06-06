import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { main } from "../Context/MainContext";
import { CartContext } from "../Context/CartContext";

const ShopCards = () => {
  const { addToCart } = useContext(CartContext);
  const { Products } = useContext(main);
  return (
    <>
      {Products.map((info, i) => {
        return (
          <div key={i} className="rounded-2xl border border-[#CCE7D0] my-[15px] py-[10px] px-[12px] fp">
            <NavLink key={i} to={`/${info.id}`}>
              <img
                src={info.img}
                alt=""
                width="283px"
                className="rounded-2xl"
              />
            </NavLink>
            <div className="relative font-bold mt-2">
              <p className="">{info.name}</p>
              <h3 className="pt-[7px] font-extrabold">{info.brandName}</h3>
              <div className="">{info.rating}</div>
              <p className="pt-[7px] text-[#088178] font-bold">{info.price}</p>
              <button
                onClick={() => addToCart(info)}
                className="bg-[#e3e6f3] rounded-full absolute px-4 py-2 right-0 bottom-0 flex items-center"
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCards;
