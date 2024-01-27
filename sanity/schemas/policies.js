const About = {
    name: "Policies",
    title: "Policies",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" }
        ]
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
        description: 'Enter your text here.',
      },
    ]
  }
  
  export default About;