// Setting up the database

const firebaseConfig = {
    apiKey: "AIzaSyA-yyQ1E02QguL7gxAkSQFGCVUzR-ixWHU",
    authDomain: "wedding-95e32.firebaseapp.com",
    projectId: "wedding-95e32",
    storageBucket: "wedding-95e32.appspot.com",
    messagingSenderId: "271043926784",
    appId: "1:271043926784:web:e4524d0c61852c4e2131e5"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Preventing default

document.getElementById('submit').addEventListener("click", function(event) {
    event.preventDefault()
    save()
})

// Saving the form details

function save() {

    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var groomOrBrideSide = document.getElementById('groomOrBrideSide').value
    var diet = document.getElementById('diet').value
    var message = document.getElementById('message').value

    if (!name || !email || (groomOrBrideSide == 'Groom Side or Bride Side') || !diet || !message) {
        document.querySelector('#email-sent').classList.add('alert-danger');
        document.querySelector('#email-sent').textContent = 'Please make sure to fill all the inputs';
        setTimeout(function() {
          document.querySelector('#email-sent').textContent = '';
          document.querySelector('#email-sent').classList.remove('alert-danger');
        }, 2000);
      }
    else {        
        database.ref('guests/' + name).set({
            name: name,
            email: email,
            groomOrBrideSide: groomOrBrideSide,
            diet: diet,
            message: message,
        })

        document.querySelector('#email-sent').classList.add('alert-success');
        document.querySelector('#email-sent').textContent = 'You are now invited! We hope to see you at our wedding!';
        setTimeout(function() {
          document.querySelector('#email-sent').textContent = '';
          document.querySelector('#email-sent').classList.remove('alert-success');
        }, 6000);
    }

}

