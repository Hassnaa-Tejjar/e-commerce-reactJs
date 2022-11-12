import React from "react"

import SearchProduct from "./SearchProduct"
import NavbarAdmin from "./NavbarAdmin"


const HeaderAdmin = ({onChange}) => {
  return (
    <>
      <SearchProduct onChange={onChange}/>
      <NavbarAdmin/>
    </>
  )
}

export default HeaderAdmin
