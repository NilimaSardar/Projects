import Button from '../Button/Button'
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import styles from './ContactForm.module.css'
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState("Nilima")
  const [email, setEmail] = useState("Nilima@gmail.com")
  const [text, setText] = useState("Hello")

  // let name="ram";
  // let email;
  // let text;

  const onViaCallSubmit = ()=> {
    console.log("I am from call");
  }

  const onSubmit =(event)=>{
    event.preventDefault();

    // name = event.target[0].value;
    // email = event.target[1].value;
    // text = event.target[2].value;
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageDetail fontSize='24px'/>}/>
            <Button 
              onClick={onViaCallSubmit}
              text="VIA CALL" 
              icon={<IoCall fontSize='24px'/>}
            />
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize='24px'/>}/>

          <form onSubmit ={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows="8"/>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button text="SUBMIT BUTTON"/>
              </div>

              <div>
                {name + " " + email + " " + text}
              </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/images/Service.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm