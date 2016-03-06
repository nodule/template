module.exports = {
  name: "string",
  ns: "template",
  description: "Compile and resolve template strings notation as specified in ES6",
  phrases: {
    active: "Applying template string"
  },
  async: true,
  ports: {
    input: {
      "in": {
        type: "object",
        title: "Input",
        description: "Input values",
        required: true,
        async: true,
        fn: function __IN__(data, x, source, state, input, output, es6_template_strings) {
          var r = function() {
            output({
              out: es6_template_strings(input.template, data)
            })
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      template: {
        type: "string",
        title: "String",
        description: "Template string",
        required: true
      }
    },
    output: {
      out: {
        title: "String",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "es6-template-strings": require('es6-template-strings')
    }
  },
  state: {}
}