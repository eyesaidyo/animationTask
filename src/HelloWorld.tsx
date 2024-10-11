import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

import { animated, useSpring, useTrail } from "@react-spring/web";
import React from "react";

export const HelloWorld: React.FC = ({}) => {
  const frame = useCurrentFrame();
  const circles = [
    {
      moveCircleX: interpolate(frame, [271, 281], [30, -90], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [100, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      height: interpolate(
        frame,
        [
          275, 279, 285, 290, 300, 304, 308, 315, 328, 330, 339, 344, 350, 353,
          359, 364, 370, 373, 379, 384, 386, 389, 390, 393, 398, 401, 405, 408,
          413, 418, 424, 428, 433, 437, 439, 444, 449, 452, 456, 458, 463, 469,
          473, 477, 480, 483, 489, 493, 496, 500, 502, 508, 512,
        ],
        [
          180, 100, 150, 100, 120, 150, 100, 180, 100, 125, 150, 100, 130, 159,
          100, 125, 150, 100, 130, 100, 150, 100, 120, 150, 100, 100, 130, 100,
          160, 140, 120, 128, 144, 100, 110, 105, 111, 133, 123, 139, 150, 122,
          150, 100, 120, 150, 100, 100, 130, 100, 150, 100, 105,
        ],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      ),
    },

    {
      moveCircleX: interpolate(frame, [271, 281], [90, -5], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [50, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      height: interpolate(
        frame,
        [
          275, 279, 285, 290, 300, 304, 308, 315, 328, 330, 339, 344, 350, 353,
          359, 364, 370, 373, 379, 384, 386, 389, 390, 393, 398, 401, 405, 408,
          413, 418, 424, 428, 433, 437, 439, 444, 449, 452, 456, 458, 463, 469,
          473, 477, 480, 483, 489, 493, 496, 500, 502, 508, 512,
        ],
        [
          120, 100, 150, 100, 120, 180, 100, 150, 100, 125, 150, 100, 130, 100,
          150, 100, 120, 150, 100, 180, 100, 150, 100, 130, 100, 150, 100, 100,
          120, 150, 100, 100, 150, 100, 105, 150, 100, 120, 150, 100, 180, 100,
          150, 125, 150, 100, 130, 100, 150, 100, 100, 150, 100,
        ],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      ),
    },
    {
      moveCircleX: interpolate(frame, [271, 281], [-10, -5], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [50, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      height: interpolate(
        frame,
        [
          275, 279, 285, 290, 300, 304, 308, 315, 328, 330, 339, 344, 350, 353,
          359, 364, 370, 373, 379, 384, 386, 389, 390, 393, 398, 401, 405, 408,
          413, 418, 424, 428, 433, 437, 439, 444, 449, 452, 456, 458, 463, 469,
          473, 477, 480, 483, 489, 493, 496, 500, 502, 508, 512,
        ],
        [
          100, 150, 100, 120, 180, 100, 150, 100, 180, 100, 120, 150, 100, 180,
          100, 150, 100, 130, 100, 150, 100, 120, 150, 100, 180, 100, 150, 125,
          150, 100, 130, 100, 150, 100, 180, 100, 125, 150, 100, 100, 150, 100,
          125, 150, 100, 130, 100, 100, 120, 180, 100, 150, 100,
        ],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      ),
    },
    {
      moveCircleX: interpolate(frame, [271, 281], [0, 79], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [Number(-10), 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      height: interpolate(
        frame,
        [
          275, 279, 285, 290, 300, 304, 308, 315, 328, 330, 339, 344, 350, 353,
          359, 364, 370, 373, 379, 384, 386, 389, 390, 393, 398, 401, 405, 408,
          413, 418, 424, 428, 433, 437, 439, 444, 449, 452, 456, 458, 463, 469,
          473, 477, 480, 483, 489, 493, 496, 500, 502, 508, 512,
        ],
        [
          150, 100, 180, 100, 180, 100, 150, 100, 120, 150, 100, 180, 100, 150,
          100, 130, 100, 150, 100, 125, 150, 100, 130, 100, 100, 120, 150, 100,
          180, 100, 150, 125, 150, 150, 100, 130, 100, 150, 100, 105, 150, 120,
          100, 150, 100, 120, 180, 100, 150, 120, 150, 100, 180,
        ],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      ),
    },

    {
      moveCircleX: interpolate(frame, [271, 281], [75, 163], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      moveCircleY: interpolate(frame, [271, 281], [-10, 50], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      height: interpolate(
        frame,
        [
          275, 279, 285, 290, 300, 304, 308, 315, 328, 330, 339, 344, 350, 353,
          359, 364, 370, 373, 379, 384, 386, 389, 390, 393, 398, 401, 405, 408,
          413, 418, 424, 428, 433, 437, 439, 444, 449, 452, 456, 458, 463, 469,
          473, 477, 480, 483, 489, 493, 496, 500, 502, 508, 512,
        ],
        [
          120, 150, 100, 180, 100, 125, 150, 100, 130, 100, 150, 100, 105, 180,
          180, 100, 150, 100, 100, 150, 100, 120, 100, 120, 180, 100, 150, 100,
          125, 150, 100, 130, 150, 100, 100, 130, 100, 150, 100, 100, 100, 150,
          100, 130, 100, 150, 100, 180, 100, 150, 125, 150, 100,
        ],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      ),
    },
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
  const scale2 = interpolate(frame, [275, 279, 295, 310], [1, 0.9, 0.6, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const height = interpolate(
    frame,
    [275, 279, 285, 290, 300, 304, 308, 315, 328],
    [180, 100, 150, 100, 180, 100, 150, 100, 120],
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
          visibility: frame < 275 ? "visible" : "hidden",
        }}
      >
        {props.children}
      </animated.div>
    );
  };

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
    config: { tension: 200, friction: 10 },
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
                  height: frame < 271 ? "180px" : circles[index].height + "px",
                  backgroundColor: "white",
                  transform: style.scale.to((s) => `scale(${s})`),
                  borderRadius: "80px",
                  x: circles[index].moveCircleX + "%",
                  y: circles[index].moveCircleY + "%",
                  filter: "url(#goo)",
                  opacity: opacity3,
                  visibility: "visible",
                  scaleX: scale2,
                }}
              />
            );
          })}
        </Circle>
        <CircleSmall />
      </Circle>
    </AbsoluteFill>
  );
};
