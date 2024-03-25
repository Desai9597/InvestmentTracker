
import React from 'react';
import './InvestmentForm.css';

const initialUserInput = {
  'current-savings' : 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration' : 10
};

const InvestmentForm = (props) => {

    const [userInput, setUserInput] = React.useState(initialUserInput);

    const submitHandler = (event) => {
      event.preventDefault();
      props.onCalculate(userInput);
      console.log('submit');
    };
    const resetHandler = () => {
      console.log('RESET');
      setUserInput(initialUserInput);
    };
    const inputChangeHandler = (inputId,inputValue) => {
      console.log(inputId,inputValue);
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [inputId]: +inputValue,  // the "+" converts the string value to a number
        };
      });
    };

    return (
    <form className="form" onSubmit={submitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" onChange={(event) => inputChangeHandler('current-savings',event.target.value)} 
                id="current-savings"
                value={userInput['current-savings']} />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" onChange={(event) => inputChangeHandler('yearly-contribution',event.target.value)}
                id="yearly-contribution" 
                value={userInput['yearly-contribution']}/>
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" onChange={(event) => inputChangeHandler('expected-return',event.target.value)}
                id="expected-return" 
                value={userInput['expected-return']}/>
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" onChange={(event) => inputChangeHandler('duration',event.target.value)}
                id="duration" 
                value={userInput['duration']}/>
      </p>
    </div>
    <p className="actions">
      <button type="reset" onClick={resetHandler} className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
    );
} ;

export default InvestmentForm;