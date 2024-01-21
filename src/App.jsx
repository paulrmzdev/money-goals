import { useEffect,useState } from 'react';
import './App.css'
import Goal from './components/Goal'
const url=import.meta.env.VITE_BACKEND_URL;
const urlAdd=import.meta.env.VITE_FORM_URL;
function App() {

  //Se declara el estado de la app
  const [goals, setGoals] = useState([]);
  //Se declaran variables
  
  //Consulta a la API y guarda valores en el estado en forma de Array
  useEffect(() => {
      fetch(url)
      .then(response => response.ok ? response.text() : Promise.reject(response))
      .then(res => {
          res=JSON.parse(res.substring(47,res.length-2));
          setGoals(res.table.rows);
      })},[]);

      //console.log(goals);

      //Se usa "Set" para eliminar valores duplicados
      let unicos = [...new Set(goals.map(element => element.c[1].v))];
      //Itera el arreglo original para obtener la suma de todas las aportaciones y retiros de cada meta
      let progreso=unicos.map(element => {
        let suma=0;
        goals.map(elemento2 => {
          if(element == elemento2.c[1].v){
            if(elemento2.c[2] != null){
              suma+=elemento2.c[2].v;
            }else if(elemento2.c[3] != null){
              suma-=elemento2.c[3].v;
            }
          } 
        });
        return element+"="+suma;
      });
      //Limpia los datos separando el string para quitar los caracteres "()"
      let metas=progreso.map(element => element.split("="));
      metas=metas.reverse();

  return (
    <>
    <h1>Money Goals</h1>
    <div className='container'>
      {metas.map(goal => {
        //return <Goal key={goal[0]} name={goal[0]} goal={goal[1]} progress={goal[2]}/>
        //Usar el codigo de abajo para eliminar metas cumplidas
        return Number(goal[2]) > Number(goal[1]) ? "" : <Goal key={goal[0]} name={goal[0]} goal={goal[1]} progress={goal[2]}/>;
      })}
    </div>
    <button><a href={urlAdd}>+</a></button>
    </>
  )
}

export default App
