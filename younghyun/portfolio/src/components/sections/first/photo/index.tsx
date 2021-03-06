import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Particle from "components/sections/first/photo/particle";
import CircleText from "components/sections/first/svg/circle";
import picture from "assets/first/image.png";

const NUMBER_OF_PARTICLES = 1300;

function PixelRain(props: propsIState) {
  const { isPC, isTablet, theme } = props;
  const beforeThemeColor = useRef(theme.background);
  const animationRef = useRef<number>();

  useEffect(() => {
    const image = new Image();
    image.src = picture;

    image.addEventListener("load", () => {
      const canvas = document.querySelector(".profile") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      canvas.width = 512;
      canvas.height = 512;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ) as ImageData;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let particlesArray = [] as Particle[];
      let mappedImage = [] as any;

      for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
          const red = pixels.data[4 * y * pixels.width + x * 4];
          const green = pixels.data[4 * y * pixels.width + x * 4 + 1];
          const blue = pixels.data[4 * y * pixels.width + x * 4 + 2];
          const brightness = calcRelativeBrightness(red, green, blue);
          const cell = [brightness, [red, green, blue]];
          row.push(cell);
        }
        mappedImage.push(row);
      }

      function init() {
        for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
          particlesArray.push(new Particle(canvas, ctx, mappedImage, theme));
        }
      }

      init();

      function animate() {
        ctx.globalAlpha = 0.03;
        ctx.fillStyle = theme.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
          particlesArray[i].update();
          ctx.globalAlpha = particlesArray[i].speed * 0.15;
          particlesArray[i].draw();
        }

        animationRef.current = requestAnimationFrame(animate);
      }

      if (beforeThemeColor.current !== theme.background) {
        beforeThemeColor.current = theme.background;
        cancelAnimationFrame(animationRef.current as number);
      }
      animationRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationRef.current as number);
    });
  }, [theme]);

  function calcRelativeBrightness(red: number, green: number, blue: number) {
    return (
      Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      ) / 100
    );
  }

  return (
    <CanvasContainer isPC={isPC} isTablet={isTablet}>
      <CircleText scale={140} rotate={90} fillColor={theme.third} />
      <CircleText scale={120} fillColor={theme.secondary} />
      <CanvasOuterCover>
        <CanvasInnerCover>
          <Canvas className="profile"></Canvas>
        </CanvasInnerCover>
      </CanvasOuterCover>
    </CanvasContainer>
  );
}

export default PixelRain;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  theme: ThemeIState;
}

const CanvasContainer = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: ${(props) => (props.isPC ? "25" : props.isTablet ? "50" : "60")}%;

  position: relative;

  z-index: -1;
`;

const CanvasOuterCover = styled.div`
  width: 100%;

  padding: 3px;
  border-radius: 50%;
  border: 3px solid ${({ theme }: { theme: ThemeIState }) => theme.primary};
`;

const CanvasInnerCover = styled.div`
  width: 100%;

  padding: 5px;
  border-radius: 50%;
  border: 3px solid ${({ theme }: { theme: ThemeIState }) => theme.primary};
`;

const Canvas = styled.canvas`
  width: 100%;

  border-radius: 50%;
`;
