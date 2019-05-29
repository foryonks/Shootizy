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
    articleId: "1",
    title: "La photo argentique fait son retour",
    image: "/assets/photos/blog1.jpg",
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
    date: new Date(),
    categoryId: "1",
    slug: "photo-truc",
  },
  {
    articleId: "2",
    title: "L'éclairage la base de la photographie",
    image: "/assets/photos/blog2.jpg",
    text: `
      <p>foo bar bizzzzz</p>

      <blockquote><p>Wotch a kofee avec ton bibalaekaess le comptoir.</p></blockquote>

      <p>Tu restes pour le lotto-owe ce soir, y'a baecke`,
    author: "medy",
    date: new Date(),
    categoryId: "1",
    slug: "shootizy-the-site",
  },
  {
    articleId: "3",
    title: "ouverture exceptionnelle",
    image: "/assets/photos/blog2.jpg",
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
    date: new Date(),
    categoryId: "2",
    slug: "ouverture-exceptionnelle",
  },
  ,
  {
    articleId: "4",
    title: "encore un article",
    image: "/assets/photos/blog1.jpg",
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
    date: new Date(),
    categoryId: "2",
    slug: "encore-un-article",
  },
]);
// Create index for fast search
db.blog.articles.createIndex({ articleId: 1 }, { unique: true });
