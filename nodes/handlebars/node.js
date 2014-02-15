var tpl = handlebars.compile(input.body);
output = {
  out: tpl(input.vars)
}
