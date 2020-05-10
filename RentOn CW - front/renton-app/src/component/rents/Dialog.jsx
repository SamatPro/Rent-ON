import React, {Component} from "react";
import SockJsClient from 'react-stomp'
import {TalkBox} from "react-talk";
import Fetch from "json-fetch";

const API_URL = 'http://localhost:8080'


class Dialog extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clientRef: null,
            ws: null,
            messages: [],
            text: '',
            clientConnected: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    onMessageReceive = (msg, topic) => {
        this.setState(prevState => ({
            messages: [...prevState.messages, msg]
        }));
    }

    componentWillMount() {
        Fetch(API_URL + "/history/" + this.props.state, {
            method: "GET"
        }).then((response) => {
            this.setState({messages: response.body});
        });
    }


    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    sendMessage = (msg, selfMsg) => {
        try {
            console.log(this.props.state + "room")
            this.clientRef.sendMessage("/app/message/" + this.props.state, JSON.stringify(selfMsg));
            return true;
        } catch (e) {
            return false;
        }
    }


    render() {
        return (
            <div>
                <TalkBox topic="Сообщения" currentUserId={localStorage.getItem("AUTH")}
                          currentUser={this.props.username} messages={this.state.messages}
                         onSendMessage={this.sendMessage} connected={this.state.clientConnected}/>

                {/*{this.state.messages.map((message)=><p>{message.message} {message.author}</p>)}*/}
                <SockJsClient url={"http://localhost:8080/chat-messaging"}
                              topics={["/chat/messages/"+this.props.state]}
                              onMessage={this.onMessageReceive} ref={(client) => {
                    this.clientRef = client
                }}
                              onConnect={() => {
                                  this.setState({clientConnected: true});
                              }}
                              onDisconnect={() => {
                                  this.setState({clientConnected: false})
                              }}
                              debug={true}/>
            </div>
        )
    }
}

export default Dialog