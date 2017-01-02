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
      // console.log(data);
    }
});
