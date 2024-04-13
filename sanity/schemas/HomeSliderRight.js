const HomeRight = {
    name: "SliderRight",
    title: "Slider Right",
    type: "document",
    fields: [
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
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default HomeRight;