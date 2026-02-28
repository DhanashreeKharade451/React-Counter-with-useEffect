 function AdvancedCounter() {

  return (
    <div className="font-family:sans-serif;max-width:500px;margin:auto;padding:20px;border:1px solid #ccc;border-radius:8px;margin-top:20px;margin-bottom:20px">
      <h2 className="text-align:center">Counter</h2>
      <div className="font-size:2em;text-align:center;margin:20px 0">
        Current Count: <span className="font-weight:bold">0</span>
      </div>
      <div className="display:flex;justify-content:center;gap:10px;margin-bottom:20px">
        <button className="padding:10px 15px">Decrement</button>
        <button className="padding:10px 15px">Increment</button>
        <button className="padding:10px 15px;background-color:#f44336;color:white">
          Reset
        </button>
      </div>
      <div className="margin-bottom:20px;text-align:center">
        <label htmlFor="stepInput">Step Value: </label>
        <input
          type="number"
          id="stepInput"
          min="1"
          className="padding:8px;width:60px"
          value="1"
        />
      </div>
      <div className="margin-bottom:10px;text-align:center;font-className:italic">
        Changes saved.
      </div>
      <div>
        <h3 className="border-bottom:1px solid #eee;padding-bottom:5px">
          Count History:
        </h3>
        <ul className="list-className-type: none; padding-left: 0px; max-height: 150px; overflow-y: auto;">
          <li className="padding: 3px 0px; border-bottom: none;">0</li>
        </ul>
      </div>
      <small className="display:block;text-align:center;margin-top:20px">
        Use ArrowUp to increment and ArrowDown to decrement.
      </small>
    </div>
  );
}

export default AdvancedCounter;