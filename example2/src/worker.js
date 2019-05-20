const workerCode = () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = function() {
    const start = performance.now()
    while (performance.now() - start < 1000) { }
    postMessage('done!')
  }
}

let code = workerCode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

export default worker_script