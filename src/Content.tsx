import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { Store } from "./pages/store/Store";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { ProfileEdit } from "./pages/profileEdit/ProfileEdit";
import { Payment } from "./pages/payment/Payment";
import { AuthContext } from "./providers/auth";
import React from 'react';

export const Content = () => {
    const { isLoggedIn } = React.useContext(AuthContext);

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/store" render={() => isLoggedIn ? <Store /> : <Redirect to="/" />} />
            <Route exact path="/cart" render={() => isLoggedIn ? <Cart /> : <Redirect to="/" />} />
            <Route exact path="/payment/:price" render={(props: RouteComponentProps<{ price: string }>) => isLoggedIn ? <Payment {...props} /> : <Redirect to="/" />} />
            <Route exact path="/profile" render={(props: RouteComponentProps) => isLoggedIn ? <Profile {...props} /> : <Redirect to="/" />} />
            <Route exact path="/profile/edit" render={(props: RouteComponentProps) => isLoggedIn ? <ProfileEdit {...props} /> : <Redirect to="/" />} />
        </Switch>
    )
}
