import Datastore from 'https://cdnjs.cloudflare.com/ajax/libs/nedb/1.8.0/nedb.min.js'
function showinput() {
    const password = document.getElementById("password").value
    const username = document.getElementById("username").value



    var db = new Datastore({ filename: 'path/to/datafile', autoload: true });

}   
