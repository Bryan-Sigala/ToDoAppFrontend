import { useState } from 'react'
import './App.css'

export function InputName(){
    const[inputData, setInput] = useState('');

    return (
        <>
            <div style={{backgroundColor: 'white'}}>
                <label>
                    Name: 
                </label>
                <input type='text' >
                    {value}
                </input>
            </div>
        </>
    );
}

export function SelectPriorityFilter(){


    return (
        <select></select>
    );
}

export function SelectDoneFilter(){


    return (
        <select></select>
    );
}