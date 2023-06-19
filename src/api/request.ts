import type { UniAppRequestSuccessCallbackResult } from '@types/uni-app'

export class ApiService {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public async get(url: string, params?: any): Promise<any> {
    const fullUrl = this.baseUrl + url

    try {
      const response = await this.makeRequest(fullUrl, 'GET', params)
      return response.data
    }
    catch (error) {
      throw new Error(error)
    }
  }

  public async post(url: string, data?: any): Promise<any> {
    const fullUrl = this.baseUrl + url

    try {
      const response = await this.makeRequest(fullUrl, 'POST', data)
      return response.data
    }
    catch (error) {
      throw new Error(error)
    }
  }

  private makeRequest(url: string, method: string, data?: any): Promise<UniAppRequestSuccessCallbackResult> {
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        method,
        data,
        success: (res: UniAppRequestSuccessCallbackResult) => {
          resolve(res)
        },
        fail: (err: any) => {
          reject(err)
        },
      })
    })
  }
}
