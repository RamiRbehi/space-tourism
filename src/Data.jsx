import moonWebp from "./images/image-moon.webp"
import marsWebp from "./images/image-mars.webp"
import europaWebp from "./images/image-europa.webp"
import titanWebp from "./images/image-titan.webp"
import douglas from "./images/image-douglas-hurley.webp"
import mark from "./images/image-mark-shuttleworth.webp"
import victor from "./images/image-victor-glover.webp"
import anousheh from "./images/image-anousheh-ansari.webp"
import launchVehicle from "./images/image-launch-vehicle-portrait.jpg"
import spaceport from "./images/image-spaceport-portrait.jpg"
import spaceCapsule from "./images/image-space-capsule-portrait.jpg"

export const DestinationInfo = [
    {
        "id": 1,
        "image": moonWebp,  
        "name": "Moon",
        "description": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days",
        "destination": "moon"
    },
    {
        "id": 2,
        "image": marsWebp,
        "name": "Mars",
        "description": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months",
        "destination": "mars"
    },
    {
        "id": 3,
        "image": europaWebp,
        "name": "Europa",
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years",
        "destination": "europa"
    },
    {
        "id": 4,
        "image": titanWebp,
        "name": "Titan",
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "1.6 bil. km",
        "travel": "7 years",
        "destination": "titan"
    },
]

export const crewDetails = [
    {
        "id": 1,
        "role": "Commander",
        "name": "Douglas Hurley",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        "image": douglas
    },
    {
        "id": 2,
        "role": "Mission Specialist",
        "name": "Mark Shuttleworth",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        "image": mark
    },
    {
        "id": 3,
        "role": "Pilot",
        "name": "Victor Glover",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        "image": victor
    },
    {
        "id": 4,
        "role": "Flight Engineer",
        "name": "Anousheh Ansari",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        "image": anousheh
    },
]

export const technologies = [
    {
        "id": 1,
        "name": "Launch vehicle",
        "image": launchVehicle,
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        "id": 2,
        "name": "Spaceport",
        "image": spaceport,
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
    },
    {
        "id": 3,
        "name": "Space capsule",
        "image": spaceCapsule,
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]