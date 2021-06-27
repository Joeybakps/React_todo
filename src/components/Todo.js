import React from 'react';
import useState from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    alert(props.text);
  }
  return (
    <div className="card">
      <h2 className="action">{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* {modalIsOpen && <Modal />} */}
      <Backdrop />
    </div>
  );
}

export default Todo;
