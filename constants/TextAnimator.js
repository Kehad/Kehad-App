import React, { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

const TextAnimator = ({
  content,
  timing = 600,
  textStyle,
  style,
}) => {
  const animatedValues = useRef([]).current;
  const textArr = content.trim().split(" ");

  if (animatedValues.length === 0) {
    textArr.forEach((_, i) => {
      animatedValues[i] = new Animated.Value(0);
    });
  }

  useEffect(() => {
    animate(1);
    return () => animate(0); // Cleanup on unmount
  }, []);

  const animate = (toValue = 1) => {
    const animations = textArr.map((_, i) => {
      return Animated.timing(animatedValues[i], {
        toValue,
        duration: timing,
        useNativeDriver: true,
      });
    });



    Animated.stagger(timing / 2, animations).start();
  };

  return (
    <View style={[style, styles.textWrapper]}>
      {textArr.map((v, i) => (
        <Animated.Text
          key={`${v}-${i}`}
          style={[
            textStyle,
            styles.textStyle,
            {
              opacity: animatedValues[i],
              transform: [
                {
                  translateY: animatedValues[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -2],
                  }),
                },
              ],
            },
          ]}
        >
          {v}
          {`${i < textArr.length ? " " : ""}`}
        </Animated.Text>
      ))}
    </View>
  );
};

export default TextAnimator;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
