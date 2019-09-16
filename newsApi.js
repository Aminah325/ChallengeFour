const https = require("https");

console.log("Enter a number of one of the news source from 1 to 4:\n");

const feedBack = () => {
  const news_sources = {
    1: "mtv-news-uk",
    2: "the-new-york-times",
    3: "nbc-news",
    4: "bbc-news",
  };


  process.stdin.on("data", data => {
    const sources = [1, 2, 3, 4];


    const num_data = Number(data);


    if (data == "exit\n") {
      process.exit();
    } else if (!sources.includes(num_data)) {

      console.log("No news for you");
    } else {
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources[num_data]}&pageSize=10&apiKey=d3cb654acb284ba494e8ab5b1b71c11c`;

      https
        .get(url, response => {
          var data = "";


          response.on("data", chunk => {
            data += chunk;
          });


          response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);
          });
        })
        .on("error", err => {
          error = err;
          console.log("Error", err);
        });
    }
  });
};

feedBack();