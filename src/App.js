import { useState , useEffect } from 'react';
import primeNumberGenerator from './Components/primeNumberGenerator';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(10);
  const [primeNumbers, setPrimeNumbers] = useState(primeNumberGenerator(inputValue))
 
    useEffect(() =>{
      setPrimeNumbers(primeNumberGenerator(inputValue))
    }, [inputValue])

  const generateTable = () =>{
    
    const tableRows = [];

     
  for(let i = 1; i < primeNumbers.length; i++){
    
   const rowCells = [];
  
     for(let j = 1; j < primeNumbers.length; j++){
       rowCells.push(<td  className='border-b-2 border-l-2 h-10 text-xl'> {primeNumbers[i-1] * primeNumbers[j-1]}</td>)
     }
     
     rowCells.unshift(<td>{primeNumbers[i - 1]}</td>)
     
     
     tableRows.push(<tr className='border-b-2  border-r-2'>{rowCells}</tr>)
 }

 const emptyCells = [];
    for(let i = 0; i < primeNumbers.length; i++){
      if(i === 0){
        emptyCells.push(<td className='border-b-2 border-r-2'></td>)
      }
      else{
        emptyCells.push(<td className='border-b-2 border-r-2'>{primeNumbers[i - 1]}</td>)
      }
    }
   tableRows.unshift(<tr className='border-b-2 border-r-2 h-8 text-xl'>{emptyCells}</tr>)
   return tableRows
  };


   
  return (
    <div className="m-6">
      <h1  className=" text-2xl text-center">Prime number Multiplication Table</h1>
      <input onChange={(e) => setInputValue(e.target.value)} 
      type="number"
       value={inputValue}
       className="border-2 rounded text-xl my-8"
       />
          <div>
            <table className='border-2 ' width={'100%'}>
               {generateTable()}
            </table>
            </div> 
    </div>
  );
}

export default App;
