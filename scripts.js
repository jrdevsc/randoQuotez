
getFirstQuote();

function getFirstQuote(){
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp",
      },
      success: function(data){
        $('#myDiv h1').html("<h1>"+data.quoteAuthor+"</h1>");
        $('#myDiv h3').html("<h3>"+data.quoteText+"</h3>");
      }
      });
    }


$('#getQ').click(function(){
  getQuote();
});

$('#tweetQ').click(function(){
  tweetQ();
});

function getQuote(){
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(data){
        if(data.quoteAutor == ""){
            $('#myDiv h1').html("<h1>Author Unknown</h1>");
        }else{
          $('#myDiv h1').html("<h1>"+data.quoteAuthor+"</h1>");
          $('#myDiv h3').html("<h3>"+data.quoteText+"</h3>");
        }
      }
  });
}

function tweetQ(){
  var tweetThis = $('#myDiv h3').text();
  $('#tweetQ a').attr("href", 'https://twitter.com/intent/tweet?text=' + tweetThis);
}
