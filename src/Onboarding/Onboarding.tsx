import React, { useRef } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";
import AsyncStorage from "@react-native-community/async-storage";

import Step from "./Step";
import Dot from "./Dot";
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
    hasButton: true,
    async onPress() {
      await AsyncStorage.setItem("onboardingCompleted", "true");
    },
  },
];

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const scrollReff = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  return (
    <View style={styles.container}>
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
      <View style={styles.dots}>
        {steps.map((_, i) => (
          <Dot key={i} index={i} {...{ x }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    position: "relative",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 48,
  },
});
