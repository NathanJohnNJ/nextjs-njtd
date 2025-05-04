const Course = (props) => {
  return(
    <li className="flex flex-col justify-center m-2 list-disc text-left w-full">
        <div className=""><b>{props.date} - {props.course}</b> -<i> {props.school}</i></div>
        {props.points&&
        <ul className="list-disc">
          {props.points.map((point, i) => {
            if (typeof point==="string"){
              return(
                <li key={i} className="list-disc">{point}</li>
              )
            } else{
              return(
                <li key={i} className="">{point.title}
                  <ul key={i,i} className="list-disc">
                    {point.points.map((point, i) => {
                      return(
                        <li key={i} className="list-disc">{point}</li>
                      )
                    })}
                  </ul>
                </li>
              )
            }
          
        })}
          
        </ul>}
      <div>{props.description}</div>
    </li>
  )
}

export default Course;