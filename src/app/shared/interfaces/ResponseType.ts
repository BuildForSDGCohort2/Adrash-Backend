export interface CustomResponse<T> {
    message: string;
    result: T | T[];
}