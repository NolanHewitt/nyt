document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click", function() {
  
    const byear = 20181010;    
    const eyear = 20191010;    
    const keyterm = "election"    
    const apikey = "ln9jYCEkV3eGHHnOPNfe78pVdmqpj5FA"
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+byear+"&end_date="+eyear+"&q=" + keyterm + "&api-key=" + apikey;


    fetch(queryURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        const results = responseJson;
        console.log(results);

        var div = document.createElement("div");
        div.innerHTML = responseJson.response.docs[0].headline.main;
        div.className = "Title";
        document.body.appendChild(div);

        var div = document.createElement("div");
        div.innerHTML = responseJson.response.docs[0].abstract;
        div.className = "subtitle";
        document.body.appendChild(div);

        var div = document.createElement("div");
        div.innerHTML = responseJson.response.docs[0].lead_paragraph;
        div.className = "subtitle";
        document.body.appendChild(div);



  });
  });
  });