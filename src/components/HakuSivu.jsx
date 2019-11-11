import { useState, useEffect } from 'react';

export default function useFetchAll() {

const [merkinnat, setMerkinnat] = useState([]);
// Last parameter [], If present, effect will only activate if the
// values in the list change.
    useEffect(() => {
    fetch("/",
    {headers:{"Accept":"application/json"}})        
    .then(res=>res.json())
    .then(merkinnat=>setMerkinnat(merkinnat))
    },[]);

    return merkinnat;
}