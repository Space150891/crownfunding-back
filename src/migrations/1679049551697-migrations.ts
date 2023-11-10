import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1679049551697 implements MigrationInterface {
  name = 'migrations1679049551697';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`nickname\` varchar(255) NULL, \`amount\` int NOT NULL DEFAULT '0', \`campaignId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`campaigns\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NULL, \`description\` varchar(255) NULL, \`goal\` int NOT NULL DEFAULT '0', \`status\` enum ('active', 'fraud', 'successful') NOT NULL DEFAULT 'active', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_c945d94386c7ae03ddeba31d071\` FOREIGN KEY (\`campaignId\`) REFERENCES \`campaigns\`(\`id\`) ON DELETE SET NULL ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_c945d94386c7ae03ddeba31d071\``,
    );
    await queryRunner.query(`DROP TABLE \`campaigns\``);
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
