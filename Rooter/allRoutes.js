import Route from "./Route.js";


//Définir ici vos routes

export const allRoutes = [

    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/gallerie", "la gallerie", "/Pages/gallerie.html"),
    new Route("/signin", "Conexion", "/Pages/auth/signin.html","/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/Pages/auth/account.html"),
    new Route("/editPassword", "Modifier", "/Pages/auth/editPassword.html"),
    new Route("/Allresa", "reservation", "/Pages/reservation/Allresa.html"),
    new Route("/reserver", "reservation", "/Pages/reservation/reserver.html"),
    
    
];


//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";