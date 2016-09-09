# TODO: Npm loading should work, otherwise their will be too much noise from unused components being send
# DEBUG=* fbpx-server -L debug --loader npm --port 4000 --compat
# DEBUG=chix:* fbpx-server -L debug --loader remote --port 4000 --compat
DEBUG=chix:* fbpx-server --loader remote --port 4000 --compat

