import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

const TextAnimator = ({ content, timing = 600000, textStyle, style }) => {
  const animatedValues = useRef([]).current;
  const textArr = content.trim().split(''); // .split(" ") to make it animate word by word
  const [rerun, setReRun] = useState(null);

  if (animatedValues.length === 0) {
    textArr.forEach((_, i) => {
      animatedValues[i] = new Animated.Value(0);
    });
  }

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
  useFocusEffect(
    useCallback(() => {
      //   Perform any action when the screen is focused
      animate(1);
      return () => {
        animate(0);
        // Perform any cleanup or action when the screen loses focus
      };
    }, [rerun])
  );

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
          {`${i < textArr.length ? "" : ""}`}
           {/* {`${i < textArr.length ? ' ' : ''}`}  // to add a space after each word when the animation is word by word  */}
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
