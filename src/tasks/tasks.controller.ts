import { Controller, Get, Post, Patch, Put, Delete, Body, Query, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/create-task.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

// en el controlador podemos decir que la ruta precede a todos los métodos http
@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {

  tasksService: TasksService;

  // métodos que se cargan al momento que esté instanciado la clase
  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }

  // métodos de la clase
  @Get()
  @ApiOperation({summary: 'Get all tasks'})
  @ApiResponse({status: 200, description: 'Success'})
  getAllTasks(@Query() query: string): string | string[] {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getOneTask(@Param('id') id: string){
    console.log(id);
    return this.tasksService.getTask(parseInt(id))
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() task: createTaskDto){
    return this.tasksService.creatingTask(task);
  }

  @Patch()
  updatePatchTask(){
    return this.tasksService.updatingPatchTask();
  }

  @Put()
  updateTask(){
    return this.tasksService.updatingTask();
  }

  @Delete()
  deleteTask(){
    return this.tasksService.deletingTask();
  }
}