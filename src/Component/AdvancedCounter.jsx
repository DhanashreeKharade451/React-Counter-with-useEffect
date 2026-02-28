import { useState ,useEffect } from "react";

 function AdvancedCounter() {

    const[count, setCount] = useState(0)
    const[history, setHistory] =useState([]) 
    const[step, setStep] = useState(1)
    const [saved,setSaved] = useState(false)

    //Autosave to local Storage
    useEffect(() => {
  setSaved(false)

  const timer = setTimeout(() => {
    localStorage.setItem("advanced-count", count)
    setSaved(true)
  }, 500)

  return () => clearTimeout(timer)

}, [count])

    //function to increment and decreament counter

    function handleIncrement() {
         setCount( prevcount => prevcount + step);
         
        
    }

    function handleDecrement(){
        setCount( prevcount => prevcount - step);
    }

    function reset(){
        setCount(0);
        setHistory([0]);

    }

    //Track history when count changes
  useEffect(() => {
    setHistory(prev => {
        if(prev[prev.length - 1] === count) return prev; //avoid duplicate
        return [...prev, count]
    });
  }, [count]);


  return (
    <div className="font-sans max-w-md mx-auto p-5 border border-gray-300 rounded-lg mt-5 mb-5">

      <h2 className="text-center text-xl font-semibold">
        Counter
      </h2>

      <div className="text-2xl text-center my-5">
        Current Count: <span className="font-bold">{count}</span>
      </div>

      <div className="flex justify-center gap-3 mb-5">
        <button onClick={handleDecrement} className="px-4 py-2 border rounded hover:bg-gray-100">
          Decrement
        </button>

        <button onClick={handleIncrement} className="px-4 py-2 border rounded hover:bg-gray-100">
          Increment
        </button>

        <button onClick={reset} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Reset
        </button>
      </div>

      <div className="mb-5 text-center">
        <label htmlFor="stepInput"  className="mr-2">
          Step Value:
        </label>
        <input
          type="number"
          id="stepInput"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="px-2 py-1 w-16 border rounded"
         
        />
      </div>

      <div className="mb-2 text-center italic text-gray-600">
        Changes saved.
      </div>

      <div>
        <h3 className="border-b border-gray-200 pb-1 font-medium">
          Count History:
        </h3>

        <ul className="max-h-40 overflow-y-auto">

        {history.map((item,index) =>
            ( <li key={index} className="py-1">
            {item}
          </li>))}
          
        </ul>
      </div>

      <small className="block text-center mt-5 text-gray-500">
        Use ArrowUp to increment and ArrowDown to decrement.
      </small>

      
    </div>
  );
}

export default AdvancedCounter;