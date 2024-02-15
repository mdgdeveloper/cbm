interface Service {
  id: number;
  name: string;
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

export const services: Service[] = [
  {
    "id": 1,
    "name": "Corte de pelo",
    "description": "Servicio de corte de cabello para hombres y mujeres.",
    "icon": "fa-scissors",
    "link": "/corte-de-pelo"
  },
  {
    "id": 2,
    "name": "Coloración",
    "description": "Aplicación de tintes y coloración para el cabello.",
    "icon": "fa-paint-brush",
    "link": "/coloracion"
  },
  {
    "id": 3,
    "name": "Manicura y pedicura",
    "description": "Tratamientos para uñas de manos y pies.",
    "icon": "fa-hand-rock",
    "link": "/manicura-pedicura"
  },
  {
    "id": 4,
    "name": "Maquillaje",
    "description": "Servicio de maquillaje para eventos y ocasiones especiales.",
    "icon": "fa-makeup-brush",
    "link": "/maquillaje"
  },
  {
    "id": 5,
    "name": "Tratamientos capilares",
    "description": "Tratamientos para mejorar la salud y apariencia del cabello.",
    "icon": "fa-flask",
    "link": "/tratamientos-capilares"
  }
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

