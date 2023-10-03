// WebServer
    // Import du module http
    // Création du serveur
        // request et response
    // Définition du header
    // Envoi de la réponse http
    // Faire en sorte que le serveur écoute sur un port

// Utilisation de "nodemon"
    // npm init
    // npm nodemon
        // Ajout d'un script strat: 'nodemon nomDuFichier.js' (dans le .json)
        // Pour pouvoir npm run start dans le terminal

// Création du fichier principal qui servira de serveur
    // Import du module (require("http"))
    // Création du serveur (http.createServer(request, response))
        // Création d'une regex qui recup l'id depuis l'url
        // Routing
            // Vérif de l'url
                // Injection d'un html (body)
                // envoi de la réponse (response.end(body))
            // Vérif regex
                // productId = html
                // envoi de la réponse (response.end(productId))
            // Cas invalide
                // envoi de la réponse (response.end('html'))-> ERROR 404
    // Lancement du serveur (server.listen(numServer, ()))
