interface Service {
  id: number;
  name: string;
  img: string;
  description: string;
  icon: string;
  link: string;
}

interface Social {
  id: number;
  name: string;
  icon: string;
  link: string;
}

export interface Promo {
  id: number;
  title: string;
  img: string;
  link: string;
  description: string;
}

export const services: Service[] = [
  {
    "id": 1,
    "name": "Corte de pelo",
    "description": "Servicio de corte de cabello para hombres y mujeres.",
    "icon": "fa-scissors",
    "img": "services_1.jpg",
    "link": "/corte-de-pelo"
  },
  {
    "id": 2,
    "name": "Coloración",
    "description": "Aplicación de tintes y coloración para el cabello.",
    "img": "services_2.jpg",
    "icon": "fa-paint-brush",
    "link": "/coloracion"
  },
  {
    "id": 3,
    "name": "Maquillaje",
    "description": "Tratamientos de belleza",
    "img": "services_3.jpg",
    "icon": "fa-hand-rock",
    "link": "/maquillaje"
  },
  // {
  //   "id": 4,
  //   "name": "Maquillaje",
  //   "description": "Servicio de maquillaje para eventos y ocasiones especiales.",
  //   "icon": "fa-makeup-brush",
  //   "link": "/maquillaje"
  // },
  // {
  //   "id": 5,
  //   "name": "Tratamientos capilares",
  //   "description": "Tratamientos para mejorar la salud y apariencia del cabello.",
  //   "icon": "fa-flask",
  //   "link": "/tratamientos-capilares"
  // }
]

export const socials: Social[] = [
  {
    "id": 1,
    "name": "Facebook",
    "icon": "fa-facebook-f",
    "link": "https://www.facebook.com"
  },
  {
    "id": 2,
    "name": "Instagram",
    "icon": "fa-instagram",
    "link": "https://www.instagram.com"
  },
  {
    "id": 3,
    "name": "Twitter",
    "icon": "fa-twitter",
    "link": "https://www.twitter.com"
  },
  {
    "id": 4,
    "name": "Youtube",
    "icon": "fa-youtube",
    "link": "https://www.youtube.com"
  }
]

export const info = {
  title: "¡Visita nuestro salón para experimentar el sentido de la belleza y el estilo!",
  content: "Marleny es un salón de peluquería y estética que se esfuerza por crear obras de arte aplicando las últimas tendencias en peinados, diseño y coloración para hombres y mujeres a precios excelentes."
}

export const promos: Promo[] = [
  {
    id: 1,
    title: "Rejuvenece con CBM",
    img: "/src/assets/promos/promo_1.jpg",
    link: "#",
    description: "Obtén un 20% de descuento en tratamientos de piel, incluyendo limpiezas faciales profundas y terapias anti-envejecimiento."
  },
  {
    id: 2,
    title: "Transformación Capilar CBM",
    img: "/src/assets/promos/promo_2.jpg",
    link: "#",
    description: "Obtén un 15% de descuento en tratamientos capilares revitalizantes."
  },
  {
    id: 3,
    title: "CBM Cuerpo y Mente",
    img: "/src/assets/promos/promo_3.jpg",
    link: "#",
    description: "Paquete especial de terapias corporales: sesión de masaje relajante + tratamiento corporal exfoliante con un 25% de descuento."
  },
  {
    id: 4,
    title: "Color y Corte con Estilo CBM",
    img: "/src/assets/promos/promo_4.jpg",
    link: "#",
    description: "Servicio exclusivo de corte y teñido con un 10% de descuento. Personalizamos tu look según las últimas tendencias."
  },
  {
    id: 5,
    title: "Día de Belleza CBM",
    img: "/src/assets/promos/promo_5.jpg",
    link: "#",
    description: "Reserva un paquete completo que incluye tratamiento capilar, facial, corte y teñido con un 30% de descuento."
  },
  {
    id: 6,
    title: "Miércoles de Amigas en CBM",
    img: "/src/assets/promos/promo_6.jpg",
    link: "#",
    description: "Ven con una amiga los miércoles y ambas recibirán un 20% de descuento en cualquier servicio."
  },
]