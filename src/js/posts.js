fetch("./res/json/posts.json")
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
