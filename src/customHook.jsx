import { useCallback, useState } from "react"

const useCount = (initialValue=0) => {
    const [count, setCount] = useState(initialValue);
    
    
    const increment = useCallback(()=>{
        setCount(count + 1)
    }, [])


    const decrement = ()=>{
        setCount(count - 1)
    }
    const reset = ()=>{
        setCount(0)
    }
    return {
        count,
        increment,
        decrement,
        reset
    }
};


export default useCount;