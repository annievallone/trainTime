

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBCEzJrl6v5cqUjue4bZijAqxqKcicuYME",
    authDomain: "traintime-a3bc8.firebaseapp.com",
    databaseURL: "https://traintime-a3bc8.firebaseio.com",
    projectId: "traintime-a3bc8",
    storageBucket: "traintime-a3bc8.appspot.com",
    messagingSenderId: "626668766631"
  };
  firebase.initializeApp(config);
 var dataRef=firebase.database();

//  var schedule = [ ];
 
 var name = "";
 var destination = "";
 var str = "";
 var frequency = "";
 var arrival = "";
 var min = "";
 var dateAdded = "";
 var currentTime = moment().format("HH:mm");
 var till = 0;
 var nextTrain = moment().format("HH:mm");
 var trainstart = moment(trainstart, "HH:mm")


 //storing new train input to vars 
 $("#add").on("click", function(event) {
     event.preventDefault();
     name = $("#name-input").val().trim();
     destination = $("#destination").val().trim();
     strtime = $("#strtime").val().trim();
     frequency = $("#frequency").val().trim();

     //adding the new trains to the DB 
 dataRef.ref().push({
     name: name,
     destination: destination,
     strtime: strtime,
     frequency: frequency,
     nextTrain : nextTrain,
     till : till,
     dateAdded: firebase.database.ServerValue.TIMESTAMP,
 })
 })
 //appending the DB to the table in the html
 dataRef.ref().on("child_added", function(childSnapshot){
  dataRef.ref().on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

      trainstart = (childSnapshot.val().strtime)
      trainstart = moment(trainstart, "HH:mm")
      var f = parseInt(childSnapshot.val().frequency);
      var diff = moment().diff(moment(trainstart), 'minutes');
      var tRemainder = diff % f;
      till = f - tRemainder;
      nextTrain = moment().add(till, "minutes");
     nextTrain = nextTrain.toDate();
   
      console.log(nextTrain);
  });
  dataRef.ref().push({
    nextTrain : nextTrain,
    till : till,
})
});
     $("#header").after("<tr><th scope='col' id=" + childSnapshot.key + '>' + childSnapshot.val().name +
      " <th scope='col'> " + childSnapshot.val().destination +
      " <th scope='col'> " + childSnapshot.val().frequency +
      " <th scope='col'> " + nextTrain +
      " <th scope='col'> " +  till + 
      "</th><tr>");  
      
      // schedule.push(childSnapshot.key)

      //     trainstart:(childSnapshot.val().strtime),
      //     f: parseInt(childSnapshot.val().frequency),
      
      // console.log(schedule)
 })

   

 




 