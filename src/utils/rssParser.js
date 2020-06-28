<script src="/node_modules/rss-parser/dist/rss-parser.min.js"></script>
<script>
 
<>
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
 
let parser = new RSSParser();
parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
  if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
})
 </>
</script> 