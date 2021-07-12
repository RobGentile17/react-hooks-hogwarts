import React, {useState} from "react"
import HogDetails from "./HogDetails"

const Hogs = ({ hog }) => {
  const[showInfo, setShowInfo] = useState(false)

  const handleShowInfoClick = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo)
  }

  return (
    <div onClick={handleShowInfoClick}className="ui card"> 
      <h1> {hog.name} </h1>
      <img src= {hog.image}></img>
      <div>
        {showInfo ? <HogDetails hog={hog} /> : null}
      </div>
    </div>
  )
}
 
export default Hogs;