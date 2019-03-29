const conn = new Mongo();
const db = conn.getDB("shootizy");

db.htmlContents.insert([
  {
    contentId: "home-key-prices",
    page: "home",
    items: [
      {
        qty: 45,
        unit: "min",
        of: "de Shooting",
        html: "Shooting photo en studio <br>avec un pro : <strong>0€</strong>",
      },
      {
        qty: 150,
        unit: "€",
        of: "le Pack",
        html: "Jusqu'à 150 photos, <br><strong>soit 1€ la photo</strong>",
      },
      {
        qty: 20,
        unit: "€",
        of: "la photo",
        html: "<strong>un prix à l'unité</strong><br>Pour les petites envies",
      },
    ],
  },
  {
    contentId: "home-detail-prices",
    page: "home",
    items: [
      {
        icon: "star",
        title: "Shooting de 45 min = 0 €",
        text:
          "Oui, zéro euro \u{1F601}<br>Mais nous sommes sûrs que vous choisirez au moins une photo...",
      },
      {
        icon: "star",
        title: "Pack de 150 photos = 150 €,<br> soit 1 € la photo",
        text: "Rearement un billet de vingt vous aura fait <strong>autant de bien ;-)</strong>",
      },
      {
        icon: "star",
        title: "Le temps de choisir = 0 €",
        text:
          "Sitôt votre séance terminée, découvrez vos photos.<br><br>Prenez votre temps, <strong>Aucune obligation d'achat. Payez seulement les images qui vous plaisent.",
      },
    ],
  },
]);

// Create index for fast search
db.htmlContents.createIndex({ contentId: 1, page: 1 });