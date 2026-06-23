// HisaabAI — Standard API Response Shape
// Every endpoint returns this. Import and use everywhere.

export class ApiResponse<T> {
  success: boolean
  data: T
  message: string

  constructor(success: boolean, data: T, message = '') {
    this.success = success
    this.data = data
    this.message = message
  }
}

// Helper to quickly create success response
export const ok = <T>(data: T, message = 'Success'): ApiResponse<T> =>
  new ApiResponse(true, data, message)

// Helper to quickly create error response
export const fail = (message: string): ApiResponse<null> =>
  new ApiResponse(false, null, message)
