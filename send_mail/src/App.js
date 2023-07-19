import React, { useRef } from "react";
import emailjs from 'emailjs-com';


function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vhxtci8",
      "template_jzu2os2",
      form.current,
      "Aikpl-OUwFa1AFR6Z",
    ).then(
      result => {
        alert("email successfully sent check inbox")
      },
      error => {
        console.log(error.text)
      }
    )
  };

  return  (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name"></input>
      <label>Email</label>
      <input type="text" name="user_email"></input>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"></input>
    </form>
  );
}

export default App;

