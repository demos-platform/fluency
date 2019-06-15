import React, {useEffect} from 'react';
// import WorkerCode from './worker' // web Worker 方案
import timeSlicing from './timeSlicing' // custom time slicing
import './index.css'

function App() {
  // 阻塞情景
  // useEffect(() => {
  //   setInterval(() => {
  //     const start = performance.now()
  //     while (performance.now() - start < 1000) { console.log('执行阻塞任务') }
  //     console.log('done!')
  //   }, 2000)
  // })

  // web worker 方案
  // useEffect(() => {
  //   const testWorker = new Worker(WorkerCode)
  //   setInterval(() => {
  //     testWorker.postMessage({})
  //     testWorker.onmessage = function(ev) {
  //       console.log(ev.data)
  //     }
  //   }, 2000)
  // })

  // requestIdleCallback
  // useEffect(() => {
  //   setInterval(() => {
  //     window.requestIdleCallback((deadline) => {
  //       const start = performance.now()
  //       while (deadline.timeRemaining() && performance.now() - start < 1000) {
  //         console.log("执行阻塞任务")
  //       }
  //       console.log("done!")
  //     })
  //   }, 2000)
  // })

  // custom Time Slicing
  useEffect(() => {
    setInterval(() => {
      timeSlicing(function*() {
        const start = performance.now()
        while (performance.now() - start < 1000) {
          console.log("执行阻塞任务")
          yield
        }
        console.log("done!")
      })
    }, 2000)
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  );
}

export default App
