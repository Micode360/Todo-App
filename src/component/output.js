import { Component } from "react"
import { Col } from "react-bootstrap"


export default class Output extends Component {
    render() {
            // console.log(this.props.stateValue)
        return (
            <div>
                {
                    this.props.stateValue.map((item) => {

                        return (
                            <div className="output-container"  key={item.id}>
                                <Col className="output">
                                    <p>{item.text}</p>
                                    <span className="time">Created at {item.createdAt}</span>
                                </Col>
                                <div className="button-case">
                                <button onClick={() => {
                                   this.props.stateValue.filter((content) => {
                                    this.props.deleteValue(content.id)
                                        return true;
                                     });
                                }}>Delete</button>
                                
                                <button className="update-button" onClick={()=>{
                                   this.props.stateValue.filter((content) => {
                                    this.props.updateValue(content.id)
                                    this.props.modalValue(true)
                                        return true;
                                     });
                                }}>Update</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}