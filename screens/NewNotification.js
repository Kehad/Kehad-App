import { useEffect } from "react";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export function NewNotification( title, body ) {
  console.log("New notification");

    console.log(title, body);
  function scheduleNotificationHandler() {
    console.log("show notification");
    Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: {
        seconds: 5,
      },
    });
    console.log("showed notification");
  }
  scheduleNotificationHandler();
}
