import React from "react"

const Filter = ({ isGreased, setIsGreased }) => {

  const handleGreaseClicked = (event) => {
    setIsGreased(event.target.checked)
  }

  return (
    <div className="ui item">
      <h2>Click for greased pigs only </h2>
    <div>
      <input 
      className="ui toggle checkbox"
      checked={isGreased}
      onChange={ handleGreaseClicked }
      type="checkbox"
      />  
    </div>
    </div>
  )
}
 
export default Filter;