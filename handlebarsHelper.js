module.exports = {
  name: "handlebarsHelper",
  ns: "template",
  description: "Handlebars Helper",
  phrases: {
    active: "Adding handlebar helper"
  },
  ports: {
    input: {
      name: {
        title: "Helper Name",
        type: "string"
      },
      fn: {
        title: "Helper Function",
        type: "function",
        description: "The Helper function"
      }
    },
    output: {
      handlebars: {
        title: "Handlebars",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      handlebars: require('handlebars')
    }
  },
  fn: function handlebarsHelper(input, $, output, state, done, cb, on, handlebars) {
    var r = function() {
      handlebars.registerHelper($.name, $.fn);
      output.handlebars = $.create(handlebars);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}