import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, EditTaskDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
    constructor(private prisma : PrismaService){}

    GetTask(){
        return this.prisma.task.findMany({});
    }
    async GetTaskbyId(taskId : string){
        const task = await this.prisma.task.findMany({
            where:{
                id : taskId
            }
        });

        if(!task)
        throw new NotFoundException('task with id :'+taskId+' not found !')
    return task
    }
    async GetTaskbyProjet(projetId : string){
        const task = await this.prisma.task.findMany({
            where:{
                projetId : projetId
            }
        });

        if(!task)
        throw new NotFoundException('task with id :'+projetId+' not found !')
    return task
    }
    async createTask(projetId: string , dto : CreateTaskDto){
        const projet = await this.prisma.projet.findFirst({
            where:{
                id : projetId
            }
        });
        if(!projet)
        throw new NotFoundException(`projet with id : ${projetId}  not found !`)
        
        const task = await this.prisma.task.create({
            data:{
                projetId : projet.id,
                ...dto
            }
        });
        return task
    }
    async EditTask(taskId: string , dto : EditTaskDto){
        const task = await this.prisma.task.findFirst({
            where:{
                id : taskId
            }
        });
        if(!task)
        throw new NotFoundException('task with id :'+taskId+' not found !')

        const editedTask = await this.prisma.task.update({
            where:{
                id : task.id
            },
            data:{
                ...dto
            }
        });
        return editedTask
    }
    async DeleteTask(taskId :string){
        const task = await this.prisma.task.findFirst({
            where:{
                id : taskId
            }
        });
        if(!task)
        throw new NotFoundException('task with id :'+taskId+' not found !')
        await this.prisma.task.delete({
            where:{
                id : task.id
            }
        });
        return {"mes" : "task deleted !!!"}
    }
}
