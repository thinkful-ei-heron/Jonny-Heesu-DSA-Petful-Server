const Queue = require('./utils/queue');
const users = new Queue();
const animals = new Queue();

const dogs = [
    {
        id: 0,
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away',
        adopted: false
    },
    {
        id: 1,
        imageURL: 'https://images.dog.ceo/breeds/poodle-standard/n02113799_6730.jpg',
        imageDescription: 'A smiling poodle with flower.',
        name: 'Hello',
        sex: 'Female',
        age: 6,
        breed: 'Poodle',
        story: 'Owner Passed away',
        adopted: false
    },
    {   
        id: 2,
        imageURL: 'https://images.dog.ceo/breeds/keeshond/n02112350_7038.jpg',
        imageDescription: 'A smiling keeshond on the grasses.',
        name: 'Cute',
        sex: 'Female',
        age: 1,
        breed: 'Keeshond',
        story: 'Owner Passed away',
        adopted: false
    },
    {
        id: 3,
        imageURL: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3253.jpg',
        imageDescription: 'A smiling terrier norfolk next to the grasses with ball.',
        name: 'Doggy',
        sex: 'Male',
        age: 2,
        breed: 'Terrier Norfolk',
        story: 'Owner Passed away',
        adopted: false
    }
];

const cats = [
    {
        id: 0,
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street',
        adopted: false
    },
    {
        id: 1,
        imageURL:'https://cdn2.thecatapi.com/images/e99.jpg',
        imageDescription: 'Orange bengal cat with black stripes and some white lounging on concrete.',
        name: 'Cutey',
        sex: 'Female',
        age: 1,
        breed: 'Burmilla',
        story: 'Thrown on the street',
        adopted: false
    },
    {

        id: 2,
        imageURL:'https://cdn2.thecatapi.com/images/7uITSSyIk.jpg',
        imageDescription: 'Light brown with white color cute cat.',
        name: 'CarFax',
        sex: 'Male',
        age: 3,
        breed: 'Nebelung',
        story: 'Thrown on the street',
        adopted: false
    },
    {
        id: 3,
        imageURL:'https://cdn2.thecatapi.com/images/2gq.jpg',
        imageDescription: 'White color cute small cat.',
        name: 'Air',
        sex: 'Female',
        age: 0.5,
        breed: 'Nebelung',
        story: 'Thrown on the street',
        adopted: false
    },
    {
        id: 4,
        imageURL:'https://cdn2.thecatapi.com/images/-bIqI5S6F.jpg',
        imageDescription: 'White color cute small cat.',
        name: 'Tomato',
        sex: 'Female',
        age: 0.8,
        breed: 'Nebelung',
        story: 'Thrown on the street',
        adopted: true
    }
];

module.exports = {dogs, cats, users, animals};


