import React, { Component } from "react";
import { SocketContext, socket } from './context/socket';

class SocketComponent extends Component {

    componentDidMount(){
        socket.on('my_response', data => { console.log(data)})
        socket.emit('my_event', {'data': 'message sent from frontend'}, on='/test')
        socket.emit('some_method', {'data': 'message for some method'})
    }

    render() {
        return (
            <div>
                <p>Socket Component Rendered.</p>
            </div>
        );
    }
}

export default SocketComponent;
