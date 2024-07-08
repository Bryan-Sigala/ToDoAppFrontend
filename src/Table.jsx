import DataTable from "react-data-table-component";
import './App.css'

export default function ToDoTable(){

    const columns = [
        { 
            name: 'Done',
            selector: row => row.done
        },
        {
            name: 'Name',
            selector: row => row.name
        }, 
        {
            name: 'Priority',
            selector: row => row.priority
        }, 
        {
            name: 'Due Date',
            selector: row => row.dueDate
        }, 
        {
            name: 'Actions',
            selector: row => row.actions
        }
    ]

    const todos = [
        {
            id: 1, 
            name: 'Clean de dishes',
            dueDate: '2024-07-18',
            done: false, 
            doneDate: '',
            priority: 'LOW', 
            creationDate: '2024-07-17'
        }, 
        {
            id: 2, 
            name: 'Buy new shoes',
            dueDate: '2024-08-10',
            done: false, 
            doneDate: '',
            priority: 'LOW', 
            creationDate: '2024-07-07'
        }
    ]

    return (
        <DataTable 
            className="Table"
            columns={columns} 
            data={todos}
            fixedHeader/>
            
    );
}