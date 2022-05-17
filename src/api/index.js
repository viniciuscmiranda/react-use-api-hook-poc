export function request({
  payload,
  response,
  timeout = 500,
  label = 'fake request',
  shouldReject = false,
  randomReject = 0, // 0.1 = 10% reject chance
} = {}) {
  if (!shouldReject && randomReject) shouldReject = Math.random() < randomReject

  label = label.toUpperCase()
  const title = [`${label}: %cRequesting...`, 'color: gold']

  if (payload || response) {
    console.group(...title)
    if (payload && !response) console.log({ payload })
    else if (response && !payload) console.log({ response })
    else console.log({ payload, response })
    console.groupEnd(...title)
  } else {
    console.log(...title)
  }

  return new Promise((respond, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        console.log(`${label}: %cSomething went wrong!`, 'color: red')
        reject(label)
      } else {
        console.log(`${label}: %cSuccess!`, 'color: lime')
        respond(response)
      }
    }, timeout)
  })
}

export * as auth from './auth'
export * as products from './products'

