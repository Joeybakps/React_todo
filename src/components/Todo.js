import React from 'react';

function Todo(props) {
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
    </div>
  );
}

export default Todo;
