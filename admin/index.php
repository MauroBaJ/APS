<?php
    require('../templates/header.php');
    require('functions/auth.php');

    if(!loggedAdmin()) header('Location: /');

    
