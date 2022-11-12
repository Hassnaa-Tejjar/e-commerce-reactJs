import React from "react"
import fiche from "../../components/assets/images/fiche.png"

function FicheTechnique(){
return(
    <div style={{justifyContent:"center",display:"flex"}}>
      <img src={fiche} alt='' style={{ width: 400, height: 500 }}/>
    </div>
)
}
export default FicheTechnique;