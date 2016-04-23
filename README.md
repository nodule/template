Chiχ Template Engines
=====================

[![Build Status](https://travis-ci.org/nodule/template.png)](https://travis-ci.org/nodule/template)

## Example test setup

```
DEBUG=fbpx:* fbpx-proxy --runtime ws://localhost:4000 --verbose --port 3569 --conductor sanitize
DEBUG=* fbpx-server -L debug --loader remote --port 4000 --compat
DEBUG=* fbp-spec --address ws://localhost:3569 ./nodes/*/test.yaml
```
