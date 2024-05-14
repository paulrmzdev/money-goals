import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
function Goal ({progress,goal,name}) {

  //Goal card styles
  const goalContainerStyles = {
    width: 600,
    height: 150,
    backgroundColor: "#6666",
    borderRadius: 10,
    margin: 5,
    textAlign: "left"
  }
  function formatear(value){
    return new Intl.NumberFormat('es-Mx', { style: 'currency', currency: 'MXN' }).format(
      value,
    )
  }

  return <>
  <div className="goal" style={goalContainerStyles}>
    <div style={{display: "flex",alignItems: "center"}}>
    <img width="48" height="48" src="https://img.icons8.com/color/48/coins.png" alt="coins"/>
      <h2 style={{color: "#149eca"}}>{name}</h2>
    </div>
    <div className="money" style={{display: "flex", justifyContent: "space-between"}}>
      <p style={{fontWeight: "bold"}}>{formatear(goal)}</p>
      <p style={{textAlign: "right"}}>{formatear(goal-progress)}</p>
    </div>
    <ProgressBar goal={goal} progress={progress}/>
  </div>
    </>
}

Goal.propTypes = {
  name: PropTypes.string,
  progress: PropTypes.string,
  goal: PropTypes.string
}

export default Goal