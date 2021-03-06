module.exports = {
  name: "string",
  ns: "template",
  description: "Compile and resolve template strings notation as specified in ES6",
  phrases: {
    active: "Applying template string"
  },
  ports: {
    input: {
      "in": {
        type: "object",
        title: "Input",
        description: "Input values",
        required: true
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
  fn: function string(input, $, output, state, done, cb, on, es6_template_strings) {
    var r = function() {
      output.out = $.write('in', es6_template_strings($.template, $.in))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}