import React, { useState, useEffect } from 'react'
import Merkinta from './Merkinta.jsx'

export default function useFetchAll() {

const [merkinnat, setMerkinnat] = useState([]);
// Last parameter [], If present, effect will only activate if the
// values in the list change.
    useEffect(() => {
    fetch("/api/topics",
    {headers:{"Accept":"application/json"}})        
    .then(res=>res.json())
    .then(merkinnat=>setMerkinnat(merkinnat))
    },[]);

    let merkintaRivi = merkinnat.map((merkki, index) => {
        return (<Merkinta merkki = {merkki} key = {index}
                />)
    })

    return (
        <table>
                <tbody>
                    {merkintaRivi}
                </tbody>
            </table>
    )
}


