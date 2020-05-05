import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import MainPage from "./MainPage";
import ProductPage from "./products/ProductPage";
import Profile from "./profile/Profile";
import NoMatch from "./NoMatch";
import Header from "./Header";
import Footer from "./Footer";
import SuccessfulRegistration from "./SuccessfulRegistration";
import Confirm from "./Confirm";
import ProfileEdit from "./profile/ProfileEdit";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ProductAdd from "./products/ProductAdd";

class InstructorApp extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className={'container'}>
                    <Router>
                        <>
                            <Switch>
                                <Route path="/" exact component={MainPage} />
                                <Route path="/login" exact component={Login} />
                                <Route path="/register" exact component={Registration} />
                                <Route path="/successful" exact component={SuccessfulRegistration}/>
                                <Route exact path='/confirm/:id' component={Confirm} />
                                <Route path="/index" exact component={MainPage}/>
                                <Route path="/product/add" exact component={ProductAdd}/>
                                <Route exact path="/product/:id" component={ProductPage}/>
                                <AuthenticatedRoute exact path="/product/:id/edit" component={ProductAdd}/>
                                <AuthenticatedRoute exact path="/user/edit" component={ProfileEdit}/>
                                <AuthenticatedRoute exact path='/user/:id' component={Profile}/>

                                <Route component={NoMatch} />
                            </Switch>
                        </>
                    </Router>
                </div>
                <Footer/>
            </>
        )
    }
}

export default InstructorApp