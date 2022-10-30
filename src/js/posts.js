fetch("./res/json/posts.json")
.then((response) =>response.json())
.then(json => {
                

    for (let i = 0; i < json.length; i++) {
        let date = document.getElementsByClassName("date")
        date[i].innerHTML = json[i].createTime

        let comment = document.getElementsByClassName("comment")
        comment[i].innerHTML = json[i].comment

        let photo = document.getElementsByClassName("photo")
        photo[i].src = json[i].photo
    }
    
})
.catch(err => {

})
.finally(() => {

})

// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req)
//     if(req.status == 200){
//         let a = req.responseText;

//         let parsedJSON = JSON.parse(a);
//         for (let i = 0; i < parsedJSON.length; i++) {
//             let date = document.getElementsByClassName("date")
//             date[i].innerHTML = parsedJSON[i].createTime

//             let comment = document.getElementsByClassName("comment")
//             comment[i].innerHTML = parsedJSON[i].comment

//             let photo = document.getElementsByClassName("photo")
//             photo[i].src = parsedJSON[i].photo
//         }
//     }else{

//         //window.open("/WAD-Homework1-Team57/error.html", "_self")
//     }
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/635ed2662b3499323befa683", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$ppk3qYBrJuFc8oRl1liGWuQfecVMhWWSAJBHhEH88VwPtJVwwTQwO");
// req.setRequestHeader("X-BIN-META", "false");

// req.send();


/*
window.onload = function() {

    fetch('http://myjson.dit.upm.es/api/bins/57ly')
        .then((response) => response.json())
        .then(json => {
                        
            for (let i = 0; i < json.length; i++) {
                let date = document.getElementsByClassName("date")
                date[i].innerHTML = json[i].createTime

                let comment = document.getElementsByClassName("comment")
                comment[i].innerHTML = json[i].comment

                let photo = document.getElementsByClassName("photo")
                photo[i].src = json[i].photo
            }
            
        })
        .catch(err => {

        })
        .finally(() => {

        })
   
}
        */
