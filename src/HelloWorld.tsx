import { spring } from "remotion";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { animated, useSpring, useTrail } from "@react-spring/web";
import React from "react";

export const HelloWorld: React.FC = ({}) => {
  const frame = useCurrentFrame();
  const circles = [
    {
      x: 30,
      y: 100,
      transformOri: "150px center",
      moveCircleX: interpolate(frame, [271, 281], [30, -200], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [100, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    },
    {
      x: 90,
      y: 50,
      transformOri: "152px center",
      moveCircleX: interpolate(frame, [271, 281], [90, -50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [50, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    },
    {
      x: -10,
      y: 50,
      transformOri: "155px center",
      moveCircleX: interpolate(frame, [271, 281], [-10, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [50, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    },
    {
      x: 0,
      y: -10,
      transformOri: "160px center",
      moveCircleX: interpolate(frame, [271, 281], [0, 100], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [Number(-10), 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    },
    {
      x: 75,
      y: -10,
      transformOri: "165px center",
      moveCircleX: interpolate(frame, [271, 281], [75, 250], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [-10, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    },
  ];
  const circles2 = [
    { x: -200, y: 50, transformOri: "150px center" },
    { x: -50, y: 50, transformOri: "152px center" },
    { x: 0, y: 50, transformOri: "155px center", vis: "false" },
    { x: 100, y: 50, transformOri: "160px center" },
    { x: 250, y: 50, transformOri: "165px center" },
  ];

  // Fade out the animation at the end
  const scale = interpolate(
    frame,
    [0, 20, 21, 25, 30, 48, 50, 65, 69, 71, 73, 84, 271, 272, 280, 512],
    [1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.13, 1.1, 1.1, 1.1, 1.1, 1.1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const shrink = interpolate(frame, [271, 280], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(
    frame,
    [0, 20, 21, 25, 30, 48, 50, 65, 69, 71, 73, 84],
    [0.5, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 0.5, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const opacity2 = interpolate(frame, [143, 150, 271, 280], [0, 1, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity3 = interpolate(frame, [143, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const Circle = (props: { children: any; rotate: boolean }) => {
    return (
      <animated.div
        className="w-80 h-80 bg-white rounded-full mx-auto my-auto absolute"
        style={{
          backgroundColor: "white",
          scale,
          opacity,
          filter: "url(#goo)",
          transform:
            frame < 271 && props.rotate
              ? orbitAnimation2.rotate.to((r) => `rotate(${r}deg)`)
              : "",
          position: "relative",
          visibility: frame < 271 ? "visible" : "hidden",
        }}
      >
        {props.children}
      </animated.div>
    );
  };
  function moveX(x1: number, x2: number) {
    const circle1 = circles[x1];
    const circle2 = circles2[x2];

    if (circle1 && circle2) {
      return interpolate(frame, [271, 281], [circle1.x, circle2.x], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    return 0; // Fallback in case of undefined circles
  }
  function moveY(y1: number, y2: number) {
    const circle1 = circles[y1];
    const circle2 = circles2[y2];

    if (circle1 && circle2) {
      return interpolate(frame, [271, 281], [circle1.y, circle2.y], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    return 0; // Fallback in case of undefined circles
  }
  const moveCircle1X = interpolate(frame, [271, 281], [30, Number(-200)], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle1Y = interpolate(frame, [271, 281], [Number(100), 50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle2X = interpolate(frame, [271, 281], [90, Number(-50)], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle2Y = interpolate(frame, [271, 281], [Number(50), 50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle3X = interpolate(frame, [271, 281], [0, Number(100)], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle3Y = interpolate(frame, [271, 281], [Number(0), 50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle4X = interpolate(frame, [271, 281], [75, Number(250)], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const moveCircle4Y = interpolate(frame, [271, 281], [Number(-10), 50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const moveChunkX = interpolate(
    frame,
    [143, 150],
    [Number(50), Number(-150)],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const moveChunkY = interpolate(frame, [143, 150], [Number(150), 350], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const CircleSmall = () => {
    const smallCircleShift = useSpring({
      from: { x: moveChunkX, y: moveChunkY }, // Start at the origin (inside the large circle)
      to: { x: moveChunkX, y: moveChunkY }, // End position, moving away from the large circle
      config: { tension: 120, friction: 14 }, // Spring config for smoothness
      loop: false, // You can set this to true if you want it to loop
    });
    return (
      <animated.div
        className="w-20 h-20 bg-white rounded-full mx-auto my-auto absolute  inset-0"
        style={{
          ...smallCircleShift,
          opacity: opacity3,
          filter: "url(#goo)",
          scale: shrink,
        }}
      >
        {trail2.map((style, idx) => (
          <animated.div
            className="w-4 h-12 bg-white inset-0"
            style={{
              ...style,
              position: "relative", // Make sure it's positioned absolutely
              transformOrigin: "0 center", // Adjust orbit radius
              transform: orbitAnimation.rotate.to((r) => `rotate(${r}deg)`),
              // translateX: translateX,
              borderRadius: "999px",
              x: "0",
              y: "0",
              filter: "url(#goo)",
              opacity: opacity2,
            }}
          />
        ))}
      </animated.div>
    );
  };
  const scaleValue = interpolate(
    frame,
    [
      143, 153, 163, 173, 183, 193, 203, 213, 223, 233, 243, 253, 271, 272, 280,
      512,
    ], // Scaling from start to halfway and back to start
    [1, 1.05, 1, 1, 1.05, 1, 1, 1.05, 1, 1, 1.05, 1, 1.1, 1, 1, 1], // Scale down to 0.5, then up to 1, and back down
  );
  const trail = useTrail(circles.length, {
    scale: scaleValue, // Use frame-based scaling
    config: { tension: 200, friction: 13 },
  });
  const trail2 = useTrail(2, {
    scale: scaleValue, // Use frame-based scaling
    config: { tension: 200, friction: 3 },
  });
  const orbitAnimation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true, // Infinite loop for continuous rotation
    config: { duration: 2000 }, // 3 seconds per revolution
  });
  const orbitAnimation2 = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true, // Infinite loop for continuous rotation
    config: { duration: 8000 }, // 3 seconds per revolution
  });

  const midCirclesShift = useSpring({
    from: { x: circles[0].x, y: circles[0].y },
    to: { x: circles2[0].x, y: circles2[0].y }, // End position, moving away from the large circle
    config: { tension: 120, friction: 14 }, // Spring config for smoothness
    loop: false, // You can set this to true if you want it to loop
  });
  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill className="bg-black">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="15" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <Circle rotate={false}>
        <Circle rotate={true}>
          {trail.map((style, index) => {
            return (
              <animated.div
                key={index}
                style={{
                  ...style,
                  position: "absolute", // Make sure it's positioned absolutely
                  width: "180px",
                  height: "180px" /*frame < 271 ? "180px" : "300px"*/,
                  backgroundColor: "yellow",
                  transform:
                    frame < 271 ? style.scale.to((s) => `scale(${s})`) : "", // Apply frame-based
                  borderRadius: "80px",
                  x: circles[index].moveCircleX + "%",
                  y: circles[index].moveCircleY + "%",
                  filter: "url(#goo)",
                  opacity: opacity3,
                  visibility:
                    circles2[index].vis && frame > 271 ? "hidden" : "visible",
                }}
              />
            );
          })}
          {/* <animated.div
            style={{
              position: "absolute", // Make sure it's positioned absolutely
              width: "180px",
              height: "180px",
              backgroundColor: "white",
              // transform:
              //   frame < 271 ? style.scale.to((s) => `scale(${s})`) : "", // Apply frame-based
              borderRadius: "80px",
              x: moveCircle1X + "%",
              y: moveCircle1Y + "%",
              filter: "url(#goo)",
              opacity: opacity3,
              visibility: circles2[0].vis && frame > 271 ? "hidden" : "visible",
              // ...midCirclesShift,
            }}
          />
          <animated.div
            style={{
              position: "absolute", // Make sure it's positioned absolutely
              width: "180px",
              height: "180px",
              backgroundColor: "white",
              // transform:
              //   frame < 271 ? style.scale.to((s) => `scale(${s})`) : "", // Apply frame-based
              borderRadius: "80px",
              x: moveCircle2X + "%",
              y: moveCircle2Y + "%",
              filter: "url(#goo)",
              opacity: opacity3,
              visibility: circles2[1].vis && frame > 271 ? "hidden" : "visible",
              // ...midCirclesShift,
            }}
          />
          <animated.div
            style={{
              position: "absolute", // Make sure it's positioned absolutely
              width: "180px",
              height: "180px",
              backgroundColor: "white",
              // transform:
              //   frame < 271 ? style.scale.to((s) => `scale(${s})`) : "", // Apply frame-based
              borderRadius: "80px",
              x: moveCircle3X + "%",
              y: moveCircle3Y + "%",
              filter: "url(#goo)",
              opacity: opacity3,
              visibility: circles2[2].vis && frame > 271 ? "hidden" : "visible",
              // ...midCirclesShift,
            }}
          />
          <animated.div
            style={{
              position: "absolute", // Make sure it's positioned absolutely
              width: "180px",
              height: "180px",
              backgroundColor: "white",
              // transform:
              //   frame < 271 ? style.scale.to((s) => `scale(${s})`) : "", // Apply frame-based
              borderRadius: "80px",
              x: moveCircle3X + "%",
              y: moveCircle3Y + "%",
              filter: "url(#goo)",
              opacity: opacity3,
              visibility: circles2[3].vis && frame > 271 ? "hidden" : "visible",
              // ...midCirclesShift,
            }}
          />
          <animated.div
            style={{
              position: "absolute", // Make sure it's positioned absolutely
              width: "180px",
              height: "180px",
              backgroundColor: "white",
              // transform:
              //   frame < 271 ? style.scale.to((s) => `scale(${s})`) : "", // Apply frame-based
              borderRadius: "80px",
              x: moveCircle4X + "%",
              y: moveCircle4Y + "%",
              filter: "url(#goo)",
              opacity: opacity3,
              visibility: circles2[4].vis && frame > 271 ? "hidden" : "visible",
              // ...midCirclesShift,
            }}
          /> */}
          {/* <Sequence from={0}></Sequence> */}
          {/* <Sequence from={50}>
          <CircleBlack />
        </Sequence> */}
        </Circle>
        <CircleSmall />
      </Circle>
    </AbsoluteFill>
  );
};
