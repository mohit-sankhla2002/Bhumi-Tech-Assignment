import iphone from '../assets/iphone.png';
import drone from '../assets/drone.png';
import speaker from '../assets/speaker.png';
import car from '../assets/car.png'

const classifiedProducts = [
    {
        id: 1, 
        name: "Holy Stone HS470 Foldable GPS RC Drone", 
        price: 300.98, 
        img: drone,
        location: "Cape Hadstone",
        urgentSelling: true
    },
    {
        id: 2, 
        name: "Marshall Stockwell II Portable Speaker", 
        price: 300.98, 
        img: speaker,
        location: "Cape Hadstone",
        urgentSelling: false
    },
    {
        id: 3, 
        name: "2020 Ford Mustang GT Fastback", 
        price: 300.98, 
        img: car,
        location: "Cape Hadstone",
        urgentSelling: false
    },
    {
        id: 4, 
        name: "Iphone 11 Pro Max", 
        price: 300.98, 
        img: iphone,
        location: "Cape Hadstone",
        urgentSelling: false
    },
];

export default classifiedProducts;