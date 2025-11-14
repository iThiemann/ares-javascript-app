import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string { 
    const text = "Hello World";    
    return text;
  }
}
