import React from 'react'
import logo from '../CSSBattleImages/iSpaceLogo.png'
import "./style.css"

export default function Header() {
  return (
    <div className='headerContainer'>
        <div className = "header large">
            <span></span>
            <span style={{fontSize:"0.8em"}}>VITC-EVENT</span>
            <br></br>
              <img src = {logo} style={{transform:"scale(0.8)"}}></img>
            <br></br>
            <span style={{fontSize:"0.8em"}}>Eve@$0502</span>
        </div>
    </div>
  )
}
