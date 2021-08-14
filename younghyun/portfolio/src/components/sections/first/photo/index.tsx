import React, { useEffect } from "react";
import picture from "assets/first/image.jpg";

function PixelRain() {
  useEffect(() => {
    const image = new Image();
    image.src = picture;

    image.addEventListener("load", () => {
      const canvas = document.querySelector(".profile");
      console.log(canvas);
    });
  });
}

export default PixelRain;
