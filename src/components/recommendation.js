import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function Recommendation(props) {
    let { name, designation, company, message } = props.recommendation;
    let message1;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if(message.length > 30){
    message1 = message.slice(0,30) + "..."; 
  }
  else{
    message1 = message;
  }

    return (
        <div className="col-12 col-md-4">
        <a onClick={handleShow} id='anchor'>
      <div className="card shadow h-100">
          <div className="card-body">
              <h4 className="card-text">{message1}</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">{designation} at {company} Company.</p>
          </div>
   </div>
   </a>
  
  <>
   <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">{message}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{name}</Modal.Body>
          <Modal.Footer>
            {designation} at {company} Company.
          </Modal.Footer>
        </Modal>
</>
   </div>
    )
  }


export default Recommendation;
