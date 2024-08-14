export default {
  name: 'CollageImages',
  title: 'Collage Images',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the image editor with cropping and hotspot options
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
};