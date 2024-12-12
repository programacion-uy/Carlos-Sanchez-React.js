export default class Curso {
  constructor(id, title, description, price, image, category, additionalImages = [], demoVideo = "") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.additionalImages = additionalImages; // Array de imágenes adicionales
    this.demoVideo = demoVideo; // URL del video demo
  }
}
