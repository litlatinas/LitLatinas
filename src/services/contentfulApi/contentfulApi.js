var contentful = require('contentful');

//create a client via : https://contentful.github.io/contentful.js/contentful/latest/contentful.html#.createClient
const client = contentful.createClient({
  accessToken: '',
  space: ''
});

client.getEntries()
  .then(function(entries) {
  // log the title for all the entries that have it
    entries.items.forEach(function(entry) {
      if(entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });

export default client;
