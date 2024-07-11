import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputName, SelectPriorityFilter, SelectDoneFilter } from './InputName'
import { Search, NewToDo } from './Buttons'
import Table from './Table'
import { Paginate } from './Paginate'
import AverageTime from './Average'

function App() {
  const [input, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llamada al backend usando axios
    axios.get('http://localhost:9090/todos?page=1&pageSize=10&sortBy=&doneFilter=&nameFilter=&priorityFilter=')
      .then(function (response) {
        // handle success
        console.log(response.data); // Aquí obtienes los datos del backend
        console.log("Success");
        setData(response.data); // Guarda los datos en el estado local
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        console.log("ERROR");
      });
  }, []); // [] como segundo parámetro para que se ejecute solo una vez al montar el componente
  

  return (
    <>
      <main>
        <div className="Filter-Search1">
          <div className="InputName">Input name here</div>
          <div className="Filter-Search2">
            <div>
              <div><label>Priority: </label><SelectPriorityFilter /></div>
              <div><label>State: </label><SelectDoneFilter /></div>
            </div>
            <div><Search /></div>
          </div>
        </div>
        <NewToDo />
        <Table data={ data }/>
        <Paginate />
        <AverageTime />
      </main>
    </>
  )
}

export default App
