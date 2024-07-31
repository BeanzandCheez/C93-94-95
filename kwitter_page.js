//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDLy2r3x2RcKsX9GvmUkuiJLWch8pMU4p4",
      authDomain: "kwitter-a73d3.firebaseapp.com",
      databaseURL: "https://kwitter-a73d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-a73d3",
      storageBucket: "kwitter-a73d3.appspot.com",
      messagingSenderId: "223128827800",
      appId: "1:223128827800:web:3d6626ad82b596946bdded",
      measurementId: "G-4876CGHHZZ"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
   function send()
   {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
