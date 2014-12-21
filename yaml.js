module.exports = {
  name: "yaml",
  ns: "template",
  description: "YAML Parser",
  phrases: {
    active: "Parsing YAML"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        format: "yaml",
        title: "YAML",
        description: "The YAML string",
        required: true
      }
    },
    output: {
      out: {
        title: "Vars",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "js-yaml": require("js-yaml")
    }
  },
  fn: function yaml(input, output, state, done, cb, on, js_yaml) {
    var r = function() {
      output = {
        out: js_yaml.safeLoad(input.in, {
          strict: true
        })
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