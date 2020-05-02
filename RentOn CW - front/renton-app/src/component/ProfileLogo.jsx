import React, {Component} from 'react'

class ProfileLogo extends Component {
    render() {
        if (!true) {
            return (
                <ul className="header-links pull-right">
                    <li><a href="/register"><i className="fa fa-user-circle"></i> Регистрация</a></li>
                    <li><a href="/login"><i className="fa fa-user-o"></i> Вход</a></li>
                </ul>
            )
        } else {
            return (
                <ul className="header-links pull-right">
                    <li><a href="/profile"><i className="fa fa-user-o"></i>Реактенко Диман</a></li>
                </ul>
            )
        }

    }
}

export default ProfileLogo