export async function sendEmail(to, subject, body) {
  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    body: body,
  });

  if (query.length) {
    url += `?${query}`;
  }


  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error("Provided URL can not be handled");
  }

  return Linking.openURL(url);
}


// for calling thefunction
//   sendEmail(
//     'user@domain.com',
//        'We need your feedback',
//     'UserName, we need 2 minutes of your time to fill this quick survey [link]',
// ).then(() => {
//     console.log('Your message was successfully sent!');
// });


// await sendEmail(
    //   'keahnnney012@gmail.com',
    //   FormData.name,
    //   FormData.message
    // ).then(() => {
    //   console.log("Your message was successfully sent!");
    // });