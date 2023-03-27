<?php

namespace App\Controller;

use App\Entity\Partie;
use App\Entity\Mot;
use App\Repository\MotRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\PartieType;
use Symfony\Component\HttpFoundation\Request;
use function MongoDB\BSON\toJSON;


class PartieController extends AbstractController
{
    #[Route('/partie', name: 'app_partie')]
    public function index(
        Request $request,
        EntityManagerInterface $entityManager,
        MotRepository $motRepository
    ): Response
    {
        $partie = new Partie();

        /* FETCH MOTS --------------------------------------------- */
        $query = $entityManager->createQuery('SELECT mot.fr_mot FROM App\Entity\Mot mot');
        $mots = $query->getResult();
        shuffle($mots);
        $mots = array_slice($mots, 0, 25);

        for ($i = 0; $i < count($mots); $i++) {
            $mots[$i] = $mots[$i]['fr_mot'];
        }

        $cartes = [];
        for ($i = 0 ; $i < count($mots) ; $i++) {
            $cartes[$i]['id'] = $i+1;
            $cartes[$i]['mot'] = $mots[$i];
            $cartes[$i]['etat'] = 'libre';
        }

        /* GRILLE GENERATOR --------------------------------------------- */
        function grilleGen($nbnoires, $nbvertes) {
            /* Cases neutres */
            $grille = [];
            for ($i = 0 ; $i < 25 ; $i++) {
                $grille[$i]['id'] = $i+1;
                $grille[$i]['colo'] = 'neutre';
            }

            /* Cases noires */
            $nombres = range(0, 24);
            shuffle($nombres);
            $noires = array_slice($nombres, 0, $nbnoires);
            for($i = 0 ; $i < $nbnoires ; $i++) {
                $grille[$noires[$i]]['colo'] = 'noir';
            }

            /* Cases vertes */
            $vertes = array_slice($nombres, 3, $nbvertes);
            for ($i = 0 ; $i < $nbvertes ; $i++) {
                $grille[$vertes[$i]]['colo'] = 'vert';
            }

            return $grille;
        }

        $grillej1 = grilleGen(3, 9);
        $grillej2 = grilleGen(3, 9);



        /* FORM INIT + DATA FLUSH --------------------------------------------- */
        $form = $this->createForm(PartieType::class, $partie);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $partie = $partie->setEtatPartie('en attente');
            $partie = $partie->setNbJetonsEnStock(8);
            $partie = $partie->setNbMotsDecouverts(0);
            $partie = $partie->setNbMotsDecouverts(0);
            $partie = $partie->setNbMotsADecouvrir(null);
            $partie = $partie->setQuiInput($this -> getUser() -> getId());
            $partie = $partie->setJ1($this -> getUser() -> getId());
            $partie = $partie->setJ2(null);
            $partie = $partie->setGrilleJ1($grillej1);
            $partie = $partie->setGrilleJ2($grillej2);
            $partie = $partie->setHistorique(null);
            $partie = $partie->setCartes($cartes);
            $partie = $partie->setNomPartie($form->get('nomPartie')->getData());

            $entityManager->persist($partie);
            $entityManager->flush();
            //return $this->redirectToRoute('/displayparties');
        }

        /* RENDER VUE --------------------------- */
        return $this->render('partie/index.html.twig', [
            'mots' => json_encode($cartes),
            'grillej1' => json_encode($grillej1),
            'grillej2' => json_encode($grillej2),
            'form' => $form,
            'controller_name' => 'PartieController',
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void {$resolver->setDefaults(['data_class' => Partie::class]);}
}
