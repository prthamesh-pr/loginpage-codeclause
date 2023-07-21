function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {

            var user = result.user;
            console.log("Logged in user: ", user);
        })
        .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}


function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {

            var user = result.user;
            console.log("Logged in user: ", user);
        })
        .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}



function githubLogin() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {

            var user = result.user;
            console.log("Logged in user: ", user);
        })
        .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}

