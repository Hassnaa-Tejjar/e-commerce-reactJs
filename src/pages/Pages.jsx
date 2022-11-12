import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"


import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, searchTerm }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} searchTerm={searchTerm} />
      <TopCate searchTerm={searchTerm}/>
      <NewArrivals addToCart={addToCart} searchTerm={searchTerm}/>
      <Discount addToCart={addToCart} searchTerm={searchTerm}/>
      <Wrapper />
    </>
  )
}

export default Pages
