// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:0,
      title:'Figurita Octocat',
      price: 100,
      img: 'http://localhost:3000/img/octocat.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:1,
      title:'Gorra',
      price: 200,
      img: 'http://localhost:3000/img/mug.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:2,
      title:'Sudadera Halo',
      price: 300,
      img: 'http://localhost:3000/img/pullover.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:3,
      title:'Introvert T-shirt',
      price: 100,
      img: 'http://localhost:3000/img/tshirt.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:4,
      title:'Introvert 2.0 Coasters',
      price: 100,
      img: 'http://localhost:3000/img/coaster.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:5,
      title:'Glow in the dark Sticker pack',
      price: 100,
      img: 'http://localhost:3000/img/stickers.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:6,
      title:'Adventure Sticker Pack',
      price: 100,
      img: 'http://localhost:3000/img/stickers2.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    },
    {
      id:7,
      title:'Invertocat Pullover Hoodie',
      price: 100,
      img: 'http://localhost:3000/img/tshirtblack.webp',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt praesentium ab facilis '
    }
  ])
}
