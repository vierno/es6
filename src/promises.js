console.groupCollapsed('PROMISES');

const myAsyncFunction = () => {
  console.log("Function called", new Date())
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1 second later", new Date())
      resolve()
    }, 1000)
  })
}

const myPromise = myAsyncFunction()

myPromise.then(() => {
  console.log("Promise resolved!")
  console.groupEnd();
})

console.log("File end")
