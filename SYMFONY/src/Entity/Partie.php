<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PartieRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PartieRepository::class)]
#[ApiResource]
class Partie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $etatPartie = null;

    #[ORM\Column(nullable: true)]
    private ?int $nbJetonsEnStock = null;

    #[ORM\Column(nullable: true)]
    private ?int $nbMotsDecouverts = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motIndice = null;

    #[ORM\Column(nullable: true)]
    private ?int $nbMotsADecouvrir = null;

    #[ORM\Column(nullable: true)]
    private ?int $quiInput = null;

    #[ORM\Column(nullable: true)]
    private ?int $j1 = null;

    #[ORM\Column(nullable: true)]
    private ?int $j2 = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $grilleJ1 = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $grilleJ2 = [];

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $historique = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEtatPartie(): ?string
    {
        return $this->etatPartie;
    }

    public function setEtatPartie(?string $etatPartie): self
    {
        $this->etatPartie = $etatPartie;

        return $this;
    }

    public function getNbJetonsEnStock(): ?int
    {
        return $this->nbJetonsEnStock;
    }

    public function setNbJetonsEnStock(?int $nbJetonsEnStock): self
    {
        $this->nbJetonsEnStock = $nbJetonsEnStock;

        return $this;
    }

    public function getNbMotsDecouverts(): ?int
    {
        return $this->nbMotsDecouverts;
    }

    public function setNbMotsDecouverts(?int $nbMotsDecouverts): self
    {
        $this->nbMotsDecouverts = $nbMotsDecouverts;

        return $this;
    }

    public function getMotIndice(): ?string
    {
        return $this->motIndice;
    }

    public function setMotIndice(?string $motIndice): self
    {
        $this->motIndice = $motIndice;

        return $this;
    }

    public function getNbMotsADecouvrir(): ?int
    {
        return $this->nbMotsADecouvrir;
    }

    public function setNbMotsADecouvrir(?int $nbMotsADecouvrir): self
    {
        $this->nbMotsADecouvrir = $nbMotsADecouvrir;

        return $this;
    }

    public function getQuiInput(): ?int
    {
        return $this->quiInput;
    }

    public function setQuiInput(?int $quiInput): self
    {
        $this->quiInput = $quiInput;

        return $this;
    }

    public function getJ1(): ?int
    {
        return $this->j1;
    }

    public function setJ1(?int $j1): self
    {
        $this->j1 = $j1;

        return $this;
    }

    public function getJ2(): ?int
    {
        return $this->j2;
    }

    public function setJ2(?int $j2): self
    {
        $this->j2 = $j2;

        return $this;
    }

    public function getGrilleJ1(): array
    {
        return $this->grilleJ1;
    }

    public function setGrilleJ1(?array $grilleJ1): self
    {
        $this->grilleJ1 = $grilleJ1;

        return $this;
    }

    public function getGrilleJ2(): array
    {
        return $this->grilleJ2;
    }

    public function setGrilleJ2(?array $grilleJ2): self
    {
        $this->grilleJ2 = $grilleJ2;

        return $this;
    }

    public function getHistorique(): ?string
    {
        return $this->historique;
    }

    public function setHistorique(?string $historique): self
    {
        $this->historique = $historique;

        return $this;
    }
}
