
// import { MY_API_KEY } from './config.js';

fetch("https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21", {
     "method": "GET",
    "headers": {
        "x-rapidapi-key":  "314cde1626msh0c36ecd28436040p1c58d5jsnd0c56333634c",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"

        // "Content-Type": "text/plain;charset=UTF-8"    // need it ??
      }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response[0].active);
        // console.log(response.content);
    })
    .catch(err => {
        console.error(err); 
    });
    



    
    // fetch('/article/promise-chaining/user.json')
    // .then(response => response.json())
    // .then(user => fetch(`https://api.github.com/users/${user.name}`))  ??
    // .then(response => response.json())
    // .then(githubUser => new Promise(function(resolve, reject) { // (*)   .then handler //??
    //   let img = document.createElement('img');
    //   img.src = githubUser.avatar_url;
    //   img.className = "promise-avatar-example";
    //   document.body.append(img);
  
    //   setTimeout(() => {
    //     img.remove();
    //     resolve(githubUser); // (**)
    //   }, 3000);
    // }))
    // // triggers after 3 seconds
    // .then(githubUser => alert(`Finished showing ${githubUser.name}`));




    

    // function Counter() {      // whu uppercase (Counter)??
    //     let count = 0;
        
    //     this.up = function() {
    //       return ++count;
    //     };
        
    //     this.down = function() {
    //       return --count;
    //     };
    //   }
      
    //    let counter = new Counter;      // why ??
      
    //   alert(counter.up());
    //   alert(counter.up());
    //   alert(counter.down());