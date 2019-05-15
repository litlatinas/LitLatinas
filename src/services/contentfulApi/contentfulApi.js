var contentful = require('contentful');

//create a client via : https://contentful.github.io/contentful.js/contentful/latest/contentful.html#.createClient
const client = contentful.createClient({
  accessToken: 'c79188973eac80bf86563083bca8dac1d96845e92e95f1fbf8d8c96a08e2fda4',
  space: 'b1vtr6k3f84o'
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
