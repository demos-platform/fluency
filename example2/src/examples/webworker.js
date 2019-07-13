import React, { useEffect } from 'react';
import WorkerCode from '../worker' // web Worker 方案

// web worker 方案
function WebWorker() {
  useEffect(() => {
    const worker = new Worker(WorkerCode)
    const id = setInterval(() => {
      worker.postMessage({})
      worker.onmessage = function(ev) {
        console.log(ev.data)
      }
    }, 5000)
    return () => clearInterval(id)
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  )
}

export default WebWorker
