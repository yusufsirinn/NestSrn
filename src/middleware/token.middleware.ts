
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import environment from 'src/tools/environment/environment';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization;
        if (req.baseUrl !== '/api/login') {
            if (!token) {
                next();
                throw new HttpException(
                    'Jwt could not found',
                    HttpStatus.FORBIDDEN
                );
            } else {
                try {
                    const user = jwt.verify(token.slice(7, token.length), environment.tokenText);
                    if (user) {
                        req['user'] = user;

                        next();
                    } else {
                        throw new HttpException(
                            'something went wrong',
                            HttpStatus.GATEWAY_TIMEOUT
                        );
                    }
                }
                catch (e) {
                    throw new HttpException(
                        e,
                        HttpStatus.UNAUTHORIZED
                    );
                }
            }
        } else {

            next();
            return;
        }
    }
}
