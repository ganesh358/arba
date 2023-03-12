
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Home";
import Loginpage from "./Login";
import ProductCart from "./ProductCart";
import Signuppage from "./Signup";




export default function AllRoutes(){
  const [token,setToken] = useState(localStorage.getItem("userToken") ?? null);
    return (
      <Switch> 
        
     
        <Route  path="/" exact={true}>
              {token ?  <Homepage/> :  <Loginpage token={token} setToken={setToken}/> }
              
        </Route>
        <Route  path='/signup'  exact={true}>
               <Signuppage/>
        </Route>
        <Route  path='/cart'  exact={true}>
                <ProductCart/>
        </Route>
        
      </Switch>
         
    )
}