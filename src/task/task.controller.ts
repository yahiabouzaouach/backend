import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, EditTaskDto } from './dto';

@Controller('task')
export class TaskController {
    constructor(private TaskService : TaskService){}

    @Get()
    GetTask(){
        return this.TaskService.GetTask()
    }

    @Get(':id')
    GetTaskbyId(@Param('id') TaskId : string){
        return this.TaskService.GetTaskbyId(TaskId)
    }
    @Get(':idprojet')
    GetTaskbyProjet(@Param('idprojet') projetId : string){
        return this.TaskService.GetTaskbyProjet(projetId)
    }

    @Post(':id')
    CreateTask(@Param('id') TaskId : string , @Body() dto : CreateTaskDto){
        return this.TaskService.createTask(TaskId, dto)
    }

    @Put(':id')
    EditTask(@Param('id') TaskId : string ,  @Body() dto : EditTaskDto){
        return this.TaskService.EditTask(TaskId , dto)
    }
    //@HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    DeleteTask(@Param('id') TaskId : string){
        return this.TaskService.DeleteTask(TaskId)
    }
}
