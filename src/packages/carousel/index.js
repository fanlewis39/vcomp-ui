import Carousel from './src/carousel'

Carousel.install = Vue => {
  Vue.component(Carousel.name, Carousel)
}

export default Carousel
