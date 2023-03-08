<?php

namespace App\Entity;

use App\Repository\PartieRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PartieRepository::class)]
class Partie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 20)]
    private ?string $tour_joueur_partie = null;

    #[ORM\Column(length: 30)]
    private ?string $etat_partie = null;

    #[ORM\Column(length: 50)]
    private ?string $acces_partie = null;

    #[ORM\Column(length: 30)]
    private ?string $nb_tours_partie = null;

    #[ORM\Column(length: 50)]
    private ?string $mots_devines_partie = null;

    #[ORM\Column(length: 50)]
    private ?string $grille_couleurs_partie = null;

    #[ORM\Column(length: 30)]
    private ?string $j1_partie = null;

    #[ORM\Column(length: 30)]
    private ?string $j2_partie = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTourJoueurPartie(): ?string
    {
        return $this->tour_joueur_partie;
    }

    public function setTourJoueurPartie(string $tour_joueur_partie): self
    {
        $this->tour_joueur_partie = $tour_joueur_partie;

        return $this;
    }

    public function getEtatPartie(): ?string
    {
        return $this->etat_partie;
    }

    public function setEtatPartie(string $etat_partie): self
    {
        $this->etat_partie = $etat_partie;

        return $this;
    }

    public function getAccesPartie(): ?string
    {
        return $this->acces_partie;
    }

    public function setAccesPartie(string $acces_partie): self
    {
        $this->acces_partie = $acces_partie;

        return $this;
    }

    public function getNbToursPartie(): ?string
    {
        return $this->nb_tours_partie;
    }

    public function setNbToursPartie(string $nb_tours_partie): self
    {
        $this->nb_tours_partie = $nb_tours_partie;

        return $this;
    }

    public function getMotsDevinesPartie(): ?string
    {
        return $this->mots_devines_partie;
    }

    public function setMotsDevinesPartie(string $mots_devines_partie): self
    {
        $this->mots_devines_partie = $mots_devines_partie;

        return $this;
    }

    public function getGrilleCouleursPartie(): ?string
    {
        return $this->grille_couleurs_partie;
    }

    public function setGrilleCouleursPartie(string $grille_couleurs_partie): self
    {
        $this->grille_couleurs_partie = $grille_couleurs_partie;

        return $this;
    }

    public function getJ1Partie(): ?string
    {
        return $this->j1_partie;
    }

    public function setJ1Partie(string $j1_partie): self
    {
        $this->j1_partie = $j1_partie;

        return $this;
    }

    public function getJ2Partie(): ?string
    {
        return $this->j2_partie;
    }

    public function setJ2Partie(string $j2_partie): self
    {
        $this->j2_partie = $j2_partie;

        return $this;
    }
}
