import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { CreateProjetDto } from './dto/create.projet.dto';
import { EditProjetDto } from './dto/edit.projet.dto';


@Controller('projet')
export class ProjetController {

    constructor(private ProjetService : ProjetService){}

    @Get()
    GetMenu(){
        return this.ProjetService.GetProjet()
    }

    @Get(':id')
    GetMenubyId(@Param('id') projetId : string){
        return this.ProjetService.GetProjetbyId(projetId)
    }

    @Post()
    CreateMenu( @Body() dto : CreateProjetDto){
        return this.ProjetService.createProjet( dto)
    }

    @Put(':id')
    EditMenu(@Param('id') projetId : string ,  @Body() dto : EditProjetDto){
        return this.ProjetService.editProjet(projetId , dto)
    }
    //@HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    DeleteMenu(@Param('id') projetId : string){
        return this.ProjetService.deleteProjet(projetId)
    }
}
