import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjetDto } from './dto/create.projet.dto';
import { EditProjetDto } from './dto/edit.projet.dto';

@Injectable()
export class ProjetService {
    constructor(private prisma : PrismaService){}
    GetProjet(){
        return this.prisma.projet.findMany({})
    }
    GetProjetbyId(projetId : string){
        return this.prisma.projet.findFirst({
            where:{
                id : projetId
            }
        })
    }

    async createProjet(dto : CreateProjetDto){
        const projet = await this.prisma.projet.create({
            data :{
                ...dto
            }
        })
        return projet
    }

    async editProjet(projetId : string , dto : EditProjetDto){
        const projet = await this.prisma.projet.findFirst({
            where : {
                id : projetId
            }
        })
        if(!projet)
        throw new NotFoundException('projet not found !')
        
        const editProjet  = await this.prisma.projet.update({
            where :{
                id : projet.id
            },
            data : {
                ...dto
            }
        });

        return editProjet
    }

    async deleteProjet(projetId : string){
        const projet = await this.prisma.projet.findFirst({
            where : {
                id : projetId
            }
        })
        if(!projet)
        throw new NotFoundException('projet not found !')

        await this.prisma.projet.delete({
            where :{
                id : projet.id
            }
    
        });
        return {"message" : "projet deleted !"}
    }


}
