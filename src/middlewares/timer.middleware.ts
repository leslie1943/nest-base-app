import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TimerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const time = new Date();
    const dateVal =
      time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDay();
    console.info('Middleware current time:', dateVal);
    next();
  }
}
