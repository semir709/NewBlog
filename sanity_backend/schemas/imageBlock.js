export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Name',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'alternative',
      title: 'Alternative',
      type: 'string',
      description: 'This is important for SEO',
    },
  ],
}
