// declaring and initializing variables

let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () =>{
    //create a date object from input value
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);
    //console.log(date1, date2);

    // check if the input dates are valid;
    // if valid calculate the difference

    if(date1.getTime() && date2.getTime()){
        //calculate difference in time using getTime function
        // get times calculate numbers of years since january 1,1970
        let timeDifference = date2.getTime() - date1.getTime();

       // console.log(timeDifference)
       // since this value is a miliseconds we need to convert it into days
       // we want the difference to be a non-negative number . hence we use math.abs()

       let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
       // console.log(dayDifference);

       output.innerHTML = `Difference between the two dates is <span>${dayDifference}</span> Days`
    }

    //Else the display that the input is valid
    else{
        output.innerHTML = "Please select a valid date";
    }
})
