import carseats from "./images/carseats.jpg";
import radio from "./images/radio.jpg";
import floormats from "./images/floormats.jpg";

import headlights from "./images/headlights.jpg";
import taillights from "./images/taillights.jpg";
import tires from "./images/tires.jpg";

import engine from "./images/engine.jpg";
import brakepads from "./images/brakepads.jpg";
import transmission from "./images/transmission.jpg";

export const interiorProducts = [
  { id: 1, title: "Car Seats", image: carseats, price: 199.99, desc: "Comfortable premium seats." },
  { id: 2, title: "Radio", image: radio, price: 129.99, desc: "Touch-screen car radio." },
  { id: 3, title: "Floor Mats", image: floormats, price: 49.99, desc: "Durable waterproof mats." }
];

export const exteriorProducts = [
  { id: 4, title: "Headlights", image: headlights, price: 89.99, desc: "High-brightness headlights." },
  { id: 5, title: "Taillights", image: taillights, price: 79.99, desc: "LED taillights." },
  { id: 6, title: "Tires", image: tires, price: 149.99, desc: "All-season performance tires." }
];

export const mechanicalProducts = [
  { id: 7, title: "Engine", image: engine, price: 2500.00, desc: "High-power performance engine." },
  { id: 8, title: "Brake Pads", image: brakepads, price: 59.99, desc: "Ceramic brake pads." },
  { id: 9, title: "Transmission", image: transmission, price: 1800.00, desc: "Automatic transmission." }
];
