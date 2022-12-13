import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Josh',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Karren',
      email: 'user@exmaple.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Chocolate Cake:',
      slug: 'chocolate-cake',
      category: 'Chocolate',
      image: '/images/chocolate-cake.png',
      price: 15,
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A irresistible choccie cake',
    },
    {
      name: 'Victoria Sponge',
      slug: 'victoria-sponge',
      category: 'Victoria Sponge',
      image: '/images/vickie-sponge.png',
      price: 15,
      rating: 4.6,
      numReviews: 9,
      countInStock: 20,
      description: 'A classic with a mouth watering jammy center',
    },
    {
      name: 'Chocolate Whirl',
      slug: 'chocolate-whirl',
      category: 'Chocolate',
      image: '/images/choc-whirl-cake.png',
      price: 15,
      rating: 4.5,
      numReviews: 9,
      countInStock: 20,
      description:
        'Ozzing all things chocolate with a creamy white chocolate filling, topped with chocolate whirls',
    },
    {
      name: 'Childrens Cake',
      slug: 'childrens-cake',
      category: 'Childrens',
      image: '/images/kids-pink-cake.png',
      price: 13,
      rating: 4.7,
      numReviews: 9,
      countInStock: 20,
      description: 'This cake is perfect for any childrens celebration',
    },
    {
      name: 'Christmas Cake',
      slug: 'chrsitmas-cake',
      category: 'Chirstmas',
      image: '/images/christmas-cake.png',
      price: 16,
      rating: 4.9,
      numReviews: 9,
      countInStock: 20,
      description:
        'Start your festive celebrations with this chunky christmas cake made to your liking',
    },
    {
      name: 'Celebration Cake',
      slug: 'celebration-cake',
      category: 'Celebration',
      image: '/images/happybirthday-cake.png',
      price: 15,
      rating: 4.6,
      numReviews: 9,
      countInStock: 20,
      description:
        'Share the Happy Birthday vibes with this cake for all, included custom message',
    },
  ],
};

export default data;
