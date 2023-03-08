<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $pseudo_user = null;

    #[ORM\Column]
    private array $roles = [];


    #[ORM\Column(length: 20)]
    private ?string $nb_victoires_user = null;

    #[ORM\Column(length: 20)]
    private ?string $nb_defaites_user = null;

    #[ORM\Column(length: 30)]
    private ?string $date_crea_compte_user = null;

    #[ORM\Column(length: 30)]
    private ?string $date_naissance_user = null;

    private ?string $nb_parties_user = null;

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    public function getNbVictoiresUser(): ?string
    {
        return $this->nb_victoires_user;
    }

    public function getNbDefaitesUser(): ?string
    {
        return $this->nb_defaites_user;
    }

    public function getDateCreaCompteUser(): ?string
    {
        return $this->date_crea_compte_user;
    }

    public function getDateNaissanceUser(): ?string
    {
        return $this->date_naissance_user;
    }

    public function getNbPartiesUser(): ?string
    {
        return $this->nb_parties_user;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudoUser(): ?string
    {
        return $this->pseudo_user;
    }

    public function setPseudoUser(string $pseudo_user): self
    {
        $this->pseudo_user = $pseudo_user;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->pseudo_user;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}
