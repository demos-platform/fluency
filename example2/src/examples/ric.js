import React, { useEffect } from 'react';

// requestIdleCallback
function RIC() {
  useEffect(() => {
    const id = setInterval(() => {
      window.requestIdleCallback((deadline) => {
        // const start = performance.now()
        while (deadline.timeRemaining()) {
          // while (performance.now() - start < 1000) {
            console.log("执行阻塞任务1")
          // }
        }
        console.log("done!")
      })
    }, 5000)
    return () => clearInterval(id)
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  )
}

export default RIC
