import type { Schema, Attribute } from '@strapi/strapi';

export interface HomepageCarousel extends Schema.Component {
  collectionName: 'components_homepage_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    imageslider: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'homepage.carousel': HomepageCarousel;
    }
  }
}
