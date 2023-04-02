import {Switch, Route} from 'react-router-dom';
import { Store } from "./pages/store/Store";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { ProfileEdit } from "./pages/profileEdit/ProfileEdit";
import { Payment } from "./pages/payment/Payment";

export const Content =()=>{
    return(
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/store" component={Store}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/payment/:price" component={Payment}/>
            <Route exact path="/profile" component={Profile}/>                  
            <Route exact path="/profile/edit" component={ProfileEdit}/>                  
        </Switch>
    )

}