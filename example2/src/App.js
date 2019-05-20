import React, {useEffect} from 'react';
// how to make it effect
import WorkerCode from './worker'

function App() {
  // useEffect(() => {
  //   setTimeout(_ => {
  //     const start = performance.now()
  //     while (performance.now() - start < 1000) { }
  //     console.log('done!')
  //   }, 5000)
  // })

  useEffect(() => {
    const testWorker = new Worker(WorkerCode)
    setTimeout(_ => {
      testWorker.postMessage({})
      testWorker.onmessage = function(ev) {
        console.log(ev.data)
      }
    }, 5000)
  })
  return (
    <input type="text" />
  );
}

export default App;
