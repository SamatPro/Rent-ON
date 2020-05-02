import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import Profile from "./Profile";
import NoMatch from "./NoMatch";
import Header from "./Header";
import Footer from "./Footer";

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
                                <Route path="/index" exact component={MainPage}/>
                                <Route path="/product" exact component={ProductPage}/>
                                <Route path="/profile" exact component={Profile}/>
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