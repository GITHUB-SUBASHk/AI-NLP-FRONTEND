import React, { useEffect, useState } from 'react'; 
import { fetchData } from '../api/client';

export default function Home() { 
    const [data, setData] = useState<any>(null);

useEffect(() => { fetchData('/status').then(setData); }, []);

return ( 
<div className="p-4"> 
    <h2 className="text-2xl font-semibold mb-4">System Status
        </h2> <pre className="bg-gray-100 p-4 rounded shadow">{JSON.stringify(data, null, 2)}</pre> 
        </div> ); }