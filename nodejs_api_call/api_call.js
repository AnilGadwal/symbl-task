var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://random-data-api.com/api/name/random_name?size=20',
'json': true, 
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  response.body.map(user =>{
      console.log("ID:",user.id, "  Name:",user.name)
  })
});