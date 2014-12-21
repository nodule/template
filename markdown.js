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
            marked: function marked(src, opt, callback) {
              if (callback || typeof opt === 'function') {
                if (!callback) {
                  callback = opt;
                  opt = null;
                }

                opt = merge({}, marked.defaults, opt || {});

                var highlight = opt.highlight,
                  tokens, pending, i = 0;

                try {
                  tokens = Lexer.lex(src, opt)
                } catch (e) {
                  return callback(e);
                }

                pending = tokens.length;

                var done = function() {
                  var out, err;

                  try {
                    out = Parser.parse(tokens, opt);
                  } catch (e) {
                    err = e;
                  }

                  opt.highlight = highlight;

                  return err ? callback(err) : callback(null, out);
                };

                if (!highlight || highlight.length < 3) {
                  return done();
                }

                delete opt.highlight;

                if (!pending) return done();

                for (; i < tokens.length; i++) {
                  (function(token) {
                    if (token.type !== 'code') {
                      return --pending || done();
                    }
                    return highlight(token.text, token.lang, function(err, code) {
                      if (code == null || code === token.text) {
                        return --pending || done();
                      }
                      token.text = code;
                      token.escaped = true;
                      --pending || done();
                    });
                  })(tokens[i]);
                }

                return;
              }
              try {
                if (opt) opt = merge({}, marked.defaults, opt);
                return Parser.parse(Lexer.lex(src, opt), opt);
              } catch (e) {
                e.message += '\nPlease report this to https://github.com/chjj/marked.';
                if ((opt || marked.defaults).silent) {
                  return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
                }
                throw e;
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
            "marked"
          ],
          ins: {
            data: undefined,
            x: undefined,
            source: undefined,
            state: undefined,
            input: undefined,
            output: undefined,
            marked: undefined
          },
          outs: ["state"],
          fn: function __IN__(data, x, source, state, input, output, marked) {
            var r = function() {
              output({
                out: marked(data)
              });
            }.call(this);
            return {
              state: state,
              return: r
            };
          },
          code: "return function __IN__(data,x,source,state,input,output,marked) {\nvar r = function() {\noutput( { out: marked(data) });\n}.call(this); return {state:state,return:r}; }"
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
      marked: require("marked")
    }
  },
  state: {}
}