import DataTable from "react-data-table-component";
import './App.css'

const ToDoTable = ({ data }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Done</th>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                    <td></td>
                    <td>{item.text}</td>
                    <td>{item.priority}</td>
                    <td>{item.dueDate}</td>
                    </tr>
                ))}
            </tbody>
      </table>
            
    );
};

export default ToDoTable;