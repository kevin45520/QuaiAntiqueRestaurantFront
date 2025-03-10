import Route from "./Route.js";

//Définir ici vos routes

export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/gallerie", "la gallerie", "/Pages/gallerie.html", [] , "/js/gallerie.js"),
    new Route("/signin", "Connexion", "/Pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/Pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Modifier", "/Pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/Allresa", "reservation", "/Pages/reservation/Allresa.html", ["client"]),
    new Route("/reserver", "reservation", "/Pages/reservation/reserver.html", ["client"]),
];


//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";