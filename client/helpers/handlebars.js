Template.registerHelper('pluralize', function(n, thing){
   return n === 1 ? '1 ' + thing : n + ' ' + thing + 's';
});