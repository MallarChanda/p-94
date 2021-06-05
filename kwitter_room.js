
var firebaseConfig = {
      apiKey: "AIzaSyAw9dhVyHie9qq-_yb7uF8nrglhKldQhGM",
      authDomain: "kwitter-a197c.firebaseapp.com",
      databaseURL: "https://kwitter-a197c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a197c",
      storageBucket: "kwitter-a197c.appspot.com",
      messagingSenderId: "237107289053",
      appId: "1:237107289053:web:03264e2d96ec0739857434"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose: "adding user"});  
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
