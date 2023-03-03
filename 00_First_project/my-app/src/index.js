import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)