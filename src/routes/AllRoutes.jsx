
import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../component/Navbar";
import Allproducts from "./AllProducts";
import Homepage from "./Home";
import Loginpage from "./Login";
import ProductCart from "./ProductCart";
import Signuppage from "./Signup";




export default function AllRoutes(){
  const [token,setToken] = useState(localStorage.getItem("userToken") ?? null);
    return (
      <Switch> 
        
       
        <Route  path="/" exact={true}>
              {token ? <Grid><Navbar setToken={setToken}/><Homepage/></Grid>  :  <Loginpage token={token} setToken={setToken}/> }
              
        </Route>
        <Route  path='/signup'  exact={true}>
               <Signuppage/>
        </Route>
        <Route  path='/cart'  exact={true}>
                
                {token ? <Grid><Navbar setToken={setToken}/><ProductCart/></Grid>  :  <Loginpage token={token} setToken={setToken}/> }
              
        </Route>
        <Route  path='/all'  exact={true}>
              
               {token ? <Grid><Navbar setToken={setToken}/> <Allproducts/></Grid>  :  <Loginpage token={token} setToken={setToken}/> }
        </Route>
        
      </Switch>
         
    )
}