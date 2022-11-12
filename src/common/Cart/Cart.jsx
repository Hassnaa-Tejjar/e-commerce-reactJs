import React from "react"
import "./style.css"
import { Link } from "react-router-dom"
import $ from 'jquery';
const Cart = ({ CartItem, addToCart, decreaseQty,removeCart }) => {
 
  const totalPrice = CartItem.reduce((prixProd, item) => prixProd+ item.qty * item.prixProd, 0)

 
  function openAlert() {
    $(".more-ot-alert").fadeIn("fast");
    // IE8 animation polyfill
    if ($("alertt").hasClass("lt-ie9")) {
      var speed = 300;
      var times = 3;
      var loop = setInterval(anim, 300);
      function anim() {
        times--;
        if (times === 0) { clearInterval(loop); }
        $(".more-ot-alert").animate({ left: 450 }, speed ).animate({ left: 440 }, speed );
        //.stop( true, true ).fadeIn();
      };
      anim();
    };
  }
  function closeAlert() {  
    setTimeout(function () {
      $(".more-ot-alert").fadeOut("fast");
    }, 100);
  }

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
         

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>Aucun produit n'est ajouté au panier</h1>}

           
            {CartItem.map((item) => {
              const productQty = item.prixProd * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.imagesProd.image1} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.nomProd}</h3>
                    <h4>
                      MAD{item.prixProd} * {item.qty}
                      <span>MAD{productQty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => removeCart(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                   
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Récaptulatif</h2>
            <div className=' d_flex'>
              <h4>Prix Total :</h4>
              <h3>MAD {totalPrice}</h3>
            </div>
          </div>
        
        </div>
        {CartItem.length!=0 ?
         <Link to='/commander'>  <div className="commander">
        <button className="cmd" >Commander</button>
        </div></Link> : 
        <div class="alertt">
        <div className="commander">
        <button className="cmd" onClick={()=>openAlert()}>Commander</button>
        </div>
        <div class="more-ot-alert">
        <span class="close-ot-alert">
          <i class="fa fa-close" onClick={()=>closeAlert()}></i>
        </span>
        <p>Il faut ajouter au moins un produit au panier.</p>
      </div>
      </div>
        }
      </section>
    </>
  )
}

export default Cart
