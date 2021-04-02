import { Component } from "react";
import { Form } from "react-bootstrap";
import Output from "./output"
import { v4 as uuidv4 } from 'uuid';
import moment from "moment"


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            value: []
        };
    }
    myChangeHandler = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') return;
        else {
            this.setState({ value: [...this.state.value, {id:uuidv4(), text:this.state.text, createdAt: moment().format('LT')}] })
            this.setState({text: ''})
            e.target.reset();// to reset the input value
        }
    }

    deleteValue = (id) => {
        const modifyStateContent = this.state.value.filter((item)=>{
        return item.id !== id;
        })
        this.setState({value: modifyStateContent})
    }

    updateValue = (id) => {
        console.log(id);
    }
    
    render() {

        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1" >
                        <Form.Control
                            className="textarea"
                            as="textarea"
                            value={this.state.text}
                            rows={3}
                            onChange={this.myChangeHandler}
                        />
                    </Form.Group>

                    <button className="send">Send</button>
                </Form>

                <Output stateValue={this.state.value} updateValue={this.updateValue} deleteValue={this.deleteValue} />
            </>
        );
    }
}