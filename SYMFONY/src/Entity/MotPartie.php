<?php

namespace App\Entity;

use App\Repository\MotPartieRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MotPartieRepository::class)]
class MotPartie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $colonne_mot_partie = null;

    #[ORM\Column(length: 50)]
    private ?string $ligne_mot_partie = null;

    #[ORM\Column(length: 50)]
    private ?string $jeton_j1_mot_partie = null;

    #[ORM\Column(length: 50)]
    private ?string $jeton_j2_mot_partie = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getColonneMotPartie(): ?string
    {
        return $this->colonne_mot_partie;
    }

    public function setColonneMotPartie(string $colonne_mot_partie): self
    {
        $this->colonne_mot_partie = $colonne_mot_partie;

        return $this;
    }

    public function getLigneMotPartie(): ?string
    {
        return $this->ligne_mot_partie;
    }

    public function setLigneMotPartie(string $ligne_mot_partie): self
    {
        $this->ligne_mot_partie = $ligne_mot_partie;

        return $this;
    }

    public function getJetonJ1MotPartie(): ?string
    {
        return $this->jeton_j1_mot_partie;
    }

    public function setJetonJ1MotPartie(string $jeton_j1_mot_partie): self
    {
        $this->jeton_j1_mot_partie = $jeton_j1_mot_partie;

        return $this;
    }

    public function getJetonJ2MotPartie(): ?string
    {
        return $this->jeton_j2_mot_partie;
    }

    public function setJetonJ2MotPartie(string $jeton_j2_mot_partie): self
    {
        $this->jeton_j2_mot_partie = $jeton_j2_mot_partie;

        return $this;
    }
}
