import { useEffect } from "react";
import { StyleSheet, Button, View, Pressable } from "react-native";
import * as Notifications from "expo-notifications";
import PrimaryButton from "../Buttons/PrimaryButton";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function Notification({ title, name, body, onPress, onCheck }) {
  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RESPONSE RECEIVED");
        console.log(response);
        const userName = response.notification.request.content.data.userName;
        console.log(userName);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }
  console.log("Notification");

  function finalPress() {
    console.log(onCheck);
    onPress();
    scheduleNotificationHandler();

    // if (onCheck === false) {
    //   console.log('Dont notify user')
    //   onPress();
    //   console.log(onCheck);
    //   console.log("Dont notify user")
    // }
    // if (onCheck === true) {
    //   console.log('Notify user')
    //   onPress();
    //   console.log(onCheck);
    //   console.log("Notify user");
    //   // scheduleNotificationHandler();
    // }
  }

  return (
    <>
      <PrimaryButton onPress={finalPress}>{name}</PrimaryButton>
      {/* <Pressable onPress={scheduleNotificationHandler}>
      {children}
    </Pressable> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
