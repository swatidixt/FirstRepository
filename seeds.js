var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
// var data =[
//     { 
//         name: "Cloud's Rest" , 
//         image: "https://farm2.staticflickr.com/1164/1353503215_3eb1b47054.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//         ,author:{
//             id : "588c2e092403d111454fff76",
//             username: "Jack" }
//     },
//     { 
//         name: "Desert Mesa" , 
//         image: "https://farm5.staticflickr.com/4093/4940702231_d16ac4bdf5.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//         ,author:{
//             id : "588c2e092403d111454fff71",
//             username: "Jill"
//         }
//     },
//     { 
//         name: "Canyon Floor" , 
//         image: "https://farm5.staticflickr.com/4052/4236395406_587f011ac0.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//         ,author:{
//             id : "588c2e092403d111454fff77",
//             username: "Jane"
//         }
//     }
// ]
function seedDB(){
    //Remove all campgrounds
Campground.remove({}, function(err){
  if(err) {
      console.log(err);
  }
  console.log("removed campgrounds!");


//add a few campground
   data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
           if(err){
               console.log(err)
            } 
        else {
               console.log("added a campground");
               Comment.create({
                   text:"This place is great, but I wish there was internet",
                   author:{
                    id : "588c2e092403d111454fff76",
                    username: "Jack"
                }
               }, function(err, comment){
                   if(err){
                       console.log(err);
                   } else {                    
                    campground.comments.push(comment);
                    campground.save();
                    console.log("Created new comments");
                   }                   
                });
           }        
      });
   });
});
//add a few comments
}


module.exports = seedDB;