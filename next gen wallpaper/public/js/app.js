var config = {
    apiKey: "AIzaSyCuhJN17glxshU_7z13z21fJceeX-bn7to",
    authDomain: "next-gen-wallpaper-ff620.firebaseapp.com",
    databaseURL: "https://next-gen-wallpaper-ff620-default-rtdb.firebaseio.com",
    projectId: "next-gen-wallpaper-ff620",
    storageBucket: "next-gen-wallpaper-ff620.appspot.com",
    messagingSenderId: "315102052156",
    appId: "1:315102052156:web:72d52da381ec81b730a839",
    measurementId: "G-TMTRLJQPVG"
  };

 
 firebase.initializeApp(config);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var Email = $("#Email").val();
        var Password = $("#Password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(Email, Password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }