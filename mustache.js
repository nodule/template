module.exports = {
  name: "mustache",
  ns: "template",
  description: "Mustache Template engine",
  phrases: {
    active: "Compiling mustache template"
  },
  ports: {
    input: {
      body: {
        type: "string",
        format: "html",
        title: "Template body",
        description: "The body of the mustache template",
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
        title: "String",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      mustache: require("mustache")
    }
  },
  fn: function mustache(input, output, state, done, cb, on, mustache) {
    var r = function() {
      output = {
        out: mustache.render(input.body, input.vars)
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