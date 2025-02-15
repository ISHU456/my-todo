import React, { useMemo, useState } from 'react'

const ExpensiveCalc = () => {
    const [num, setNum] = useState(5)
    let factorial = useMemo(() =>{
      var countFactorial = (n) => n<=1 ? 1 : countFactorial(n-1) * n;
      return countFactorial(num)
    }, [num])
    // console.log(factorial);
  return (
    <div>
        <h1 className="text-center my-4">{factorial}</h1>
        <button className="btn-danger btn" onClick={()=> setNum(num+1)}>+</button>    
    </div>
  )
}

export default ExpensiveCalc