//main javascript code

//facebook feed creation
window.onload = function facebookFeed() {
    
    var iframe = document.createElement('IFRAME')
    iframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGriffithPreschoolKindergarten&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId";
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style = "border:none;overflow:hidden" ;
    iframe.scrolling = 'no';
    iframeborder = '0';
    iframe.allowTransparency = 'true';
   
    var apdivRef = document.getElementById('apDiv13');  //the div container for the feed
    apdivRef.appendChild(iframe);

}
