import React, {useState} from 'react';
import ExpenseList from "./Components/ExpenseList";
import ExpenseForm from "./Components/ExpenseForm";
import Alert from "./Components/Alert";


const initialExpenses = [
  {id:1, charge:"rent", amount:1600},
  {id:2, charge:"car payment", amount:400},
  {id:3, charge:"credit card bill", amount:1200}

];


function App() {
 const [expenses, setExpenses] = useState(initialExpenses)
//  console.log(expenses);

  return ( <>
  <h1> budget calculator </h1>
  <main className="App">
      <Alert />
      <ExpenseForm />
      <ExpenseList expenses={expenses}/>

  </main>
  <h1> total spending: {" "}
    <span className="total">
       ${expenses.reduce((acc, curr) => {
         return (acc+= curr.amount);
       }, 0)}

      </span>
  </h1>


  </>

  )
}
export default App;