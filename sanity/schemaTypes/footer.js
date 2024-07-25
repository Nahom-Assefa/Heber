export default {
  name: 'footerIcons',
  title: 'Footer Social Icons',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Insert Image',
      options: {
        hotspot: true, // Enables the hotspot/crop functionality
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
}