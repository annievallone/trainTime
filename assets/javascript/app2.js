

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBCEzJrl6v5cqUjue4bZijAqxqKcicuYME",
//     authDomain: "traintime-a3bc8.firebaseapp.com",
//     databaseURL: "https://traintime-a3bc8.firebaseio.com",
//     projectId: "traintime-a3bc8",
//     storageBucket: "traintime-a3bc8.appspot.com",
//     messagingSenderId: "626668766631"
//   };
//   firebase.initializeApp(config);
//  var dataRef=firebase.database();
// var schedule = [];

//  $("#add").on("click", function(event) {
//   event.preventDefault();
//   //storing user entered data to a var 
//  var newTrain = {
//     name :'$("#name-input").val().trim()',
//     destination : '$("#destination").val().trim()',
//     strtime : '$("#strtime").val().trim()',
//     frequency : '$("#frequency").val().trim()',
//  }

// //pushing the var to the DB
// dataRef.ref().push({
//   name: newTrain.name,
//   destination: newTrain.destination,
//   strtime: newTrain.strtime,
//   frequency: newTrain.frequency,
// })
// dataRef.ref().on("child_added", function(childSnapshot) {
//   $("#header").after("<tr><th scope='col' id=" + childSnapshot.key + '>' + childSnapshot.val().name +
//       " <th scope='col'> " + childSnapshot.val().destination +
//       " <th scope='col'> " + childSnapshot.val().frequency +
//       " <th scope='col' class='nexttrain'> " +
//       " <th scope='col' class='min'>" +
//       "</th><tr>");
//   dataRef.ref().on("value", function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       schedule.push(childSnapshot.key)
//       trainstart = (childSnapshot.val().strtime)
//       console.log(schedule)
//     })
//   })

// })



// })
