import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";
import { useHistory } from 'react-router-dom';


class ProfileBtn extends Component {
    constructor(props) {
        let history = useHistory;
        super(props)

        this.state = {
            id: props.state

        }
        this.updateProfile = this.updateProfile.bind(this);
    }

    isOwnerProfile(){
        console.log(this.state.id)
        return this.state.id === localStorage.getItem("userId");
    }

    updateProfile(){
        window.location.href = "/user/edit"
        // history.pushState(`/user/edit`)
    }


    render() {
        if (this.isOwnerProfile()) {
            return (
                <button className="primary-btn order-submit"
                    onClick={()=>this.updateProfile()}>Изменить данные и пароль
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