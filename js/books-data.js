/**
 * ============================================================
 *  DATOS DE LOS LIBROS ESCONDIDOS
 * ============================================================
 * Edita esta lista con tus propios libros. Cada libro necesita:
 *
 *  id        -> identificador único (texto, sin espacios)
 *  title     -> título del libro
 *  author    -> autor/a (puedes dejarlo vacío: "")
 *  synopsis  -> sinopsis corta
 *  rating    -> puntuación de 0 a 5 (admite decimales, ej. 4.5)
 *  x, y      -> posición del libro sobre la escena, en PORCENTAJE
 *               (0 = borde izquierdo/superior, 100 = borde derecho/inferior)
 *  size      -> tamaño del icono en píxeles (opcional, por defecto 34)
 *
 * Para reubicar un libro, simplemente cambia sus valores de x / y
 * y recarga la página en el navegador para ver dónde cae.
 * ============================================================
 */

const BOOKS = [
  {
    id: "tejado",
    title: "La mala costumbre",
    author: "Alana S. Portero",
    synopsis: "Narra desde una perspectiva íntima y cruda, el proceso de autodescubrimiento y supervivencia de una niña trans que crece durante los años ochenta y noventa en un barrio obrero de Madrid.",
    rating: 4.5,
    x: 85,
    y: 21,
    size: 28,
  },
  {
    id: "mesa-izquierda",
    title: "La verdad sobre el caso Harry Quebert",
    author: "Joël Dicker",
    synopsis: "Adictivo thriller en el que un joven escritor investiga la misteriosa desaparición de una adolescente ocurrida treinta años atrás para intentar demostrar la inocencia de su mentor y principal sospechoso.",
    rating: 3,
    x: 39,
    y: 60,
    size: 30,
  },
  {
    id: "silla-izquierda",
    title: "El descontento",
    author: "Beatriz Serrano",
    synopsis: "Explora, a través del humor negro y la apatía, la crisis existencial de una mujer treintañera que intenta sobrevivir al absurdo, la alienación y el vacío del mundo laboral y corporativo moderno.",
    rating: 4,
    x: 21,
    y: 65,
    size: 28,
  },
  {
    id: "mesa-derecha",
    title: "Conversaciones entre amigos",
    author: "Sally Rooney",
    synopsis: "Retrata el enredo emocional y los dilemas de madurez de dos estudiantes universitarias al involucrarse sentimentalmente con un matrimonio mayor y adinerado.",
    rating: 2.5,
    x: 72,
    y: 59,
    size: 30,
  },
  {
    id: "silla-derecha",
    title: "Todo va a mejorar",
    author: "Almudena Grandes",
    synopsis: "Distopía política en la que, tras una sucesión de pandemias, un nuevo partido autoritario toma el poder en España bajo la promesa de seguridad, desmantelando las libertades individuales en nombre del bienestar general.",
    rating: 4.5,
    x: 81,
    y: 63,
    size: 28,
  },
  {
    id: "estanteria",
    title: "Alas de ónix",
    author: "Rebecca Yarros",
    synopsis: "Continúa el despiadado entrenamiento de Violet Sorrengail en el colegio militar, donde deberá superar pruebas físicas mortales y enfrentarse a conspiraciones políticas mientras su vínculo con los dragones y su amor por Xaden se ponen a prueba.",
    rating: 1.5,
    x: 64,
    y: 41,
    size: 24,
  },
  {
    id: "macetas-esquina",
    title: "El imperio final",
    author: "Brandon Sanderson",
    synopsis: "En un mundo cubierto de ceniza y gobernado por el tiránico Señor Legislador, una joven huérfana de la calle descubre que posee un extraordinario poder mágico y se une a una banda de rebeldes para intentar lo imposible: derrocar a un dios inmortal.",
    rating: 4.5,
    x: 91,
    y: 70,
    size: 24,
  },
];
