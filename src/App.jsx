import { useState } from 'react'
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
        <Table />
        <Paginate />
        <AverageTime />
      </main>
    </>
  )
}

export default App
