import slugify from 'slugify'

export default function slug(name) {
    return slugify(name, {lower: true}).replace(/[^\w\-]+/g, '') //todo lo que pongamos lo hará a minusculas y pondrá un guion a los espacios y lo que no sea palabra
}