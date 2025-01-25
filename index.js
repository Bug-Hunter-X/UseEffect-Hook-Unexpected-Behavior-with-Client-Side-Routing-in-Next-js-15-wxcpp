```javascript
//pages/about.js
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

export default function About(){
    const [count, setCount] = useState(0);
    const router = useRouter();
    useEffect(() => {
        let interval;
        if (router.pathname === '/about') {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [router.pathname]);
    return(
        <div>
            <h1>About Page</h1>
            <p>The count is: {count}</p>
        </div>
    );
}
```