<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerFprx7Ei\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerFprx7Ei/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerFprx7Ei.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerFprx7Ei\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerFprx7Ei\App_KernelDevDebugContainer([
    'container.build_hash' => 'Fprx7Ei',
    'container.build_id' => 'c7651114',
    'container.build_time' => 1678266185,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerFprx7Ei');
