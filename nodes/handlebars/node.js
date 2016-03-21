var hb = $.handlebars || handlebars;
var tpl = hb.compile($.body);
output = {
  out: tpl($.vars)
}
