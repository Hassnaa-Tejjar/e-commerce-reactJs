import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem,onChange }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} onChange={onChange} />
      <Navbar />
    </>
  )
}

export default Header
