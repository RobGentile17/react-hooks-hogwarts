import React from "react"
import Hogs from "./Hogs"

  const HogsList = ({ hogs }) => {
    return (
      <div className="ui three cards ">
        {hogs.map((hog) => (
          <Hogs hog={hog}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog.weight}
          />
        ))}
      </div>
    )
  }

export default HogsList;