<?php

namespace App\Controller;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AccountController extends AbstractController
{

    // #[Route('/account', name: 'app_account')]
    // public function show(UserRepository $userRepository): Response
    // {
        
    //     return $this->render('account/index.html.twig');
    // }

    #[Route('/', name: 'app_account')]
    public function index(UserRepository $userRepository): Response
    {
        $user = $this->getUser();
        if(!$user) {
            return $this->redirectToRoute('app_login');
        } else {
            return $this->render('account/index.html.twig', [
                'user' => $user
            ]);
        }
    }






}
