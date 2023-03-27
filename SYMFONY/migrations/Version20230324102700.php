<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230324102700 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE partie ADD nb_jetons_en_stock INT DEFAULT NULL, ADD nb_mots_decouverts INT DEFAULT NULL, ADD mot_indice VARCHAR(255) DEFAULT NULL, ADD nb_mots_adecouvrir INT DEFAULT NULL, ADD qui_input INT DEFAULT NULL, ADD j1 INT DEFAULT NULL, ADD j2 INT DEFAULT NULL, ADD grille_j1 LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD grille_j2 LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', DROP tour_joueur_partie, DROP acces_partie, DROP nb_tours_partie, DROP mots_devines_partie, DROP grille_couleurs_partie, DROP j1_partie, DROP j2_partie, CHANGE etat_partie etat_partie VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
        $this->addSql('ALTER TABLE messenger_messages CHANGE delivered_at delivered_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT NOT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE partie ADD tour_joueur_partie VARCHAR(20) NOT NULL, ADD acces_partie VARCHAR(50) NOT NULL, ADD nb_tours_partie VARCHAR(30) NOT NULL, ADD mots_devines_partie VARCHAR(50) NOT NULL, ADD grille_couleurs_partie VARCHAR(50) NOT NULL, ADD j1_partie VARCHAR(30) NOT NULL, ADD j2_partie VARCHAR(30) NOT NULL, DROP nb_jetons_en_stock, DROP nb_mots_decouverts, DROP mot_indice, DROP nb_mots_adecouvrir, DROP qui_input, DROP j1, DROP j2, DROP grille_j1, DROP grille_j2, CHANGE etat_partie etat_partie VARCHAR(30) NOT NULL');
        $this->addSql('ALTER TABLE messenger_messages CHANGE delivered_at delivered_at DATETIME DEFAULT \'NULL\'');
    }
}
