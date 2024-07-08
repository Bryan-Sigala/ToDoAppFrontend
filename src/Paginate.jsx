import { useState } from 'react'
import './App.css'


export function Paginate(){

    return (
        <div className='Paginated'>
            <button>Previous Page</button>
            <label>Actual Page</label>
            <button>Next Page</button>
        </div>
    );
}