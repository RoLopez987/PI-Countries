import React from "react";

export default function Activity({activity}){
    return(
    <div>
<div>
                    <h4>
                    {activity.name}
                    </h4>
                    <p>Difficulty: {activity.difficulty}</p>
                    <p>Duration: {activity.duration}</p>
                    <p>Season: {activity.season}</p>
                    </div>  
    </div>
  )
};

