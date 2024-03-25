import React from 'react';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentHeader from './components/InvestmentHeader/InvestmentHeader';
import InvestmentList from './components/InvestmentList/InvestmentList';

function App() {

  const [userInput,setUserInput] = React.useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);    
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  // do something with yearlyData ...

  return (
    <div>

      <InvestmentHeader />
      <InvestmentForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && <p>No investment calculated.</p>}
      {userInput && <InvestmentList data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
