
import React, { Component } from 'react';



class textButton extends Component {

    state = {
        text: {
            recipient: ""
            textmessage: ""
        }
    }

    sendText = => {
        const { text } = this.state
        //pass veriables within the query string
        fetch(`http://localhost:4000/send-text?recipient-${text.recipient}&testmessage-${text.textmessage}`)
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="textButtonBody">
                <div>Hello from inside textbutton</div>
            </div>
        )
    }

}

export default textButton;