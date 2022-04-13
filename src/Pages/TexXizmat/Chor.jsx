// //bot token
// var telegram_bot_id = "5128768212:AAFvms3OR4H6369bWUrp4CStnzEXSwAHFRE"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
// //chat id
// var chat_id =  -1001770493847; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
// // var chat_id = 446810766; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
// var u_name, email, message;
// var ready = function() {
//     u_name = document.getElementById("bolim").value;
//     room = document.getElementById("xona").value;  
//     // comId = document.getElementById("comID").value;
//     tel = document.getElementById("tel").value;
//     muammo = document.getElementById("muammo").value;
//     noom = document.querySelector('#noom').value;
//     user_data = document.querySelector('#user-data').value;
//     user_fname = document.querySelector('#user-fname').value;

//     message = "Ariza raqami: " + noom
//     + "\nFamiliyasi:  " + user_fname
//     + "\nIsmi:  " + user_data
//     + "\nBo`lim: " + u_name 
//     + "\nXona: " + room 
//     //  "\nKompyuter Raqami: " + comId + 
//     + "\nTel:  " + tel 
//      + "\nMuammo:  " + muammo; 
// };
// var sendtelegram = function() {
//     ready();
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message
//         })
//     };
//     $.ajax(settings).done(function(response) {
//         console.log(response);
//     });

//     return false;
// };
