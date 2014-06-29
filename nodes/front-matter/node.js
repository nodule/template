on.input.in = function() {
  output( { out: front_matter(data) });

  // really necessary, I would prefer a parameter to output(dat, true);
  // maybe I could also check if the done argument is requested
  // function(done).. ok appearently we want to determine ourselves
  // when we are done.
  done();
};
