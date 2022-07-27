import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Staff } from "src/entity/staff.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";

@Injectable()
export class StaffService {
    constructor(
        @Inject('STAFFS_REPOSITORY') 
        private staffsRepository: Repository<Staff>,
    ){}

    async getStaffs(){
        return this.staffsRepository.find()
    }

    async addStaff(staff: Staff): Promise<InsertResult> {
        return this.staffsRepository.insert(staff);
    }

    async findOne(uniqueId: number): Promise<Staff> {
        return this.staffsRepository.findOne({
            where: {
                uniqueId: uniqueId
            }
        });
    }

    async updateStaff(uniqueId: number, staff: Staff): Promise<Staff> {
        const staffToUpdate = await this.findOne(uniqueId);
        if(staffToUpdate === undefined){
            throw new NotFoundException();
        }
        await this.staffsRepository.update(uniqueId, staff);
        return this.findOne(uniqueId)
    }

    async deleteStaff(uniqueId: number): Promise<DeleteResult> {
        const staffToDelete = await this.findOne(uniqueId);
        if(staffToDelete === undefined){
            throw new NotFoundException();
        }
        return await this.staffsRepository.delete(uniqueId);
    }
}