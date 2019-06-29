import React, { useEffect } from 'react';
import timeSlicing from '../timeSlicing'

// custom Time Slicing
function TimeSlicing() {
  useEffect(() => {
    const id = setInterval(() => {
      timeSlicing(function* () {
        const start = performance.now()
        while (performance.now() - start < 1000) {
          console.log("执行阻塞任务")
          yield
        }
        console.log("done!")
      })
    }, 2000)
    return () => clearInterval(id)
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  );
}

export default TimeSlicing
