import React from "react";
import Button from "@/components/items/Button";
import Link from "next/link";

const Investors = () => {
  return (
    <div
      id="Investors"
      className="h-full flex flex-col items-center justify-center"
    >
      <div className="h-full flex flex-col items-center p-10">
        <h2 className="text-7xl tracking-wider pt-10 pb-10 font-bold [text-shadow:_0px_0px_10px_rgba(255,_255,_255,_1);]">
          BECOME OUR PARTNER
        </h2>
        <div className="flex gap-x-20 p-10">
          <div className="flex flex-col p-10 bg-white text-2xl text-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              doloremque voluptate repellendus, officiis hic quod nulla quasi
              consectetur asperiores aut in veniam nam ab ratione corrupti animi
              error, accusamus veritatis esse. Voluptatem esse, nisi atque cum
              ipsam dicta molestias ab exercitationem eius illum ea voluptates
              itaque delectus maiores eveniet omnis velit at.
            </p>
            <span className="w-64 text-white bg-primary-button mt-10 tracking-wider p-5 text-center">
              <Link href="/">I am investor</Link>
            </span>
          </div>
          <div className="flex flex-col p-10 bg-white text-2xl text-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              doloremque voluptate repellendus, officiis hic quod nulla quasi
              consectetur asperiores aut in veniam nam ab ratione corrupti animi
              error, accusamus veritatis esse. Voluptatem esse, nisi atque cum
              ipsam dicta molestias ab exercitationem eius illum ea voluptates
              itaque delectus maiores eveniet omnis velit at.
            </p>
            <span className="w-64 text-white bg-primary-button mt-10 tracking-wider p-5 text-center">
              <Link href="/">I am partner</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
