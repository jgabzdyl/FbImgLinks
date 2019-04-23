var maxIndex = 0;

setInterval(
function handle(details) {
    console.log('running');
var elem = $('.userContentWrapper');

elem.each(
    function(index, element) {
       if(index <= maxIndex) return; else maxIndex=index;
       if($(this).find('.FBLext').length) {return;}
       var link = $(this).find('a[data-ploi]').attr('data-ploi');
       console.log(index.toString() + 'FBLinker:' + link);
       if(link!=undefined) {
        $(this).find('._1dnh>._3vuz').append('<span class="_18vi"><a class="FBLext _666h  _18vj" role="button" tabindex="0" title="Image" href="'+link+'" target="_blank">Image</a></span>');
       }
    }
    )
}, 2000
);
