  // @ts-ignore
  export const sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/",
    timeout: 10000
  })

  // @ts-ignore
  export const timeApi = axios.create({
    baseURL: "http://worldclockapi.com/api/json/est/now",
    timeout: 10000
  })

  