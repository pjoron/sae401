<?php

namespace App\Entity;

use App\Repository\MotRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MotRepository::class)]
class Mot
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $fr_mot = null;

    #[ORM\Column(length: 50)]
    private ?string $en_mot = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFrMot(): ?string
    {
        return $this->fr_mot;
    }

    public function setFrMot(string $fr_mot): self
    {
        $this->fr_mot = $fr_mot;

        return $this;
    }

    public function getEnMot(): ?string
    {
        return $this->en_mot;
    }

    public function setEnMot(string $en_mot): self
    {
        $this->en_mot = $en_mot;

        return $this;
    }
}
