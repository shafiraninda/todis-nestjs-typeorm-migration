import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { staffsProvider } from "src/providers/staffs.provider";
import { StaffsController } from "./staffs.controller";
import { StaffService } from "./staffs.service";

@Module({
    imports: [DatabaseModule],
    controllers: [StaffsController],
    providers: [...staffsProvider, StaffService]
})

export class staffsModule {}