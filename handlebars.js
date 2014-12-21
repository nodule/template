module.exports = {
  name: "handlebars",
  ns: "template",
  description: "Handlebars Template engine",
  phrases: {
    active: "Compiling handlebars template"
  },
  ports: {
    input: {
      body: {
        type: "string",
        format: "html",
        title: "Template body",
        description: "The body of the handlebars template",
        required: true
      },
      vars: {
        type: "object",
        title: "Input variables",
        description: "the input variables for this template",
        "default": {}
      },
      handlebars: {
        type: "function",
        title: "Handlebars",
        "default": null
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
      handlebars: require("handlebars")
    }
  },
  fn: function handlebars(input, output, state, done, cb, on, handlebars) {
    var r = function() {
      var hb = input.handlebars || handlebars;
      var tpl = hb.compile(input.body);
      output = {
        out: tpl(input.vars)
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