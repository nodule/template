var tpl = handlebars.compile(input.body);
output = { html: tpl(input.vars); }
