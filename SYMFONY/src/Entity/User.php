<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];


    #[ORM\Column]
    private ?int $nb_victoires_user = 0;

    #[ORM\Column]
    private ?int $nb_defaites_user = 0;

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

    #[ORM\Column(type: 'boolean')]
    private $isVerified = false;

    public function getnb_victoires_user(): ?int
    {
        return $this->nb_victoires_user;
    }
    public function setnb_victoires_user(int $nb_victoires_user): self
    {
        $this->nb_victoires_user = $nb_victoires_user;

        return $this;
    }

    public function getnb_defaites_user(): ?int
    {
        return $this->nb_defaites_user;
    }

    public function setnb_defaites_user(int $nb_defaites_user): self
    {
        $this->nb_defaites_user = $nb_defaites_user;

        return $this;
    }

    public function getDateCreaCompteUser(): ?string
    {
        return $this->date_crea_compte_user;
    }

    public function setDateCreaCompteUser(string $date_crea_compte_user): self
    {
        $this->date_crea_compte_user = $date_crea_compte_user;

        return $this;
    }

    public function getDateNaissanceUser(): ?string
    {
        return $this->date_naissance_user;
    }

    public function setDateNaissanceUser(string $date_naissance_user): self
    {
        $this->date_naissance_user = $date_naissance_user;

        return $this;
    }

    public function getNbPartiesUser(): ?string
    {
        return $this->nb_parties_user;
    }

    public function setNbPartiesUser(string $nb_parties_user): self
    {
        $this->nb_parties_user = $nb_parties_user;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
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

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }
}
