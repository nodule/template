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
        fn: {
          args: {
            data: null,
            x: {},
            source: null,
            state: {},
            input: {},
            output: function() {
              [native code]
            },
            front_matter: function extractor(string) {
              string = string || ''

              if (regex.test(string)) return parse(string)
              else return {
                attributes: {},
                body: string
              }
            }
          },
          "return": ["state"],
          name: "__IN__",
          _events: {},
          keys: ["data",
            "x",
            "source",
            "state",
            "input",
            "output",
            "front_matter"
          ],
          ins: {
            data: undefined,
            x: undefined,
            source: undefined,
            state: undefined,
            input: undefined,
            output: undefined,
            front_matter: undefined
          },
          outs: ["state"],
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
          },
          code: "return function __IN__(data,x,source,state,input,output,front_matter) {\nvar r = function() {\noutput( { out: front_matter(data) });\n}.call(this); return {state:state,return:r}; }"
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
      "front-matter": require("front-matter")
    }
  },
  state: {}
}