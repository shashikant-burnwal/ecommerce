import bcrypt from 'bcryptjs';

const data={

    users: [
        {name:'Basir',
        email:'admin@example.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: true
        },

        {name:'John',
        email:'user@example.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: false
        }
    ],


    products:[
        {

            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpeg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'

        },

        {

            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpeg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 15,
            description: 'high quality product'

        },
        {
   
            name:'Lacoste Free Shirt',
            category:'Shirts',
            image:'/images/p3.jpeg',
            price: 130,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 5,
            numReviews: 17,
            description: 'high quality product'

        },
        {

            name:'Nike Slim Pant',
            category:'Pants',
            image:'/images/p4.jpeg',
            price: 110,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 20,
            description: 'high quality product'

        },
        {

            name:'Puma Slim Fit Shirt',
            category:'Pants',
            image:'/images/p5.jpeg',
            price: 65,
            countInStock: 50,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 18,
            description: 'high quality product'

        },
        {

            name:'Adidas Fit Pant',
            category:'Pants',
            image:'/images/p6.jpeg',
            price: 95,
            countInStock: 32,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 40,
            description: 'high quality product'

        }
    ],
};

export default data;

