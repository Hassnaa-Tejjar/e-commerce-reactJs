import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function ServiceForm() {
    const form = useRef();
    const history = useHistory();
    const {register,handleSubmit,formState: { errors },trigger,} = useForm();
    function sendEmail() {

      emailjs.sendForm('service_hc16gwl', 'template_89enu7e', form.current, 'kZQ-nYb3M1lrllbLo')
             .then((result) => {console.log(result.text);}, (error) => {console.log(error.text);});
      
    history.push("/successPage")
      }
    return(
        <div class="service">
            <form class="form" ref={form} onSubmit={handleSubmit(sendEmail)}>
            <h2>contactez nous</h2>
        <p type="Nom:"><input placeholder="Entrer votre nom" name="from_name"></input></p>
        <p type="Email ou téléphone"><input placeholder="Entrer votre email.."  name="user_email" className={`form-control ${errors.user_email && "invalid"}`}{...register("user_email", { required: "Ce champs est obligatoire" })} onKeyUp={() => { trigger("user_email");}} ></input></p>
        {errors.user_email && (<p className="text-danger">{errors.user_email.message}</p>)}
         <p type="Service demandé:"><input placeholder="Parlez-nous du service souhaité" name="message" className={`form-control ${errors.message && "invalid"}`} {...register("message", { required: "Veuillez entrer un message!" })} onKeyUp={() => {  trigger("message");}}></input></p>
         {errors.message && (<p className="text-danger">{errors.message.message}</p>)}
         <button type="submit">Envoyer</button>
        <div class="phone-email">
           <span class="fa fa-phone"></span>+212 665889844
           <span class="fa fa-envelope-o"></span> contact@5smaroc.com
        </div>
       </form>
        </div>
    )
}
export default ServiceForm;