import { createServer, Factory, Model } from 'miragejs';
import faker from '@faker-js/faker';
export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    models: {
      blogPost: Model,
    },

    factories: {
      blogPost: Factory.extend({
        title() {
          return faker.address.city();
        },
        content() {
          return faker.lorem.paragraph();
        },
      }),
    },

    seeds(server) {
      server.createList('blogPost', 10);
    },

    routes() {
      this.namespace = 'api';

      this.get('/blog-posts');
      this.get('/blog-posts/:id');

    this.del('/blog-posts/:id');
      //   this.patch('/blog-posts/:id');
    },
  });
}
