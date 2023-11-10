import { MigrationInterface, QueryRunner } from "typeorm";

export class statusRelation1679057872649 implements MigrationInterface {
    name = 'statusRelation1679057872649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` enum ('active', 'fraud', 'successful') NOT NULL DEFAULT 'active'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
    }

}
