import React, { useState } from "react";
import Style from "./Contractform.module.css";
import { FaMessage } from "react-icons/fa6";
import Button from "../button/Button";
import { CiPhone } from "react-icons/ci";
function Contacrform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target.Name.value);
    setEmail(event.target.Email.value);
    setText(event.target.Text.value);
    console.log(event.target.Name.value);
    console.log(event.target.Email.value);
    console.log(event.target.Text.value);
  };
  return (
    <div>
      <div className={Style.headbutton}>
        <Button
          name="VIA THROUGH MESSAGE"
          icon={<FaMessage fontSize={"18px"} />}
        />
        <Button name="VIA PHONE" icon={<CiPhone fontSize={"18px"} />} />
      </div>
      <div className="sss">
        <Button name="via through Emai" isoutline={true} />
      </div>

      <section className={Style.main}>
        <form onSubmit={onSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input type="text" name="Name" />
          </fieldset>
          <fieldset>
            <legend>E-mail</legend>
            <input type="text" name="Email" />
          </fieldset>
          <fieldset>
            <legend>Message</legend>
            <textarea rows="4" name="Text"></textarea>
          </fieldset>
          <div>
            <button className={Style.sub}>Submit</button>
          </div>
          <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <p>{text}</p>
          </div>
        </form>

        <div className={Style.side}>
          <img src="./image/bbb.svg" />
        </div>
      </section>
    </div>
  );
}

export default Contacrform;
