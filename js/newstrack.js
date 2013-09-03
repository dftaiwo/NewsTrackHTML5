//var newsPaperFeedUrl='http://www.punchng.com/feed/';
var newsPaperFeedUrl = 'http://feeds.feedburner.com/blogspot/OqshX';

 $().ready(function() {
        loadLatestNews();
});
function loadLatestNews() {

        try {
                var gFeed = new google.feeds.Feed(newsPaperFeedUrl);
                gFeed.setNumEntries(10);
                gFeed.load(function(result) {
                        console.log('News Articles', result.feed.entries);
                        $('.newsList').render(result.feed.entries);
                        $('.loadingMsg').hide();
                        $('.newsList li').show();
                        $('.clickToRead').on('click', function(obj) {
                                toggleFullBody(obj.toElement);
                                return false;
                        });
                });
        } catch (e) {
                if (confirm('Unable to connect. Please check your connection. Would you like to try again?')) {
                        location.reload();
                }
        }
}
function toggleFullBody(triggeredLink) {
        console.log(triggeredLink);
        $('.content').hide();
        $('.contentSnippet').show();
        $(triggeredLink).parent().find('.contentSnippet').toggle();
        $(triggeredLink).parent().find('.content').toggle();
        return false;
}