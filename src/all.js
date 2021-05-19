import React from 'react';
import ReactDOM from 'react-dom';
import SignInButton from './signInButton'
import TypeName from './typeName'
import TypePassword from './typePassword'
import List from './todoList.js';


function Login() {
  return (
    <div className="Login">
      <div>
        { TypeName() }
      </div>
      <div>
        { TypePassword() }
      </div>
    </div>
  );
}

function TodoList() {
    return (
        <div>{ List() }</div>
    );
}



function All(props) { 
  const isLoggedIn = props.isLoggedIn; 
  if (isLoggedIn) {
    return <TodoList />;
 }
 return <Login />; 
} 
  ReactDOM.render( 
    <All isLoggedIn={false} />, document.getElementById('root') 
  );


export default All;
