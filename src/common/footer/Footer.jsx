import React from "react"
import "./style.css"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>5S Maroc</h1>
            
            <p>Nous adaptons nos moyens a Vos besoins et nous mettons a votre service une équipe formée, motivée et engagée Pour aller au-delà de vous satisfaire pour vous être une force de proposition et de conseils et accompagner  ainsi votre démarche d’amélioration continue.</p>
            <p>5S Maroc © 2022</p>
            <p style={{marginTop:-20}}>Par Jilweb</p>
          </div>

          <div className='box'>
            <h2>A propos</h2>
            <ul>
              <li><Link to='/about-us' className="links">Mot du fondateur</Link></li>
              <li><Link to='/about-us' className="links">Nos valeurs</Link></li>
              <li><Link to='/about-us' className="links">Nos métiers</Link></li>
              <li><Link to='/about-us'className="links">Démarche qualité</Link></li>
              <li><Link to='/fiche-technique'className="links">Fiche technique</Link></li>
              <li><Link to='/conditions-générales'className="links">Conditions générales</Link></li>
            </ul>
          </div>
          <div className='box'>
            <h2>Services</h2>
            <ul>
              <li>Produits & services </li>
              <li>Nouveauté </li>
              <li>Offres spéciales</li>
              <li>Panier</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>13 Bd Med 5, 3ème étage G, lot elyoussr Berrechid </li>
              <li>Email: contact@5smaroc.com</li>
              <li>Phone: +212 665889844</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
