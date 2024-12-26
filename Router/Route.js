export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
    
  }
}

/*
authorize: (pour secu le site )

()--> tout le monde peut y accéder 
(disconnected)--> réserver aux utilisateurs déconnecté
(client)--> réserver aux utilisateurs avec le role client
(admin)--> réserver aux utilisateurs avec le role admin 
(admin,client)--> réserver aux utilisateurs avec le role admin ou client


*/