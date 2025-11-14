import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { MyConfigService } from './myconfig.service';

//export interface ConfigModuleOptions {}  // Nothing for now

@Module({})
export class MyConfigModule {
    static register(): DynamicModule {
      
      if(!process.env.DB_LESS || process.env.DB_LESS == "no"){ 
        return {  
          imports: [
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: process.env.DB_HOST,
              port: parseInt(process.env.DB_PORT),
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_DATABASE,
              //entities: [User], 
              autoLoadEntities: true,
              synchronize: true,
            }),
            UsersModule,  
          ],        
          module: MyConfigModule,
          providers: [       
            MyConfigService,
          ],
          exports: [MyConfigService],
        };
      }
      else {
        console.log('Without DB');  
        return {          
          module: MyConfigModule,
          providers: [       
            MyConfigService,
          ],
          exports: [MyConfigService],
        };
      }      
    }
  }
