<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230308103932 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD nb_victoires_user VARCHAR(20) NOT NULL, ADD nb_defaites_user VARCHAR(20) NOT NULL, ADD date_crea_compte_user VARCHAR(30) NOT NULL, ADD date_naissance_user VARCHAR(30) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP nb_victoires_user, DROP nb_defaites_user, DROP date_crea_compte_user, DROP date_naissance_user');
    }
}
