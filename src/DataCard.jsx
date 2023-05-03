import React from "react";

function DataCard({ product }) {
  const { picture, name, resale_price, original_price } = product;

  return (
    <div className="bg-white rounded-md shadow-md hover:shadow-2xl cursor-pointer border">
      <div className="">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-xl h-72"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="font-semibold tracking-wide">
              {name && name.slice(0, 76) + ".."}
            </h2>
            <div className="text-right">
              <div>
                <p className="text-lg font-semibold">
                  {resale_price}{" "}
                  <span className="font-bold lg:text-2xl">৳</span>
                </p>
                <p className="text-sm line-through">
                  {original_price}
                  <span className="font-bold lg:text-2xl">৳</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
