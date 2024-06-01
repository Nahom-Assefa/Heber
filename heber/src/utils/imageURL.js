// imageUrl.js
import imageUrlBuilder from '@sanity/image-url';
import client from '../api/sanityClient';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
