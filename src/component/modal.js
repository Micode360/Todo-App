import { Component } from "react"
import { Form, Modal } from "react-bootstrap"



export default class MyVerticallyCenteredModal extends Component {
    // console.log(props.valuetoupdate, typeof(props.valuetoupdate));

    render(){
    const smth = () => {
        return Object.entries(this.props.valuetoupdate).map((item)=>{
             return item[1].text;
         })
     }
  
    
    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Post
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    className="textarea update-textarea"
                    as="textarea"
                    rows={3}
                    defaultValue={smth()[0]}
                />

                <button className="send" onClick={() => {
                    //this.props.updateValue(content.id)
                }}>Update</button>
            </Modal.Body>
        </Modal>
    );
 }
}
