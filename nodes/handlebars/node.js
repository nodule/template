var hb = input.handlebars || handlebars;
var tpl = hb.compile(input.body);
output = {
  out: tpl(input.vars)
}
