import PropTypes from "prop-types";
import styles from "./ProgressBar.module.css"

function ProgressBar ({goal,progress}) {
    
    function progressCalc(aportaciones,value){
        var progress = (aportaciones / value)*100;
        return progress.toFixed(2);
      }
    function formatear(value){
        return new Intl.NumberFormat('es-Mx', { style: 'currency', currency: 'MXN' }).format(
        value,)
      }

    const fillerStyles = {
        width: `${progressCalc(progress,goal)}%`,
        backgroundColor: "rgb(20, 158, 202)"
      }
    
      const processLabelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
      }  

      
  return (
    <div className={styles.progressContainer}>
      <div className={styles.filler} style={fillerStyles}>
        <span style={processLabelStyles}>{formatear(progress)}&nbsp;({progressCalc(progress,goal)}%)</span>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.string,
  goal: PropTypes.string
}

export default ProgressBar