<?php

namespace App\Entity;

use App\Repository\IndiceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IndiceRepository::class)]
class Indice
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $mot_indice = null;

    #[ORM\Column(length: 50)]
    private ?string $nbmot_indice = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMotIndice(): ?string
    {
        return $this->mot_indice;
    }

    public function setMotIndice(string $mot_indice): self
    {
        $this->mot_indice = $mot_indice;

        return $this;
    }

    public function getNbmotIndice(): ?string
    {
        return $this->nbmot_indice;
    }

    public function setNbmotIndice(string $nbmot_indice): self
    {
        $this->nbmot_indice = $nbmot_indice;

        return $this;
    }
}
