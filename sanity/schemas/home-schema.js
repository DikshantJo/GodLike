const Home = {
    name: "Home",
    title: "Homepage",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        validation: (Rule) => Rule.required(), // Use a fat arrow here
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
    ]
  }
  
  export default Home;