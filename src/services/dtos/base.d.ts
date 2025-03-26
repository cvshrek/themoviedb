interface IBaseResponse<T> {
  status: number,
  data: T,
  message: string
}