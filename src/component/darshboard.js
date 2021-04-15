import { Component } from "react"
import Input from "./input"


export default class Darshboard extends Component {
    render() {
        return (
            <>
                <div className="header"><h4>Todo App</h4></div>
                <div className="App">
                        <div className="Form-and-output-container">
                             <Input/>
                        </div>
                </div>
            </>
        );
    }
}