module.exports = {
  name: "front-matter",
  ns: "template",
  async: true,
  description: "Extract YAML front matter",
  phrases: {
    active: "Extracting front-matter"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "Body",
        format: "markdown",
        description: "The body of this markdown document",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, front_matter) {
          var r = function() {
            output({
              out: front_matter(data)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Output",
        type: "object",
        items: {
          attributes: {
            title: "Attributes",
            type: "object"
          },
          body: {
            title: "Markdown",
            type: "string"
          }
        }
      }
    }
  },
  dependencies: {
    npm: {
      "front-matter": require('front-matter')
    }
  },
  state: {}
}