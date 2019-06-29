import React, { useEffect } from 'react';
import WorkerCode from '../worker' // web Worker 方案

// web worker 方案
function WebWorker() {
  useEffect(() => {
    const testWorker = new Worker(WorkerCode)
    const id = setInterval(() => {
      testWorker.postMessage({})
      testWorker.onmessage = function(ev) {
        console.log(ev.data)
      }
    }, 2000)
    return () => clearInterval(id)
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  )
}

export default WebWorker
