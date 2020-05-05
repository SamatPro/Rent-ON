import React, {Component} from 'react'
import Profile from "./Profile";

class ProfileBtn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: Profile.props

        }
    }

    isOwnerProfile(){
        console.log(this.id)
        return this.id === localStorage.getItem("userId");
    }


    render() {
        if (this.isOwnerProfile()) {
            console.log("button")
            return (
                <button className="primary-btn order-submit"
                    onClick={Profile.updateProfile}>Изменить данные и пароль
                </button>
            )
        } else {
            return (
                ''
            )
        }

    }
}

export default ProfileBtn