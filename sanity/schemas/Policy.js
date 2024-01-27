// schemas/blogPost.js
export default {
    name: 'blogPost',
    type: 'document',
    title: 'Blog Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{ type: 'block' }], // Use the 'block' type for rich text content
      },
    ],
  };
  