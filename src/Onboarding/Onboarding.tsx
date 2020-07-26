import React, { useRef } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Step from "./Step";
import Animated from "react-native-reanimated";

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
  },
];

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  scroll: {},
  step: {
    width,
  },
});

export default function Onboarding() {
  const scrollReff = useRef<Animated.ScrollView>(null);
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate={0}
        snapToAlignment="center"
        ref={scrollReff}
      >
        {steps.map((step, i) => (
          <Step
            key={i}
            {...step}
            onPress={() => {
              if (scrollReff.current) {
                scrollReff.current
                  .getNode()
                  .scrollTo({ x: width * (i + 1), animated: true });
              }
            }}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
}
