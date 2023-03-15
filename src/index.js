import React from"react"
import ReactDOM from "react-dom"



import "bootstrap/dist/css/bootstrap.min.css"
import "./components/App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Auth from "./components/Auth"


function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Auth/>} />
        </Routes>
        
        </BrowserRouter>
    )
}
    
const reactContentRoot= document.getElementById("root")
console.log(Auth)
ReactDOM.render(<Auth/>, reactContentRoot)
export default App