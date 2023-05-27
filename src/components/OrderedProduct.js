import React from "react";
import { UserAuth } from "../contexts/AuthContext";

const OrderedProduct = () => {
  const { orders } = UserAuth();
  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p>
        {orders.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={item.images[0]}
                  alt="ordered-img"
                />
                <img
                  className="w-full md:hidden"
                  src={item.images[0]}
                  alt="ordered-img"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <div className="mt-1">
                    <span className="md:hidden block text-center underline text-[0.9rem] font-medium text-gray-600">
                      Prize
                    </span>
                    <p className="text-base md:text-xl font-medium leading-6">
                      $ {item.price}
                    </p>
                  </div>
                  <p className="text-base flex flex-col items-center xl:text-lg leading-6 text-gray-800">
                    <span className="md:hidden underline text-[0.9rem] font-medium text-gray-600">
                      Quantity
                    </span>
                    {item.quantity}
                  </p>
                  <p className="text-base flex flex-col items-center xl:text-xl font-semibold leading-6 text-gray-800">
                    <span className="md:hidden underline text-[0.9rem] font-medium text-red-600">
                      Total Prize
                    </span>
                    $ {item.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderedProduct;
