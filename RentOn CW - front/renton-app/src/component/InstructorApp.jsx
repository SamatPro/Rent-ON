import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './users/Login';
import Registration from './users/Registration';
import MainPage from "./MainPage";
import ProductPage from "./products/ProductPage";
import Profile from "./users/Profile";
import NoMatch from "./NoMatch";
import Footer from "./Footer";
import SuccessfulRegistration from "./users/SuccessfulRegistration";
import Confirm from "./users/Confirm";
import ProfileEdit from "./users/ProfileEdit";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ProductAdd from "./products/ProductAdd";
import AnonymousRoute from "./AnonymousRoute";
import Rents from "./rents/Rents";
import Favourites from "./products/Favourites";
import RentPage from "./rents/RentPage";
import Feedbacks from "./rents/Feedbacks";
import FeedbackPage from "./rents/FeedbackPage";

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
                                <AuthenticatedRoute exact path='/feedback/:id' component={FeedbackPage}/>
                                <AuthenticatedRoute exact path='/feedbacks' component={Feedbacks}/>

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