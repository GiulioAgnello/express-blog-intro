const posts = () => {
  const posts = [
    {
      titolo: "Ciambellone",
      contenuto: "ciambellone cioccolato",
      immagine: "/img/ciambellone.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "craker",
      contenuto: "cracker barbabietola",
      immagine: "/img/cracker_barbabietola.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "pane fritto",
      contenuto: "pane fritto dolce",
      immagine: "/img/pane_fritto_dolce.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "pasta",
      contenuto: "pasta con barbabietola",
      immagine: "/img/pasta_barbabietola.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "torta",
      contenuto: "torta paesana",
      immagine: "/img/torta_paesana.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
  ];
  return posts;
};

module.exports = { posts };
