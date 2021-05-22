// First Question

function convertFahrToCelsius(deg){
    const result = (deg - 32) * 5/9;
    const str = JSON.stringify(deg)

    if(Number(result) && typeof deg !== "boolean" && deg !=="" && "object" && (!isNaN(deg))){
        console.log (Number(result.toFixed(4)))
        return Number(result.toFixed(4))
    }
    else if(Array.isArray(deg)){
        console.log(`${str} is not a valid number but a/an array`)
        return(`${str} is not a valid number but a/an array`)
    }
    else{
        console.log(`${str} is not a valid number but a ${typeof deg}`)
        return(`${str} is not a valid number but a ${typeof deg}`)
    }
  
}

// Second Question
function checkYuGiOh (n){
    const array=[];

    for(let num=1; num<=n; num++)
    if(num%2 == 0 && num%3 == 0 && num%5 == 0){
        array.push("yu-gi-oh");
    }else if(num%2 == 0){
        array.push("yu");
    }else if(num%3 == 0){
        array.push("gi");
    }else if(num%5 == 0){
        array.push("oh");
    }else{
        array.push(num);
    }


    
    console.log(new array);
    return(new array)
}