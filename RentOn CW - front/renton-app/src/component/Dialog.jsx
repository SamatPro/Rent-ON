import React, {Component} from "react";
import SockJsClient from 'react-stomp'
import {TalkBox} from "react-talk";
import Fetch from "json-fetch";

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
        // this.handleChange = this.handleChange.bind(this)
    }

    onMessageReceive = (msg, topic) => {
        this.setState(prevState => ({
            messages: [...prevState.messages, msg]
        }));
    }
    //
    // componentWillMount() {
    //     Fetch("/history/" + "room1", {
    //         method: "GET"
    //     }).then((response) => {
    //         this.setState({messages: response.body});
    //     });
    // }
    //
    //
    // handleChange(event) {
    //     this.setState(
    //         {
    //             [event.target.name]: event.target.value
    //         }
    //     )
    // }
    //
    // sendMessage = (msg, selfMsg) => {
    //     try {
    //         this.clientRef.sendMessage("/app/room/" + "room1", JSON.stringify(selfMsg));
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    // }


    render() {
        console.log('render')
        return (
            <div>
                <TalkBox topic="Сообщения" currentUserId={localStorage.getItem("AUTH")}
                         currentUser={localStorage.getItem("authenticatedUser")} messages={this.state.messages}
                         onSendMessage={this.sendMessage} connected={this.state.clientConnected}/>
                <SockJsClient url={"http://localhost/api/stomp/messages"} topics={["/topic/room/room2"]}
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
        // messages={this.state.messages}
        // onSendMessage={this.sendMessage} connected={this.state.clientConnected}
        )
    }
}

export default Dialog



// ref={(client) => {
//     this.clientRef = client
// }}
// onConnect={() => {
//     this.setState({clientConnected: true});
// }}
// onDisconnect={() => {
//     this.setState({clientConnected: false})
// }}
// debug={true}