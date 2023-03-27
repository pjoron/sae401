<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DisplayPartiesController extends AbstractController
{
    #[Route('/display/parties', name: 'app_display_parties')]
    public function index(): Response
    {
        return $this->render('display_parties/index.html.twig', [
            'controller_name' => 'DisplayPartiesController',
        ]);
    }
}
