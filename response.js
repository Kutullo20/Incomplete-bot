function getBotResponse(input) {
    //responses to service choice

    if (input == 1) {
        return "○ Details about service 1 <br>○ Details about service 1 <br>○ Details about service 1";
    } else if (input == 2) {
        return "○ Details about service 2 <br>○ Details about service 2 <br>○ Details about service 2";
    } 
    
    if (input == 4) {
        return "○ Details about service 4 <br>○ Details about service 4 <br>○<a target=`blank` href='https://www.w3schools.com/'> Visit W3Schools.com!</a>"
   
    } 
     if (input == "back") {
        return "Hello, welcome please choose the service you want: <br>●Service 1<br>●Service 2<br>●Service 3<br>●Service 4";
    }

    if (input == 3) {
        return "<img src='./OIP.jpg' width='100%' onclick='myfunc()'><br>This building is located next to Kanana</img>";
    }


    if (input == 7) {
        return  `<img src="./Google.jpg" width='100%'<br>This building is located next to  Kanana `;
    }

    if (input == 6) {
        return "○ Details about service 4 <br>○ Details about service 4 <br>○<a target=`blank` href='https://www.up.ac.za/it-services/article/2891993/student-computing-services'> Visit student computing site</a>"
    }
    if (input == 8) {
        return "<img src='./OIP.jpg' width='100%'<br> <img src='./OIP.jpg' width='100%'</img>";
    }
    



    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }    
}





