<?php

namespace App\Form;

use App\Entity\Partie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('etatPartie')
            ->add('nbJetonsEnStock')
            ->add('nbMotsDecouverts')
            ->add('motIndice')
            ->add('nbMotsADecouvrir')
            ->add('quiInput')
            ->add('j1')
            ->add('j2')
            ->add('grilleJ1')
            ->add('grilleJ2')
            ->add('historique')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Partie::class,
        ]);
    }
}
