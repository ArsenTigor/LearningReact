import React from "react"
import ReactDOM from "react-dom/client"
import './index.css';


function Header(){
  return(
    <header>
        <nav>
          <img src="./logo192.png" width="40px"></img>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </header>
  )
}

function Footer(){
  return(
    <footer>© 20xx Test development. All rights reserved.</footer>
  )
}

function List(){
  return(
    <div>
      <h1>Function List</h1>
      <ol>
        <li>This is a funct</li>  
        <li>This is a funct</li>
        <li>This is a funct</li>
        <li>This is a funct</li>  
        <li>This is a funct</li>
      </ol>
    </div>
  )
}

function Page(){
  return (
    <div>
      <Header />
      <List />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)




