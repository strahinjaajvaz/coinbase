import React from "react";
import Svg, { Text, TSpan, Defs, LinearGradient, Stop } from "react-native-svg";

interface HeadingTextProps {
  text: string[];
}

export default function HeadingText({ text }: HeadingTextProps) {
  return (
    <Svg height={text.length * 40} width="288">
      <Defs>
        <LinearGradient
          id="rainbow"
          x1="0"
          x2="0"
          y1="0"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FD749B" offset="0%" />
          <Stop stopColor="#281AC8" offset="100%" />
        </LinearGradient>
      </Defs>
      <Text
        fill="url(#rainbow)"
        fontSize="24"
        fontWeight="bold"
        x="100"
        y="20"
        textAnchor="middle"
      >
        {text.map((t, i) => (
          <TSpan key={t} x={144} dy={i === 0 ? 0 : 30}>
            {t}
          </TSpan>
        ))}
      </Text>
    </Svg>
  );
}
