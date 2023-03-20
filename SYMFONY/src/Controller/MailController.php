<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MailController extends AbstractController
{
    #[Route('/mail', name: 'app_mail')]
    public function index(): Response
    {
        return $this->render('mail/index.html.twig', [
            'controller_name' => 'MailController',
        ]);
    }


    public function sendTestEmail(MailerInterface $mailer): Response
{
    $email = (new Email())
        ->from('joronpaul@gmail.com')
        ->to('joronpaul@gmail.com')
        ->subject('Test Email')
        ->text('This is a test email sent from Symfony.');

    $mailer->send($email);

    return $this->render('mail/index.html.twig', []);
}
}
