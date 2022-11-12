import React, { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"

import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"

import OffresService from "./services/OffresService";
import FlashDeals from "./components/flashDeals/FlashDeals"
import NewArrivals from "./components/newarrivals/NewArrivals"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Login from "./components/Login/Login"
import Checkout from "./checkout/Checkout"
import ContactUs from "./components/contactUs/ContactUs"
import AboutUs from "./components/aboutUs/AboutUs"
import References from "./components/references/References"
import SuccessPage from "./checkout/SuccessPage"
import FicheTechnique from "./components/aboutUs/FicheTechnique"
import AdminPages from "./adminPages/AdminPages"
import Description from "./adminPages/DescriptionProduit/Description"
import HeaderAdmin from "./adminPages/HeaderAdmin/HeaderAdmin"
import AddProduct from "./adminPages/addProduct&service/AddProduct"
import UpdateProduct from "./adminPages/updateProduct/UpdateProduct"
import ServiceForm from "./components/top/ServiceForm"
import Success from "./components/top/Success"
import Categories from "./adminPages/gestionCategories/Categories"
import AddCategory from "./adminPages/gestionCategories/AddCategory"
import AddSousCategorie from "./adminPages/gestionCategories/AddSousCategorie"
import UpdateCategory from "./adminPages/gestionCategories/UpdateCategory"

import UpdateSousCategorie from "./adminPages/gestionCategories/UpdateSousCategorie"
import BannierePub from "./adminPages/BannierePub/BannierePub"
import AddBannierePub from "./adminPages/BannierePub/AddBannierePub"
import UpdateBannierePub from "./adminPages/BannierePub/UpdateBannierePub"
import DescriptionService from "./adminPages/DescriptionService/DescriptionService"
import DescriptionService1 from "./components/DescriptionService/DescriptionService1"

function App() {
 
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  
  const [offres,setOffres]=useState([])
  useEffect(()=>{
    OffresService.getOffres().then((response)=>{
    
        setOffres(response.data)
     
     }).catch(error=>{
        console.log(error);
     })
  },[]);
  const p={productItems:offres}
  const { productItems } =p
 

 
  const [CartItem, setCartItem] = useState([])

  
  const addToCart = (product) => {
  
    const productExit = CartItem.find((item) => item.codeProd === product.codeProd)
   
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.codeProd === product.codeProd ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

 
  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.codeProd === product.codeProd)

    
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.codeProd !== product.codeProd))
    } else {
     
      setCartItem(CartItem.map((item) => (item.codeProd === product.codeProd ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
const removeCart=(product)=>{
  setCartItem(CartItem.filter((item) => item.codeProd !== product.codeProd))
}
const [searchTerm,setSearchTerm]=useState("");
const onChange = (e) => {
  setSearchTerm(e.target.value);
  console.log(searchTerm)
};

  return (
    <>
      <Router>
        <Switch>


          <Route path='/' exact>
            <Header CartItem={CartItem} onChange={onChange} />
            <Pages productItems={productItems} addToCart={addToCart} searchTerm={searchTerm} />
            <Footer />
          </Route>
          <Route path='/pages' exact>
            <Header CartItem={CartItem} onChange={onChange} />
           
            <Footer />
          </Route>

          <Route path='/cart' exact>
            <Header CartItem={CartItem} onChange={onChange}/>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeCart={removeCart}/>
            <Footer />
          </Route>


          <Route path='/offresSpéciales' exact>
            <Header CartItem={CartItem} onChange={onChange}/>
            <FlashDeals productItems={productItems} addToCart={addToCart}  searchTerm={searchTerm} />
            <Footer />
          </Route>

          <Route path='/detailsService/:productId' exact>
            <Header CartItem={CartItem} onChange={onChange}/>
             <DescriptionService1/>
            <Footer />
          </Route>
          
          <Route path='/nouveauté' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <NewArrivals searchTerm={searchTerm}/>
             <Footer />
          </Route>
       
          <Route path='/details/:productId'  exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <ProductDetails addToCart={addToCart}/>
             <Footer />
          </Route>

          <Route path='/commander' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <Checkout CartItem={CartItem} />
             <Footer />
          </Route>


          <Route path='/contactez-nous' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <ContactUs />
             <Footer />
          </Route>


          <Route path='/about-us' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <AboutUs />
             <Footer />
          </Route>


          <Route path='/references' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <References />
             <Footer />
          </Route>


          <Route path='/success' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <SuccessPage />
             <Footer />
          </Route>


          <Route path='/fiche-technique' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <FicheTechnique />
             <Footer />
          </Route>


          <Route path='/service' exact>
             <Header CartItem={CartItem} onChange={onChange} />
             <ServiceForm />
             <Footer />
          </Route>

          <Route path='/successPage' exact>
             <Header CartItem={CartItem} onChange={onChange}/>
             <Success />
             <Footer />
          </Route>
          
          <Route path='/adminLogin' exact>
          <Login />
          </Route>


          <Route path='/home' exact>
          <HeaderAdmin onChange={onChange}/>
          <AdminPages productItems={productItems} searchTerm={searchTerm} />
          
          </Route>

          <Route path='/description/:productId' exact>
          <HeaderAdmin onChange={onChange}/>
          <Description/>
          
          </Route>
          <Route path='/DescriptionService/:productId' exact>
          <HeaderAdmin onChange={onChange}/>
          <DescriptionService/>
          
          </Route>
          
          <Route path='/ajouter-produit' exact>
          <HeaderAdmin onChange={onChange}/>
          <AddProduct/>
          
          </Route>

          <Route path='/update/:productId'  exact>
          <HeaderAdmin onChange={onChange}/>
          <UpdateProduct/>
          </Route>

          <Route path='/gestion-categories' exact>
          <HeaderAdmin onChange={onChange}/>
          <Categories />
          </Route>

          <Route path='/addCategory' exact>
          <HeaderAdmin onChange={onChange}/>
          <AddCategory />
          </Route>
          <Route path='/addSousCategorie' exact>
          <HeaderAdmin onChange={onChange}/>
          <AddSousCategorie />
          </Route>
          

          <Route path='/updateCategory/:categoryId'  exact>
          <HeaderAdmin onChange={onChange}/>
          <UpdateCategory/>
          </Route>


          <Route path='/updatesouscategorie/:souscategoryId'  exact>
          <HeaderAdmin />
          <UpdateSousCategorie/>
          </Route>
          
          <Route path='/banniere-publicitaire' exact>
          <HeaderAdmin />
          <BannierePub />
          </Route>
          
          <Route path='/addBannierePub' exact>
          <HeaderAdmin onChange={onChange}/>
          <AddBannierePub />
          </Route>

          <Route path='/updateBannierePub/:bannierePubId'  exact>
          <HeaderAdmin onChange={onChange}/>
          <UpdateBannierePub/>
          </Route>

        



        </Switch>
      </Router>
    

    </>
  )
}

export default App
