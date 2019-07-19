import React, { useEffect } from 'react';

// requestIdleCallback
function RIC(tasksTotol) {
  function myWork(deadline) {
    while (deadline.timeRemaining() > 0) {
      console.log("执行阻塞任务")
      tasksTotol--
    }
    while (tasksTotol > 0) {
      requestIdleCallback(myWork)
    }
  }

  useEffect(() => {
    requestIdleCallback(myWork);
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  )
}

export default RIC
