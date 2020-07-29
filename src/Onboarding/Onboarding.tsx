import React, { useRef } from "react";
import { View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";

import Step from "./Step";
import Dot from "./Dot";
import tailwind from "tailwind-rn";
import Skip from "./Skip";

const steps = [
  {
    image: require("./assets/crypto_flowers.svg"),
    label: ["Exchange Bitcoin", "& Ethereum For Money"],
    text:
      "Provide us with the necessary required information and let us do the convertion asap!!!",
  },
  {
    image: require("./assets/credit_card_payment.svg"),
    label: ["Got Giftcards you", " want to redeem for cash?"],
    text:
      "Unlimited type cards on our platform ranging from amazon, iTunes, Google Play Store and e.t.c",
  },
  {
    image: require("./assets/mobile_payments.svg"),
    label: ["You’re One Step", "Closer to Cashing", " Out Your Exchange"],
    text: "Our pay out process is the one of the fatest and guaranteed trusted",
    onPress() {},
  },
];

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const scrollReff = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  return (
    <View style={tailwind("flex-1 grey90 relative")}>
      <Skip
        onPress={() =>
          scrollReff.current
            ?.getNode()
            .scrollTo({ x: width * (steps.length - 1), animated: true })
        }
        {...{ x, steps: steps.length }}
      />
      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate={0}
        snapToAlignment="center"
        ref={scrollReff}
        showsHorizontalScrollIndicator={false}
        {...scrollHandler}
      >
        {steps.map((step, i) => (
          <Step key={i} {...step} />
        ))}
      </Animated.ScrollView>
      <View style={tailwind("flex-row justify-center pb-16")}>
        {steps.map((_, i) => (
          <Dot key={i} index={i} {...{ x }} />
        ))}
      </View>
    </View>
  );
}
