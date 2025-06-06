import React, { useContext, useState } from "react";
import Header from "./Header";
import Newsletter from "../Sections/Newsletter";
import Footer from "./Footer";
import { CartContext } from "../Context/CartContext";
import bg from "../assets/About/about-banner.png";
import "./Main.css"

const Card = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [val, setVal] = useState("0");
  const headerData = [
    {
      heading: "#StayCool",
      desc: "Save more with coupons & up to 70% off!",
      img: bg,
    },
  ];
  const increment = () => {
    setVal(parseInt(val) + 1);
  };
  const decrement = () => {
    if (val > 1) {
      setVal(parseInt(val) - 1);
    }
  };
  return (
    <>
      <Header HData={headerData} />
      {cart.length === 0 ? (
        <p className=" w-full text-center pt-10">No items in the cart.</p>
      ) : (
        <section className="card-sec px-[80px] py-[40px]">
          <table className="card-table w-[100%] relative  mx-auto">
            <thead className="border h-[40px]">
              <tr className="table-head">
                <th>REMOVE</th>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>PRICE</th>
                {/* <th>QUANTITY</th> */}
                {/* <th>SUBTOTAL</th> */}
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className=" w-[50px] h-[50px] bg-green-400 rounded-full p-2"
                    >
                      X
                    </button>
                  </td>
                  <td>
                    <img
                      src={item.img}
                      alt=""
                      width="70px"
                      className="mx-[35%] card-table-item-img"
                    />
                  </td>
                  <td className="w-auto card-table-item-name">{item.name}</td>
                  <td className="card-table-item-price">{item.price}</td>
                  {/* <td>
                    <button
                      onClick={decrement}
                      className="bg-zinc-200 drop-shadow-lg h-[40px] w-10 "
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="count"
                      id="count"
                      value={val}
                      class="card-table-item-quantity  w-[20px] h-[40px]  ml-2"
                    />
                    <button
                      onClick={increment}
                      className=" bg-zinc-200 drop-shadow-lg h-[40px] w-10 "
                    >
                      +
                    </button>
                  </td> */}
                  {/* <td class="card-table-item-subtotal">{item.price }* {val}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Card;
