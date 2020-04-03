const cursos = [
  {
    id: 1,
    titulo: 'GrapghQL desde cero',
    imagenCurso: 'https://res.cloudinary.com/edteam/image/upload/v1582956135/GraphQL_desde_cero-v09.png',
    precio: '128.000 COP',
    profesor: 'Josh Ospina Tafur',
    imagenProfesor: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-10/josh.png'
  },
  {
    id: 2,
    titulo: 'Marketing para emprendedores',
    imagenCurso: 'https://res.cloudinary.com/edteam/image/upload/v1582838433/marketing_para_emprendedores-v10.png',
    precio: '160.000 COP',
    profesor: 'Alvaro Felipe',
    imagenProfesor: 'https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg'
  },
  {
    id: 3,
    titulo: 'Bases de Datos con Postgresql',
    imagenCurso: 'https://res.cloudinary.com/edteam/image/upload/v1583002082/Postgresql-v03.png',
    precio: '104.000 COP',
    profesor: 'Alexys Lozada',
    imagenProfesor: 'https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg'
  },
  {
    id: 4,
    titulo: 'Desarollo Personal',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-01/desarrollo_personal-v015.png',
    precio: '128.000 COP',
    profesor: 'Alvaro Felipe',
    imagenProfesor: 'https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg'
  },
  {
    id: 5,
    titulo: 'Business Intelligence',
    imagenCurso: 'https://res.cloudinary.com/edteam/image/upload/w_400/v1573259688/courses/bi-poster.png',
    precio: '80.000 COP',
    profesor: 'Hazbleydi Varástegui',
    imagenProfesor: 'https://drupal.ed.team/sites/default/files/styles/thumbnail/public/imagenes-cdn-edteam/2019-11/haz.jpg'
  },
  {
    id: 6,
    titulo: 'Vue.js desde cero',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png',
    precio: '144.000 COP',
    profesor: 'Cristhian Daza',
    imagenProfesor: '/cris.jpg'
  },
  {
    id: 7,
    titulo: 'Programación Reactiva con RxJS',
    imagenCurso: 'https://res.cloudinary.com/edteam/image/upload/v1581437964/rxjs-poster-_v3.png',
    precio: '144.000 COP',
    profesor: 'Cristhian Daza',
    imagenProfesor: '/cris.jpg'
  },
  {
    id: 8,
    titulo: 'Angular Material',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular-material.png',
    precio: '64.000 COP',
    profesor: 'Luis Aviles',
    imagenProfesor: 'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/pictures/2017-10/luis-aviles.jpg?itok=haXRY95-'
  },
  {
    id: 9,
    titulo: 'Angular desde cero',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png',
    precio: '128.000 COP',
    profesor: 'Luis Aviles',
    imagenProfesor: 'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/pictures/2017-10/luis-aviles.jpg?itok=haXRY95-'
  },
  {
    id: 10,
    titulo: 'Firebase para la web',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-web.png',
    precio: '40.000 COP',
    profesor: 'Juan Guillermo Gomez',
    imagenProfesor: 'https://api.ed.team/files/avatars/b24584ff-5e99-4aac-bb63-064f3ac50c3e.jpg'
  },
  {
    id: 11,
    titulo: 'Go desde cero',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png',
    precio: '92.000 COP',
    profesor: 'Cristhian Daza',
    imagenProfesor: '/cris.jpg'
  },
  {
    id: 12,
    titulo: 'Adobe Audition desde cero',
    imagenCurso: 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AuditionDesdeCero.png',
    precio: '52.000 COP',
    profesor: 'Camilo Adobe',
    imagenProfesor: 'https://api.ed.team/files/avatars/5b92c077-8cfb-4290-919b-9e05f1dbb672.png'
  },
  {
    id: 13,
    titulo: 'Trabajo remoto',
    imagenCurso: 'https://res.cloudinary.com/edteam/image/upload/v1584752410/courses/image_38.png',
    precio: '64.000 COP',
    profesor: 'Beto Quiroga',
    imagenProfesor: 'https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg'
  },
  {
    id: 14,
    titulo: "React desde Cero", 
    imagenCurso: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    precio: "75.000 COP",
    profesor: "Alvaro Felipe",
    imagenProfesor: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
  },
  {
    id: 15,
    titulo: "React - Manejo del estado de la aplicación",
    imagenCurso: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    precio: "100.000 COP",
    profesor: "Alexys Lozada",
    imagenProfesor: "https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
  },
  {
    id: 16,
    titulo:"Plataforma de educación online con React.js", 
    imagenCurso:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20plataforma%20de%20cursos.png" ,
    precio:"350.000 COP",
    profesor:"Cristhian Daza",
    imagenProfesor:"/cris.jpg"
  },
  {
    id: 17,
    titulo:"Desarrollo móvil con Flutter", 
    imagenCurso:"https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2018-12/Especialidad%20Flutter.png?itok=UI81EQMx" ,
    precio:"154.000 COP",
    profesor:"Hansy Schmitt",
    imagenProfesor:"https://api.ed.team/files/avatars/2bcf0198-504f-45fd-8d69-81528fbed53d.png"
  },
  {
    id: 18,
    titulo:"Programador Backend en PHP", 
    imagenCurso:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/Especialidad%20PHP.jpg" ,
    precio:"254.000 COP",
    profesor:"Yesi Days",
    imagenProfesor:"https://api.ed.team/files/avatars/77b7035b-3025-408c-aea0-22f6386c428e.jpg"
  },
  {},
  {},
  {},
]

export default cursos