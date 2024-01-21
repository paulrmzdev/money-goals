const Goal = (props) => {

  //Goal card styles
  const goalContainerStyles = {
    width: 600,
    height: 150,
    backgroundColor: "#6666",
    borderRadius: 10,
    margin: 5,
    textAlign: "left"
  }

  const progressContainerStyles = {
    height: 25,
    width: '100%',
    backgroundColor: "#6666",
    borderRadius: 50,
    overflow: "hidden"
  }

  const fillerStyles = {
    height: '100%',
    width: `${progressCalc(props.progress,props.goal)}%`,
    backgroundColor: "#149eca",
    borderRadius: 'inherit',
    textAlign: 'right',
//  transition: 'width 1s ease-in-out',
  }

  const processLabelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }


  function formatear(value){
    return new Intl.NumberFormat('es-Mx', { style: 'currency', currency: 'MXN' }).format(
      value,
    )
  }
  
  function progressCalc(aportaciones,value){
      var progress = (aportaciones / value)*100;
    return progress.toFixed(2);
  }


  return <>
  <div className="goal" style={goalContainerStyles}>
    <div style={{display: "flex",alignItems: "center"}}>
    <img width="48" height="48" src="https://img.icons8.com/color/48/coins.png" alt="coins"/>
      <h2 style={{color: "#149eca"}}>{props.name}</h2>
    </div>
    <div className="money" style={{display: "flex", justifyContent: "space-between"}}>
      <p style={{fontWeight: "bold"}}>{formatear(props.goal)}</p>
      <p style={{textAlign: "right"}}>{formatear(props.goal-props.progress)}</p>
    </div>
    <div className="progressContainer" style={progressContainerStyles}>
      <div className="filler" style={fillerStyles}>
        <span style={processLabelStyles}>{formatear(props.progress)}&nbsp;({progressCalc(props.progress,props.goal)}%)</span>
      </div>
    </div>
  </div>
    </>
}


export default Goal