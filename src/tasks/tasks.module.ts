import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';

// @Module es un decorador
@Module({
  // controler es la lógica del negocio
  controllers: [TaskController],
  // provider es para los servicios guardados en el controlador
  providers: [TasksService]
})
export class TasksModule {}
