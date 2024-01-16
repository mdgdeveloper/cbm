interface Nav {
    id: number;
    name: string;
    icon: string;
    link: string;
}

export const navigation:Nav[] = [
    {
      "id": 1,
      "name": "Inicio",
      "icon": "fa-home",
      "link": "/"
    },
    {
      "id": 2,
      "name": "Servicios",
      "icon": "fa-scissors",
      "link": "/servicios"
    },
    {
      "id": 3,
      "name": "Contacto",
      "icon": "fa-envelope",
      "link": "/contacto"
    },
    {
      "id": 4,
      "name": "Nosotros",
      "icon": "fa-users",
      "link": "/nosotros"
    },
    {
      "id": 5,
      "name": "Reservas",
      "icon": "fa-calendar",
      "link": "/reservas"
    }
]