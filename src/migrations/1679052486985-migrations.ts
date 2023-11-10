import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1679052486985 implements MigrationInterface {
    name = 'migrations1679052486985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`campaigns\` ADD \`balance\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`campaigns\` DROP COLUMN \`balance\``);
    }

}
