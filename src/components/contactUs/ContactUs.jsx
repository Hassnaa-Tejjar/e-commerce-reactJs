import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import "./style.css";
import { useRef } from "react";
function ContactUs() {
    const form = useRef();
    const {register,handleSubmit,formState: { errors },trigger,} = useForm();
    function sendEmail() {
      document.body.classList.add("sent");
      emailjs.sendForm('service_hc16gwl', 'template_89enu7e', form.current, 'kZQ-nYb3M1lrllbLo')
             .then((result) => {console.log(result.text);}, (error) => {console.log(error.text);});
      }
      
     
return(
  <div className="all">
    <small>Nous parlons votre langage</small>
    <div className="wrappeer centered">
      <article className="letter">
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div class="side">
            <h1 >Contactez-nous</h1>
            <p>
              <div className="msg">
                <textarea placeholder="Votre message" name="message" className={`form-control ${errors.message && "invalid"}`} {...register("message", { required: "Veuillez entrer un message!" })} onKeyUp={() => {  trigger("message");}}>
                </textarea>
              </div>
              {errors.message && (<p className="text-danger">{errors.message.message}</p>)}
            </p>
          </div>
          <div className="side">
            <p>
              <div className="nameEmail"> 
                <input type="text" placeholder="Votre nom"  name="from_name"  className={`form-control ${errors.from_name && "invalid"}`} {...register("from_name", { required: "Veuillez entrer votre nom complet!" })} onKeyUp={() => { trigger("from_name");}}/>
              </div>
              {errors.from_name && (<p className="text-danger">{errors.from_name.message}</p>)}
            </p>
            <p>
              <div className="nameEmail">
                <input type="text" placeholder="Votre email" name="user_email" className={`form-control ${errors.user_email && "invalid"}`}{...register("user_email", { required: "Veuillez entrer votre adresse électronique!" ,pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "Adresse Email non valide",}})} onKeyUp={() => { trigger("user_email");}}/>
              </div>
              {errors.user_email && (<p className="text-danger">{errors.user_email.message}</p>)}
            </p>
            <p>
              <div className="sendButtonn">
                <button type="submit" value="Envoyer" >Envoyer
                </button>
              </div>
            </p>
          </div>
        </form>
      </article>
      <div class="envelope front">
      </div>
      <div class="envelope back">
      </div>
    </div>
    <p class="result-message centered">Merci pour votre message!</p>
  </div>
)
}
export default ContactUs;