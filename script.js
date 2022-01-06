function compute()
{
    // Store information into variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // Check that Amount is higher than 0
    if(principal<=0){
        alert("Enter a positive number");
        // We store the values at the variables, so to focus on the field,
        // we must recall the field instead of the variable
        document.getElementById("principal").focus();
        return false;
    }

    // To hihlight values, create html string vars
    var principal = '<mark>'+principal+'</mark>';
    var rate = '<mark>'+rate+'%</mark>';
    var interest = '<mark>'+interest+'</mark>';
    var year = '<mark>'+year+'</mark>';

    // Setting the text to the results variable
    // Use innerHTML property to be able to add line breaks
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interes rate of "+rate+".\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    return true;
}

function updateRate() 
{
    // Get the rate information and pass it to the span text
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}        
