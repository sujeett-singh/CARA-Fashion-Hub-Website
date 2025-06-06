import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { main } from "../Context/MainContext";
import { CartContext } from "../Context/CartContext";

const FProductData = () => {
  const { Products } = useContext(main);
  const { addToCart } = useContext(CartContext);
  

  return (
    <>
      {Products.filter((v, i) => v.id < 5).map((info, i) => {
        return (
          <NavLink key={i} to={`/${info.id}`}>
            <div className="rounded-2xl border border-[#CCE7D0] my-[15px] py-[10px] px-[12px] fp">
              <img
                src={info.img}
                alt=""
                width="283px"
                className="rounded-2xl"
              />
              <div className="relative font-bold mt-2">
                <p className="">{info.name}</p>
                <h3 className="pt-[7px] font-extrabold">{info.brandName}</h3>
                <div className="">{info.rating}</div>
                <p className="pt-[7px] text-[#088178] font-bold">
                  {info.price}
                </p>
                <button
                onClick={() => addToCart(info)}
                className="bg-[#e3e6f3] rounded-full absolute px-4 py-2 right-0 bottom-0 flex items-center"
              >
                Add to cart
              </button>
              </div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default FProductData;
