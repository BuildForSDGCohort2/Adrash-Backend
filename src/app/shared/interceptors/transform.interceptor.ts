import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { isArray } from 'util';

export interface Response<T> {
  path: string;
  parameters: any;
  statusCode: number;
  message: string;
  results: number;
  paging?: {current: number; total: number;};
  data?: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) => ({
          path: context.switchToHttp().getRequest().route.path,
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: data.message,
          results: !!data.result ? (isArray(data.result) ? data.result.length : 1) : 0,
          parameters: context.switchToHttp().getRequest().query,
          data: data.result,
        })),
      );
  }
}
