import { useState } from "react";

 function AdvancedCounter() {

    const[count, setCount] = useState(0)
    const[history, setHistory] =useState([0]) 
    const[step, setStep] = useState(1)
    const [saved,setSaved] = useState(false)

    //function to increment and decreament counter

    function handleIncrement() {
         setCount( prevcount => prevcount + 1);
    }

    function handleDecrement(){
        setCount( prevcount => prevcount - 1);
    }


  return (
    <div className="font-sans max-w-md mx-auto p-5 border border-gray-300 rounded-lg mt-5 mb-5">

      <h2 className="text-center text-xl font-semibold">
        Counter
      </h2>

      <div className="text-2xl text-center my-5">
        Current Count: <span className="font-bold">0</span>
      </div>

      <div className="flex justify-center gap-3 mb-5">
        <button onClick={handleDecrement} className="px-4 py-2 border rounded hover:bg-gray-100">
          Decrement
        </button>

        <button onClick={handleIncrement} className="px-4 py-2 border rounded hover:bg-gray-100">
          Increment
        </button>

        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Reset
        </button>
      </div>

      <div className="mb-5 text-center">
        <label htmlFor="stepInput" className="mr-2">
          Step Value:
        </label>
        <input
          type="number"
          id="stepInput"
          min="1"
          className="px-2 py-1 w-16 border rounded"
          defaultValue="1"
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
          <li className="py-1">0</li>
        </ul>
      </div>

      <small className="block text-center mt-5 text-gray-500">
        Use ArrowUp to increment and ArrowDown to decrement.
      </small>

      

    </div>
  );
}

export default AdvancedCounter;