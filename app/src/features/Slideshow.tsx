import React from "react";
import style from "../scss/Slideshow.module.scss";

type Props = {
  images: string[];
  id: string;
};

const Slideshow = ({ images, id }: Props) => {
  return (
    <div className={style.container} id={`Slideshow_${id}`}>
      {images.map((name: string) => (
        <img key={name} src={name} alt={name} />
      ))}
      <a className={style.changePhoto}>&#10094;</a>
      <a className={style.changePhoto}>&#10095;</a>
    </div>
  );
};

export default Slideshow;
