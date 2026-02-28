 function AdvancedCounter() {

  return (
    <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:20px;border:1px solid #ccc;border-radius:8px;margin-top:20px;margin-bottom:20px">
      <h2 style="text-align:center">Counter</h2>
      <div style="font-size:2em;text-align:center;margin:20px 0">
        Current Count: <span style="font-weight:bold">0</span>
      </div>
      <div style="display:flex;justify-content:center;gap:10px;margin-bottom:20px">
        <button style="padding:10px 15px">Decrement</button>
        <button style="padding:10px 15px">Increment</button>
        <button style="padding:10px 15px;background-color:#f44336;color:white">
          Reset
        </button>
      </div>
      <div style="margin-bottom:20px;text-align:center">
        <label for="stepInput">Step Value: </label>
        <input
          type="number"
          id="stepInput"
          min="1"
          style="padding:8px;width:60px"
          value="1"
        />
      </div>
      <div style="margin-bottom:10px;text-align:center;font-style:italic">
        Changes saved.
      </div>
      <div>
        <h3 style="border-bottom:1px solid #eee;padding-bottom:5px">
          Count History:
        </h3>
        <ul style="list-style-type: none; padding-left: 0px; max-height: 150px; overflow-y: auto;">
          <li style="padding: 3px 0px; border-bottom: none;">0</li>
        </ul>
      </div>
      <small style="display:block;text-align:center;margin-top:20px">
        Use ArrowUp to increment and ArrowDown to decrement.
      </small>
    </div>
  );
}

export default AdvancedCounter;