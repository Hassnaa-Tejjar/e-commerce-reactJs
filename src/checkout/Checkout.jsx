import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {useState } from "react";
import "./style.css";
import { useEffect } from "react";
import $ from 'jquery';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Checkout({ CartItem }) {
  const totalPrice = CartItem.reduce((prixProd, item) => prixProd+ item.qty * item.prixProd, 0)
  const {register,handleSubmit,formState: { errors },trigger} = useForm({ mode:"onChange"});
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [telephone,setTelephone]=useState();
  const [address,setAddress]=useState();
  const [ville,setVille]=useState();
  const [codePostal,setCodePostal]=useState();
  const [message,setMessage]=useState();
  const [produits,setProduits]=useState([]);
  const [quantites,setQuantites]=useState([]);
  const [prixProduit,setPrixProduits]=useState([]);
  const history = useHistory();
  useEffect(()=>{
    CartItem.map((item) => {
      const productQty = item.prixProd * item.qty
     produits.push(item.nomProd);
     quantites.push(item.qty)
     prixProduit.push(productQty);
    })

  },[])
  var commande={
    name:name,
    email:email,
    telephone:telephone,
    address:address,
    ville:ville,
    codePostal:codePostal,
    message:message,
    produits:produits,
    quantites:quantites,
    prixProduit:prixProduit,
    prixTotal:totalPrice,
  }    
  function openAlert() {
    $(".alert-container").fadeIn("fast");
    // IE8 animation polyfill
    if ($("alertt").hasClass("lt-ie9")) {
      var speed = 300;
      var times = 3;
      var loop = setInterval(anim, 300);
      function anim() {
        times--;
        if (times === 0) { clearInterval(loop); }
        $(".alert-container").animate({ left: 450 }, speed ).animate({ left: 440 }, speed );
        //.stop( true, true ).fadeIn();
      };
      anim();
    };
  }
  function closeAlert() {  
    setTimeout(function () {
      $(".alert-container").fadeOut("fast");
    }, 100);
  }
function sendEmail() {

if(CartItem.length!=0 ) {
  emailjs.send('service_hc16gwl', 'template_83brjma',  commande,'kZQ-nYb3M1lrllbLo')
  .then((result) => {console.log(result.text);}, (error) => {console.log(error.text);})
  
  history.push("/success")

}
              
 
}
      
      return (
        <div className=" container d_flex">
        <div className="checkout">  
              <h1 className="info">Informations Personnelles</h1>
              <form  onSubmit={handleSubmit(sendEmail)}>
                
                  <label className="labell" >Nom (ou nom d'entreprise):</label>
                  <div  className="inputt">
                  <input
                  onChange={(e) =>setName(e.target.value) }
                    type="text"
                    
                   name="name"
                  />
                  </div>

                  <label className="labell">Email:</label>
                  <div  className="inputt">
                  <input
                  
                    type="text"
                    className={`form-control ${errors.email && "invalid"}`}
                    {...register("email", { 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse Email non valide",
                    }})}
                    onChange={(e) =>setEmail(e.target.value) }
                    onKeyUp={() => {
                      trigger("email");
                    }}
                    name="email"
                   
                  /></div>
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                
                
                  <label className="labell" >Téléphone:</label>
                  <div  className="inputt">
                  <input
                    type="text"
                  
                    className={`form-control ${errors.telephone && "invalid"}`}
                    {...register("telephone", { required: "Téléphone est obligatoire",
                    pattern: {
                      value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: "Numéro de téléphone non valide",
                    },
                   })}
                   onKeyUp={() => {
                    trigger("telephone");
                  }}
                 
                  name="telephone"
                  onChange={(e) =>setTelephone(e.target.value) }
                  /></div>
                  {errors.telephone && (
                    <small className="text-danger">{errors.telephone.message}</small>
                  )}
               <label className="labell" >Adresse:</label>
               <div  className="inputt">
                  <input
                    onChange={(e) =>setAddress(e.target.value) }
                    type="text"
                  
                  name="address"
                
                  /></div>
                  {errors.address && (
                    <small className="text-danger">{errors.address.message}</small>
                  )}
                 <label className="labell">Ville:</label>
                 <div  className="inputt">
                  <input
                   onChange={(e) =>setVille(e.target.value) }
                    type="text"
                  
                  name="ville"
                 
                  /></div>
                  {errors.phone && (
                    <small className="text-danger">{errors.ville.message}</small>
                  )}
                   <label className="labell">Code postal:</label>
                   <div  className="inputt">
                  <input
                  onChange={(e) =>setCodePostal(e.target.value) }
                    type="text"
                   
                  name="codePostal"
                  
                  /></div>
                  {errors.codePostal && (
                    <small className="text-danger">{errors.codePostal.message}</small>
                  )}
                  <label className="labell" >Message (optionnel):</label>
                  <div className="textareaa">
                  <textarea
                
                    className={`form-control ${errors.message && "invalid"}`}
                    {...register("message", { 
                    maxLength: {
                      value: 50,
                      message: "Maximum allowed length is 50 ",
                    }
                   })}
                   onKeyUp={() => {
                    trigger("message");
                  }}
                  onChange={(e) =>setMessage(e.target.value) }
                  name="message"
                 
                  ></textarea></div>
                  {errors.message && (
                    <small className="text-danger">{errors.message.message}</small>
                  )}
                   <h3 className="autreinfo"> Si vous voulez ajouter d'autres informations.</h3>
                   {CartItem.length!=0 ?
                 
                <div className="valider">
                <button
                  type="submit"
                  value="Send message"  >Valider</button>
                </div>: 
                 <div class="alertt">
                  <div className="valider">
                <button
                  type="submit"
                  value="Send message"  onClick={()=>openAlert()} >Valider</button>
                </div>
                 <div class="alert-container">
                 <span class="alert-close">
                   <i class="fa fa-close" onClick={()=>closeAlert()}></i>
                 </span>
                 <p>Il faut ajouter au moins un produit au panier.</p>
               </div>
               </div>}
              </form>

        </div>
        <div className='cart-total product '>
            <h2>Votre commande</h2>
            <div className=' d_flex'>
              <h4>Produit</h4>
              <h4>Total</h4>
            </div>
            {CartItem.map((item) => {
              const productQty = item.prixProd * item.qty

              return (
            <div className=' d_flex'>
              <h5>{item.nomProd}*{item.qty} </h5>
              <h5>MAD{productQty}</h5>
            </div>
            
             )
            })}
            <hr/>
            <div className=' d_flex'>
              <h4> Prix Total</h4>
              <h3>MAD {totalPrice}</h3>
            </div>
 
          </div>
        </div>
      );
}
export default Checkout;