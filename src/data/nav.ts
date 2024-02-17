interface Nav {
  id: number;
  name: string;
  icon: string;
  link: string;
}

export const navigation: Nav[] = [
  {
    "id": 1,
    "name": "Nosotros",
    "icon": "fa-home",
    "link": "/"
  },
  {
    "id": 2,
    "name": "Servicios",
    "icon": "fa-scissors",
    "link": "#servicios"
  },
  {
    "id": 3,
    "name": "Ofertas",
    "icon": "fa-envelope",
    "link": "/contacto"
  },
  {
    "id": 4,
    "name": "Galería",
    "icon": "fa-users",
    "link": "/nosotros"
  },
  {
    "id": 5,
    "name": "Eventos",
    "icon": "fa-calendar",
    "link": "/reservas"
  },
  {
    "id": 6,
    "name": "Contacto",
    "icon": "fa-calendar",
    "link": "/contacto"
  }
]