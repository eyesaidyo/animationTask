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

const circles = [
  { x: "40%", y: "100%", transformOri: "150px center" },
  { x: "190px", y: "50%", transformOri: "152px center" },
  { x: "-10px", y: "50%", transformOri: "155px center" },
  { x: "10%", y: "-10%", transformOri: "160px center" },
  { x: "85%", y: "-10%", transformOri: "165px center" },
];
const circles2 = [
  { x: "-200%", y: "50%", transformOri: "150px center" },
  { x: "-100%", y: "50%", transformOri: "152px center" },
  { x: "-0%", y: "50%", transformOri: "155px center" },
  { x: "190%", y: "50%", transformOri: "160px center" },
  { x: "300%", y: "50%", transformOri: "165px center" },
];
export const HelloWorld: React.FC = ({}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Fade out the animation at the end
  const scale = interpolate(
    frame,
    [0, 20, 21, 25, 30, 48, 50, 65, 69, 71, 73, 84],
    [1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.13, 1.1],
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
  const Circle = ({ children }: any) => {
    return (
      <animated.div
        className="w-80 h-80 bg-white rounded-full mx-auto my-auto relative"
        style={{
          backgroundColor: frame > 153 ? "black" : "white",
          scale,
          opacity,
          filter: "url(#goo)",
          transform:
            frame < 271
              ? orbitAnimation2.rotate.to((r) => `rotate(${r}deg)`)
              : "",
          position: "relative",
        }}
      >
        {children}
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
  const CircleBlack = () => {
    const styles = useSpring({
      from: { x: moveChunkX, y: moveChunkY }, // Start at the origin (inside the large circle)
      to: { x: moveChunkX, y: moveChunkY }, // End position, moving away from the large circle
      config: { tension: 120, friction: 14 }, // Spring config for smoothness
      loop: false, // You can set this to true if you want it to loop
    });
    return (
      <animated.div
        className="w-20 h-20 bg-white rounded-full mx-auto my-auto absolute  inset-0"
        style={{
          ...styles,
          opacity: opacity3,
          filter: "url(#goo)",
          scale: shrink,
        }}
      >
        <animated.div
          className="w-4 h-12 bg-white inset-0"
          style={{
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
        <animated.div
          className="w-4 h-12 bg-white inset-0"
          style={{
            position: "relative", // Make sure it's positioned absolutely
            transformOrigin: "10px center", // Adjust orbit radius
            transform: orbitAnimation.rotate.to((r) => `rotate(${r}deg)`),
            // translateX: translateX,
            borderRadius: "999px",
            x: "0",
            y: "0",
            filter: "url(#goo)",
            opacity: opacity2,
          }}
        />
      </animated.div>
    );
  };
  const scaleValue = interpolate(
    frame,
    [143, 153, 163, 173, 183, 193, 203, 213, 223, 233, 243, 253, 271, 512], // Scaling from start to halfway and back to start
    [1, 1.05, 1, 1, 1.05, 1, 1, 1.05, 1, 1, 1.05, 1, 0.7, 0.7], // Scale down to 0.5, then up to 1, and back down
  );
  const trail = useTrail(circles.length, {
    scale: scaleValue, // Use frame-based scaling
    config: { tension: 200, friction: 13 },
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
  const orbitAnimation3 = useSpring({
    from: { rotate: 0 },
    to: { rotate: -360 },
    loop: true, // Infinite loop for continuous rotation
    config: { duration: 10000 }, // 3 seconds per revolution
  });
  const translateX = spring({
    frame,
    fps,
    from: 50, // Adjust this for the orbit size
    to: 100,
    config: { damping: 200 },
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
      <Circle>
        {trail.map((style, index) => (
          <animated.div
            key={index}
            style={{
              ...style,
              position: "absolute", // Make sure it's positioned absolutely
              width: "180px",
              height: "180px",
              backgroundColor: "white",
              transform: style.scale.to((s) => `scale(${s})`), // Apply frame-based
              borderRadius: "999px",
              x: frame < 271 ? circles[index].x : circles2[index].x,
              y: frame < 271 ? circles[index].y : circles2[index].y,
              filter: "url(#goo)",
              opacity: opacity3,
            }}
          />
        ))}
        {/* <Sequence from={0}></Sequence> */}
        {/* <Sequence from={50}>
          <CircleBlack />
        </Sequence> */}
      </Circle>
      <CircleBlack />
    </AbsoluteFill>
  );
};
