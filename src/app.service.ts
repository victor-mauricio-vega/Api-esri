import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    if (process.env.NODE_env === "localhost:3000"){
      return "Bienvenido"
    }
    return "en revision"
  }
}
