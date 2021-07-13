import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CompareTable = (props) => {

    const compareTablePokemon=useSelector((store)=>{
        return store;
    });

    const dispatch=useDispatch();

    return (
        <div className="">
            {/* <ul class="list-group w-25 ">
                <li class="list-group-item bg-light">Attributes</li>
                <li class="list-group-item">Row A</li>
                <li class="list-group-item">Row B</li>
                <li class="list-group-item">Row C</li>
            </ul> */}
        </div>
    )
}

export default CompareTable
