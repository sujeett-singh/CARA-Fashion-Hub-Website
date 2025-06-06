import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { main } from "../Context/MainContext";
import { CartContext } from "../Context/CartContext";

const FProductDetails = () => {
  const { Products } = useContext(main);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const [val, setVal] = useState("1");
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
      {Products.filter((info) => info.id == id).map((value, i) => {
        return (
          <section
            key={i}
            class="shop-card w-full relative bg-white pt-[20px]  px-[80px] "
          >
            <div class="shop-item w-[100%]  flex flex-wrap">
              <div class="shop-item-01 w-[41%] relative mr-[50px] ">
                <img src={value.img} alt="" class="w-[100%] " />
              </div>

              <div class="shop-item-01 w-[48%] pt-[20px] ">
                <p class="font-bold text-[12px]">Home/T-shirt</p>
                <h3 class="item-name font-bold text-[20px] pt-[40px] pb-[20px]">
                  {value.name}
                </h3>
                <h2 class="text-[26px] leading-[3.4rem] font-extrabold">
                  {value.price}
                </h2>
                <select class="border px-[10px] py-[5px] text-[13px] font-bold border-gray-400 rounded-md block  mb-[10px] bg-gray-300">
                  <option value="">Select Size</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">2XL</option>
                  <option value="">3XL</option>
                </select>

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

                <button
                  onClick={() => addToCart(value)}
                  class=" rounded-lg  ml-10 font-bold text-white bg-[#088178] py-[12px] px-[30px] text-[1.2rem]"
                >
                  Add to cart
                </button>
                <p class="item-product text-[20px] font-bold pt-[40px] pb-[20px] text-[#222]">
                  Product Details
                </p>
                <span class="item-detail font-bold leading-[1.5rem] text-[15px]">
                  Introducing our latest fashion masterpiece, the "Vibrant
                  Spring" shirt! Embrace the captivating allure of nature's most
                  mesmerizing phenomenon with this truly enchanting garment. Let
                  it be a symbol of your adventurous spirit and your love for
                  the extraordinary. Dare to be different and illuminate every
                  room you enter with your unique sense of style. Crafted with
                  meticulous attention to detail, this shirt showcases an
                  exquisite blend of style and comfort. The fabric, a luxurious
                  blend of soft cotton and breathable polyester, drapes
                  effortlessly against your skin, providing a soothing touch and
                  ensuring all-day comfort.
                </span>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default FProductDetails;
