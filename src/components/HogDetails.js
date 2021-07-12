import React from "react"

const HogDetails = ({ hog }) => {
  const {specialty, greased, weight, "highest medal achieved": medal}=hog
  return (
    <div className="description">
      <h1> {greased ? "Greased" : "NonGreased"}</h1>
      <p>
      <strong> 
        Highest medal achieved: {medal}
      </strong>
      </p>
      <p>
      <strong>Hog Weight: {weight}</strong>
      </p>
      <p>
      <strong>Specialty: {specialty}</strong>
      </p>
    </div>
  )
}
 
export default HogDetails;