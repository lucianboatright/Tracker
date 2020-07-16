
import React, { Component } from 'react';



class textButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: {
            to: '',
            body: ''
          },
          submitting: false,
          error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }

      onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('/sendsms', {
            method: 'POST',
            headers: {
              Accept: 'application/JSON',
              'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({"data": this.state.data})
          })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
          console.log("onSubmit")
      } 
    // state = {
    //     text: {
    //         recipient: "",
    //         textmessage: ""
    //     }
    // }

    // sendText = () => {
    //     const { text } = this.state
    //     //pass veriables within the query string
    //     fetch(`http://localhost:4000/send-text?recipient=${text.recipient}&testmessage=${text.textmessage}`,console.log(text.recipient, text.textmessage))
    //     .catch(err => console.log(err))
    // }

    render() {

        // const { text } = this.state;

        // const spacer = {
        //     margi: 8
        // }

        // const textArea = {
        //     borderRadius: 4
        // }


        return (
            <form
            onSubmit={this.onSubmit}
            className={this.state.error ? 'error sms-form' : 'sms-form'}
            >
            <div>
              <label htmlFor="to">To:</label>
              <input
                type="tel"
                name="to"
                id="to"
                value={this.state.message.to}
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea
                name="body"
                id="body"
                value={this.state.message.body}
                onChange={this.onHandleChange}
              />
            </div>
            {/* <button type="submit" disabled={this.state.submitting}>Send message</button> */}
            <button onClick={this.sendSms.bind(this)}>Send SMS</button>
          </form>

            // <div className="textButtonBody">
            //     <header className="buttonHeader">
            //         <h1 className="buttonTitle">Welcome</h1>
            //     </header>
            //     <div sytle={{ margin: 10 }}>
            //         <h2>Send text</h2>
            //         <label>Your Phone Number</label>
            //         <br />
            //         <input value={text.recipient}
            //                 onChange={e => this.setState({ text: {...text, recipient: e.target.value} })} />
            //         <div style={spacer} />
            //         <label>Message</label>
            //         <br />
            //         <textarea rows={3} value={text.textmessage} style={textArea}
            //             onChange={e => this.setState({ text: {...text, textmessage: e.target.value} })} />
            //         <div style={spacer} />
            //         <button onClick={this.sendText}>Send Text</button>
                
            //     </div>
            // </div>
        )
    }

}

export default textButton;