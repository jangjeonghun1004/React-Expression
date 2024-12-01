import './App.css'
import ObjectArrayExpression from './ObjectArrayExpression';
import FunctionExpression from './FunctionExpression';

function BasicExpressions() {
  const name = "james";
  const age = 30;
  const isAdmin = true;

  return(
    <div>
      <p>name = {name}</p>
      <p>age one plus = {age + 1}</p>
      <p>name add some text = {name + "'s books."}</p>
      <p>string other expresstion = {`${name} 's books and age = ${age}`}</p>
      <p>is admin = {String(isAdmin)}</p>
    </div>
  )
}

function App() {

  return (
    <>
     <BasicExpressions />
     <ObjectArrayExpression />
     <FunctionExpression />
    </>
  )
}

export default App
