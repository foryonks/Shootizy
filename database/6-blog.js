db = db.getSiblingDB("shootizy");

db.blog.categories.insert([
  {
    categoryId: "1",
    name: "Categorie 1",
    slug: "categorie1",
  },
  {
    categoryId: "2",
    name: "Categorie 2",
    slug: "categorie2",
  },
]);

// Create index for fast search
db.blog.categories.createIndex({ categoryId: 1 }, { unique: true });

db.blog.articles.insert([
  {
    _id: ObjectId("0d815e93794dca7b1e789200"),
    title: "La photo argentique fait son retour",
    imageMini: "/assets/photos/blog1.jpg",
    imageLarge: "/assets/photos/blog1.jpg",
    text: `
    <h1>
    Conseil n°1 : Tinder vs L’Amour est dans le pré
    </h1><p><strong>Tinder c'est comme un animal de compagnie, il a besoin d'être compris.
    </strong></p><p><br></p><p>Faisons un parallèle entre Tinder et l'émission l'Amour est dans le pré : 10 personnes comme vous et moi sont exposés à des centaines de milliers de femmes célibataires qui souhaitent trouver l'amour (le cas idéal).
    Eh bien Tinder c'est tout pareil mais en inversé : en tant qu'homme, vous êtes noyé parmi des centaines de milliers d'autres hommes et ... c'est la compétition pour sortir du lot !</p><p><br></p><p><img src="/api/file/assets/25b16490acf31c422a05ef7613d23e66fb182632.png" style="width: 300px;" class="fullsize"></p><p><br></p><p><br></p><p><br></p><h1>Conseil n°2 : Tinder vs encore un titre </h1><p><img src="/api/file/assets/image.png" style="width: 300px;" class="fullsize"></p><p><br></p><p><br></p><h1>Titre de niveau 1</h1><h2><span>Titre de niveau 2</span></h2><h3>Titre de niveau 3</h3><h4>Titre de niveau 4</h4><ul><li>Liste à puce</li><li>Liste à puce</li></ul><p><br></p><p>Test image :&nbsp;</p><p><img src="/api/file/assets/kitty3.jpg" style="width: 449px; height: 300px;" class="fullsize"></p><p>ceci est un test de texte sous l'image</p>`,
    author: "medy",
    date: new Date(2019, 10, 05),
    categoryId: "1",
    slug: "photo-truc",
  },
  {
    _id: ObjectId("0d815e93794dca7b1e789202"),
    title: "L'éclairage la base de la photographie",
    imageMini: "/assets/photos/blog2.jpg",
    imageLarge: "/assets/photos/blog2.jpg",
    text: `
      <p>foo bar bizzzzz</p>

      <blockquote><p>Wotch a kofee avec ton bibalaekaess le comptoir.</p></blockquote>

      <p>Tu restes pour le lotto-owe ce soir, y'a baecke`,
    author: "medy",
    date: new Date(2019, 4, 7),
    categoryId: "1",
    slug: "shootizy-the-site",
  },
  {
    _id: ObjectId("0d815e93794dca7b1e789201"),
    title: "ouverture exceptionnelle",
    imageMini: "/assets/photos/blog2.jpg",
    imageLarge: "/assets/photos/blog2.jpg",
    text: `
      <p>Hopla vous savez que la mamsell Huguette, la miss Miss Dahlias du messti de Bischheim était au <a href="#">Christkindelsmärik</a> en compagnie de Richard Schirmeck (celui qui a un blottkopf), le mari de Chulia Roberstau, qui lui trempait sa Nüdle dans sa Schneck ! Yo dû, Pfourtz ! Ch'espère qu'ils avaient du Kabinetpapier, Gal !</p>

      <blockquote><p>Wotch a kofee avec ton bibalaekaess et ta wurscht ? Yeuh non che suis au réchime, je ne mange plus que des Grumbeere light et che fais de la chym avec Chulien. Tiens, un rottznoz sur le comptoir.</p></blockquote>

      <p>Tu restes pour le lotto-owe ce soir, y'a baeckeoffe ? Yeuh non, merci vielmols mais che dois partir à la Coopé de Truchtersheim acheter des mänele et des rossbolla pour les gamins. Hopla tchao bissame ! Consectetur adipiscing elit</p>

      <ul>
        <li><a href="/">Picon bière</a></li>
        <li><a href="/">Melfor</a></li>
        <li><a href="/">Carola</a></li>
        <li><a href="/">Flammekueche</a></li>
        <li><a href="/">Wurscht</a></li>
      </ul>`,
    author: "medy",
    date: new Date(2018, 7, 3),
    categoryId: "2",
    slug: "ouverture-exceptionnelle",
  },
  {
    _id: ObjectId("0d815e93794dca7b1e789203"),
    title: "encore un article",
    imageMini: "/assets/photos/blog1.jpg",
    imageLarge: "/assets/photos/blog1.jpg",
    text: `
      <p>Hopla vous savez que la mamsell Huguette, la miss Miss Dahlias du messti de Bischheim était au <a href="#">Christkindelsmärik</a> en compagnie de Richard Schirmeck (celui qui a un blottkopf), le mari de Chulia Roberstau, qui lui trempait sa Nüdle dans sa Schneck ! Yo dû, Pfourtz ! Ch'espère qu'ils avaient du Kabinetpapier, Gal !</p>
      <div><strong>ok lol kikoo</strong> eci est klekd kjaj lka djakldj </div>
      <p>Tu restes pour le lotto-owe ce soir, y'a baeckeoffe ? Yeuh non, merci vielmols mais che dois partir à la Coopé de Truchtersheim acheter des mänele et des rossbolla pour les gamins. Hopla tchao bissame ! Consectetur adipiscing elit</p>
      <ul>
        <li><a href="/">Picon bière</a></li>
        <li><a href="/">Melfor</a></li>
        <li><a href="/">Carola</a></li>
        <li><a href="/">Flammekueche</a></li>
        <li><a href="/">Wurscht</a></li>
      </ul>`,
    author: "medy",
    date: new Date(2019, 3, 8, 12, 3, 4),
    categoryId: "2",
    slug: "encore-un-article",
  },
]);

db.blog.comments.insert([
  {
    articleId: "0d815e93794dca7b1e789201",
    author: "Moha",
    comment: "ceci est mon premier commentaire",
    date: new Date(2019, 3, 8, 12, 3, 4),
  },
  {
    articleId: "0d815e93794dca7b1e789201",
    author: "author2",
    comment: "ceci est encore un commentaire",
    date: new Date(2019, 4, 8, 12, 3, 4),
  },
  {
    articleId: "0d815e93794dca7b1e789200",
    author: "author3",
    comment: "ceci est encore un commentaire",
    date: new Date(2019, 3, 8, 12, 3, 4),
  },
  {
    articleId: "0d815e93794dca7b1e789203",
    author: "author3",
    comment: "ceci est encore un commentaire",
    date: new Date(2019, 10, 23, 12, 3, 4),
  },
]);
db.blog.comments.createIndex({}, { unique: true, name: "commentId" });
