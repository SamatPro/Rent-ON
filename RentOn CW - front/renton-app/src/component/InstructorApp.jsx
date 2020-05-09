import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import Profile from "./profile/Profile";
import NoMatch from "./NoMatch";
import Header from "./Header";
import Footer from "./Footer";
import SuccessfulRegistration from "./SuccessfulRegistration";
import Confirm from "./Confirm";
import ProfileEdit from "./profile/ProfileEdit";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ProductAdd from "./products/ProductAdd";
import AnonymousRoute from "./AnonymousRoute";
import Rents from "./Rents";
import Favourites from "./Favourites";
import RentPage from "./products/RentPage";

class InstructorApp extends Component {


    render() {
        return (
            <>
                    <Router>
                        <>
                            <Switch>
                                <Route path="/" exact component={MainPage} />
                                <AnonymousRoute path="/login" exact component={Login} />
                                <AnonymousRoute path="/register" exact component={Registration} />
                                <AnonymousRoute path="/successful" exact component={SuccessfulRegistration}/>
                                <Route exact path='/confirm/:id' component={Confirm} />
                                <Route path="/product/add" exact component={ProductAdd}/>
                                <Route exact path="/product/:id" component={ProductPage}/>
                                <AuthenticatedRoute exact path="/product/:id/edit" component={ProductAdd}/>
                                <AuthenticatedRoute exact path="/user/edit" component={ProfileEdit}/>
                                <AuthenticatedRoute exact path='/user/:id' component={Profile}/>
                                <AuthenticatedRoute exact path='/rents' component={Rents}/>
                                <AuthenticatedRoute exact path='/rents/:id' component={RentPage}/>
                                <AuthenticatedRoute exact path='/favourites' component={Favourites}/>

                                <Route component={NoMatch} />
                            </Switch>
                        </>
                    </Router>
                <Footer/>
            </>
        )
    }
}

export default InstructorApp