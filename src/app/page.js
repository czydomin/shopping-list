"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [itemName, setItemName] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  function handleClick() {
    setShoppingList([...shoppingList, itemName]);
  }
  return (
    <main className="bg-orange-600 h-screen flex justify-center">
      <div className="w-1/4  flex flex-col items-center">
        <Header />
        <div className=" w-full flex  space-x-4">
          <input
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            className="px-2 py-2 rounded flex flex-1"
            type="text"
            placeholder="Item Name"
          />

          <button
            onClick={handleClick}
            className="bg-cyan-900 p-2 rounded text-white"
          >
            Add
          </button>
        </div>
        <div className=" flex flex-col gap-4 py-4 flex-1 w-full">
          {shoppingList.map((item) => {
            return (
              <button
                onClick={() => {
                  console.log(item, shoppingList);
                  setShoppingList(shoppingList.filter((x) => x !== item));
                }}
                key={item}
                className=" text-white bg-cyan-900 p-2 rounded  "
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
function Header() {
  return <p className=" font-bold text-2xl p-4">Shopping list</p>;
}
