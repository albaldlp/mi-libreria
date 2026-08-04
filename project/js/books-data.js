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
    title: "El diario del tejado verde",
    author: "Hana Kurosawa",
    synopsis: "Un gato correo reparte cartas entre los tejados de un pueblo de montaña, y cada carta esconde un secreto que sus vecinos llevan años sin decirse.",
    rating: 4.5,
    x: 85,
    y: 21,
    size: 28,
  },
  {
    id: "mesa-izquierda",
    title: "Té frío, letras calientes",
    author: "Sora Amamiya",
    synopsis: "Una librera insomne descubre que los libros que nadie compra empiezan a reescribirse solos durante la noche, cambiando su final para encontrar lector.",
    rating: 4.8,
    x: 39,
    y: 60,
    size: 30,
  },
  {
    id: "silla-izquierda",
    title: "La chaqueta del abuelo zorro",
    author: "Ren Fujimoto",
    synopsis: "Al heredar la chaqueta de su abuelo, un joven empieza a ver espíritus del bosque sentados en las terrazas de las cafeterías, esperando su turno para hablar.",
    rating: 4.2,
    x: 21,
    y: 65,
    size: 28,
  },
  {
    id: "mesa-derecha",
    title: "Sakura, temporada uno",
    author: "Yui Takamine",
    synopsis: "Cada primavera, un pueblo entero deja de envejecer durante los diez días que florecen los cerezos. Ella es la única que recuerda todas las primaveras anteriores.",
    rating: 4.6,
    x: 72,
    y: 59,
    size: 30,
  },
  {
    id: "silla-derecha",
    title: "Cartas para un tren que no vuelve",
    author: "Kenji Obara",
    synopsis: "Un revisor jubilado sigue escribiendo horarios de trenes que ya no existen, y sus pasajeros imaginarios empiezan a aparecer, uno a uno, en la puerta de su casa.",
    rating: 4.0,
    x: 81,
    y: 63,
    size: 28,
  },
  {
    id: "estanteria",
    title: "El jardín de las macetas parlantes",
    author: "Mio Sakurai",
    synopsis: "En una tienda de plantas, cada maceta guarda la voz de quien la cuidó antes. La nueva aprendiza tendrá que aprender a regar recuerdos, no solo raíces.",
    rating: 4.7,
    x: 64,
    y: 41,
    size: 24,
  },
  {
    id: "macetas-esquina",
    title: "El conejo que contaba lunas",
    author: "Aoi Nishimura",
    synopsis: "Un pequeño conejo de barrio lleva la cuenta de todas las lunas llenas que ha visto pasar, y de todas las personas que le han contado un deseo bajo ellas.",
    rating: 4.9,
    x: 91,
    y: 70,
    size: 24,
  },
];
