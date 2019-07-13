function timeSlicing(gen) {
  const iterator = gen()
  if (!iterator || typeof iterator.next !== "function") return

  (function next() {
    const res = iterator.next()
    if (res.done) return
    setTimeout(next)
  })()
}

export default timeSlicing