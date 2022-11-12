import React from "react"
import Home from "../components/MainPage/Home"





import Offres from "./Offres/Offres"
import TopServices from "./topServices/TopServices"
import NewArrivals from "./nouveaute/NewArrivals"
import Discount from "./allProducts/Discount"
const AdminPages = ({ productItems,searchTerm }) => {
  return (
    <>
      <Home />
      <Offres productItems={productItems} searchTerm={searchTerm}/>
      <TopServices searchTerm={searchTerm}/>
      <NewArrivals searchTerm={searchTerm}/>
      <Discount searchTerm={searchTerm}/>
    </>
  )
}

export default AdminPages