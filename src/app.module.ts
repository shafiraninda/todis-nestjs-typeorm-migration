import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { staffsModule } from './staffs/staffs.module';
import { tasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    staffsModule,
    tasksModule,
    RouterModule.register([
      {
        path: 'karyawan',
        module: staffsModule,
      },
      {
        path: 'tugas',
        module: tasksModule
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
