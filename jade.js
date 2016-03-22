module.exports = {
  name: "jade",
  ns: "template",
  description: "Jade Template engine",
  env: "server",
  phrases: {
    active: "Compiling jade template"
  },
  ports: {
    input: {
      body: {
        type: "string",
        format: "html",
        title: "Template body",
        description: "The body of the Jade template",
        required: true
      },
      vars: {
        type: "object",
        title: "Input variables",
        description: "the input variables for this template",
        required: true,
        readonly: true
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
      jade: require('jade')
    }
  },
  fn: function jade(input, $, output, state, done, cb, on, jade) {
    var r = function() {
      output = {
        out: $.create(jade.render($.body, $.vars))
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}