console.groupCollapsed('ASYNC AWAIT');

async function main() {
  const myAsyncFunction = async () => {
    console.log("Function called", new Date())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("1 second later", new Date())
        resolve()
      }, 1000)
    })
  }
  
  const myPromise = await myAsyncFunction()
  console.log("Promise resolved!")
  console.groupEnd();
}

main()

console.log("File end")
