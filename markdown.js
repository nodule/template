module.exports = {
  name: "markdown",
  ns: "template",
  async: true,
  description: "Markdown",
  phrases: {
    active: "Creating markdown document"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "Body",
        format: "markdown",
        description: "The body of this markdown document",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, marked) {
          var r = function() {
            output({
              out: $.write('in', marked($.in))
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
        title: "HTML",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      marked: require('marked')
    }
  },
  state: {}
}