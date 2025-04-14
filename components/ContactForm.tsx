"use client";
import Form from 'next/form'
import {motion} from "framer-motion";

const backgroundVariant = {
    hover: {
        backgroundColor: "#FFC108",
        transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1],
        },
    }
};


const ContactForm = ({containerStyle} : {containerStyle?: string}) => {
 return (
  <Form action="/" className={`${containerStyle} border p-[10px]`}>
      <h5 className="font-bold text-center">M’envoyer directement un message</h5>

      <div className="my-[20px]">
          <div className="inputs-container sm:grid sm:grid-rows-3 grid-rows-4  sm:gap-[30px] p-[20px]">
              <div className="input1">
                  <label htmlFor="name">Nom (requis)</label>
                  <div className="border">
                      <input id="name" name="name" placeholder="Votre Nom..." type="text" className="w-full h-full p-[10px]"/>
                  </div>
              </div>

              <div className="input2">
                  <label htmlFor="email">Email (requis)</label>
                  <div className="border">
                      <input id="email" name="email" placeholder="Email..." type="text" className="w-full h-full p-[10px]"/>
                  </div>
              </div>

              <div className="input3 sm:row-start-3 sm:row-end-4">
                  <label htmlFor="subject">Sujet (requis)</label>
                  <div className="border">
                      <input id="subject" name="subject" placeholder="Sujet du message" type="text" className="w-full h-full p-[10px]"/>
                  </div>
              </div>

              <div className="input4 sm:row-start-1 sm:row-end-4">
                  <label htmlFor="message">Message (requis)</label>
                  <div className="border">
                      <textarea id="message" name="message" placeholder="Message..." rows={9} className="resize-none w-full h-full p-[10px]"/>
                  </div>
              </div>
          </div>
      </div>

      <motion.button type="submit" className="w-full p-[10px] border cursor-pointer" variants={backgroundVariant} whileHover="hover">Submit</motion.button>
  </Form>
 );
};

export default ContactForm;