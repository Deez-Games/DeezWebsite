import React, { useState } from "react";
import style from "../scss/Slideshow.module.scss";

type Props = {
  images: string[];
  id: string;
};

const Slideshow = ({ images, id }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={style.container} id={`Slideshow_${id}`}>
      <button
        className={`${style.changePhoto} ${style.left}`}
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        &#10094;
      </button>
      <div className={style.images}>
        <img
          src={images[Math.abs(count % images.length)]}
          alt={images[Math.abs(count % images.length)]}
        />
      </div>
      <button
        className={`${style.changePhoto} ${style.right}`}
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
