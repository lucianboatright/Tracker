
import React, { Component } from 'react';



class textButton extends Component {

    state = {
        text: {
            recipient: "",
            textmessage: ""
        }
    }

    sendText = () => {
        const { text } = this.state
        //pass veriables within the query string
        fetch(`http://localhost:4000/send-text?recipient=${text.recipient}&testmessage=${text.textmessage}`,console.log(text.recipient, text.textmessage))
        .catch(err => console.log(err))
    }

    render() {

        const { text } = this.state;

        const spacer = {
            margi: 8
        }

        const textArea = {
            borderRadius: 4
        }


        return (
            <div className="textButtonBody">
                <header className="buttonHeader">
                    <h1 className="buttonTitle">Welcome</h1>
                </header>
                <div sytle={{ margin: 10 }}>
                    <h2>Send text</h2>
                    <label>Enter Your Phone Number</label>
                    <br />
                    <input value={text.recipient}
                            onChange={e => this.setState({ text: {...text, recipient: e.target.value} })} />
                    <div style={spacer} />
                    <label>Message to send</label>
                    <br />
                    <textarea rows={3} value={text.textmessage} style={textArea}
                        onChange={e => this.setState({ text: {...text, textmessage: e.target.value} })} />
                    <div style={spacer} />
                    <button onClick={this.sendText}>Send Text</button>
                
                </div>
            </div>
        )
    }

}

export default textButton;