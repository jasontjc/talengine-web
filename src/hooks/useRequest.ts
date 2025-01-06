import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type Method
} from 'axios'

type BizResSchema<T> = {
  code: number
  data: T
  msg: string
  // error: string
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: 'http://192.168.20.170:9876',

  timeout: 30 * 60 * 1000 // 30分钟
})

const useRequest = <PayloadType, ResultType>(
  url: string,
  method: Method
): ((payload?: PayloadType) => Promise<ResultType>) => {
  const load = (payload?: PayloadType): Promise<ResultType> => {
    return new Promise(async (resolve, reject): Promise<void> => {
      const token = localStorage.getItem('token')
      const options: AxiosRequestConfig = {
        url: `${url.replace(
          /:([a-zA-Z0-9_]+)/g,
          // @ts-ignore
          (_, key: keyof PayloadType) => {
            if (payload) {
              const value = payload[key as keyof PayloadType]

              delete payload[key as keyof PayloadType]

              return value
            }

            return ''
          }
        )}`,
        method
      }
      const headers: Record<string, string> = {
        Authorization: token || ''
        // versionNumber: APP_VERSION
      }

      if (['GET', 'DELETE'].includes(method)) {
        options['params'] = payload
      } else {
        options['data'] = payload
      }

      if (!(payload instanceof FormData)) {
        headers['Content-Type'] = 'application/json'
      }

      options['headers'] = headers

      console.info(
        '[' + url + '|' + method + '|' + new Date() + '|request]' + ':',
        typeof options === 'string' ? options : JSON.stringify(options)
      )

      axiosInstance(options)
        .then(
          async (
            res: AxiosResponse<BizResSchema<ResultType>>
          ): Promise<void> => {
            console.info(
              '|' + url + '|' + method + '|' + new Date() + '|resp|' + ':',
              JSON.stringify(res)
            )

            if (res.data.code === 200) {
              // console.info(
              //   '|' + url + '|' + method + '|' + new Date() + '|data|' + ':',
              //   typeof res.data === 'string'
              //     ? res.data
              //     : JSON.stringify(res.data)
              // )
              resolve(res.data.data)
            } else {
              console.info(
                '|' + url + '|' + method + '|' + new Date() + '|error|' + ':',
                res.data.msg
              )

              // if (res.data.error === '无权限') {
              //   localStorage.removeItem('token')
              // }

              reject(new Error(res.data.msg))
            }
          }
        )
        .catch((err: AxiosError) => {
          console.info(
            '|' + url + '|' + method + '|' + new Date() + '|error|' + ':',
            JSON.stringify(err)
          )

          if (err.message === 'Request failed with status code 500') {
            // showMessage({
            //   message: 'Server Error'
            // })
          }

          reject(err)
        })
        .finally(() => {
          // 请求完成后释放 KeepAwake
        })
    })
  }

  return load
}

export default useRequest
