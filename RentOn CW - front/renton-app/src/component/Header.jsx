import React, {Component} from 'react'
import ProfileLogo from "./ProfileLogo";
import HeaderButtons from "./HeaderButtons";

class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <div id="top-header">
                        <div className="container">
                            <ul className="header-links pull-left">
                                <li><a><i className="fa fa-phone"></i> +021-95-51-84</a></li>
                                <li><a><i className="fa fa-envelope-o"></i> renton.kzn@gmail.com</a></li>
                                <li><a><i className="fa fa-map-marker"></i> Казань, Кремлевская, 35 </a></li>
                            </ul>

                            <ProfileLogo/>
                        </div>
                    </div>
                    

                    
                    <div id="header">
                        
                        <div className="container">
                            
                            <div className="row">
                                
                                <div className="col-md-3">
                                    <div className="header-logo">
                                        <a href="/" className="logo">
                                            <img src="/logo.png" alt="" width="200px"/>
                                        </a>
                                    </div>
                                </div>

                                <HeaderButtons/>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </header>
                
            </div>
        )
    }
}

export default Header