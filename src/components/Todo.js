import React from 'react';

function Todo(props) {
  return (
    <div className="card">
      <h2 className="action">Title</h2>
      <div>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
