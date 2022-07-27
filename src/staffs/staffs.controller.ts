import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Staff } from "src/entity/staff.entity";
import { DeleteResult } from "typeorm";
import { StaffService } from "./staffs.service";

@Controller()
export class StaffsController {
    constructor(private staffsService: StaffService) {}

    @Get()
    getAllStaffs(): Promise<Staff[]> {
        return this.staffsService.getStaffs();
    }

    @Post('create')
    create(@Body() staff:Staff){
        return this.staffsService.addStaff(staff);
    }

    @Get(':id')
    getStaff(@Param('id') id: string ): Promise<Staff>{
        return this.staffsService.findOne(Number(id))
    }
    
    @Put('update/:id')
    editStaff(@Param('id') id:string, @Body() staff:Staff) {
        return this.staffsService.updateStaff(Number(id), staff)
    }

    @Delete('delete/:id')
    delete(@Param('id') id:string): Promise<DeleteResult>{
        return this.staffsService.deleteStaff(Number(id))
    }
}