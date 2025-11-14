import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MyConfigModule } from './config/myconfig.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      //ignoreEnvFile: false,
      //envFilePath: ['.config.env'],
    }),        
    MyConfigModule.register(),     
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})

export class AppModule {
  //constructor(private dataSource: DataSource) {}   
}
//console.log(process.env.DB_HOST); 
//console.log(process.env.YARN_VERSION);