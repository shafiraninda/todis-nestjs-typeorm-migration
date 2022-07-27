import {MigrationInterface, QueryRunner} from "typeorm";

export class TaskStaffMigration1658956300881 implements MigrationInterface {
    name = 'TaskStaffMigration1658956300881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_2431fffb0c6f9ce316729e9117d"`);
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "assigneeUniqueId" TO "assignee_id"`);
        await queryRunner.query(`ALTER TABLE "task" RENAME CONSTRAINT "REL_2431fffb0c6f9ce316729e9117" TO "UQ_75114a0b55080c15694f3d40ec9"`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "assignee_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_75114a0b55080c15694f3d40ec9" FOREIGN KEY ("assignee_id") REFERENCES "staff"("uniqueId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_75114a0b55080c15694f3d40ec9"`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "assignee_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" RENAME CONSTRAINT "UQ_75114a0b55080c15694f3d40ec9" TO "REL_2431fffb0c6f9ce316729e9117"`);
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "assignee_id" TO "assigneeUniqueId"`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_2431fffb0c6f9ce316729e9117d" FOREIGN KEY ("assigneeUniqueId") REFERENCES "staff"("uniqueId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
