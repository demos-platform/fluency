import React, { useEffect } from 'react';

// 阻塞情景
function Common() {
  useEffect(() => {
    const id = setInterval(() => {
      const start = performance.now()
      while (performance.now() - start < 1000) { console.log('执行阻塞任务') }
      console.log('done!')
    }, 5000)
    return () => clearInterval(id)
  })

  return (
    <div className="center">
      <input type="text" />
    </div>
  )
}

export default Common
