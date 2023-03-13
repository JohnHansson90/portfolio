// export default function (req, res) {
//   const body = req.body;

//   if (req.method === "POST") {
//     const { name, email, message } = req.body;
//     console.log(
//       `Received form submission from name: ${name}, email: ${email}, message: ${message}`
//     );

//     // Handle the form submission however you need to, e.g. by sending an email
//     // ...

//     // Send a response back to the client
//     res.status(200).json({ message: "Form submitted successfully!" });
//   } else {
//     // Handle any other HTTP methods
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
