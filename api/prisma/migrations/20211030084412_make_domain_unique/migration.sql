/*
  Warnings:

  - A unique constraint covering the columns `[domain]` on the table `Domain` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Domain_domain_key` ON `Domain`(`domain`);
