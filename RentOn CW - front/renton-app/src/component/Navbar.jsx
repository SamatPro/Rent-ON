import React, {Component} from 'react'

class Navbar extends Component {

    render() {
        return (
                <nav id="navigation">
                    <div className="container">
                        <div id="responsive-nav">
                            <ul className="main-nav nav navbar-nav">
                                <li className="active"><a href="/">Главная</a></li>
                                <li><a href="#">Топ</a></li>
                                <li><a href="#">Техника</a></li>
                                <li><a href="#">Развлечения</a></li>
                                <li><a href="#">Спорт</a></li>
                                <li><a href="#">Игрушки</a></li>
                                <li><a href="#">Ремонт</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    )
    }
    }

export default Navbar