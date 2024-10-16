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
        const userName = notification.request.content.data.userName;
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const userName = response.notification.request.content.data.userName;
;
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
        // data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  function finalPress() {
    onPress();
    scheduleNotificationHandler();
  }

  return (
    <>
      <PrimaryButton onPress={finalPress}>{name}</PrimaryButton>
      
    </>
  );
}


// use this in the contact form when you want a notification to show after submitting the form 
//  {
//    isFormEligible ? (
//      // <Notification
//      //   title="Message sent"
//      //   name="send"
//      //   body="You've sucessfully sent your message"
//      //   // onPress={handleSubmit}
//      //   onPress={() => {
//      //     if (isFormEligible) {
//      //       // alert("Form is valid! Submission successful.");
//      //       handleSubmit();
//      //     } else {
//      //       alert("Please fill out the form correctly.");
//      //     }
//      //   }}
//      // />
//    ) : (
//      <PrimaryButton
//        onPress={() => {
//          if (!isFormEligible) {
//            alert(
//              "The name must be at least 3 characters long, \nThe message must be at least 5 words"
//            );
//          }
//        }}
//      >
//        send
//      </PrimaryButton>
//    );
//  }