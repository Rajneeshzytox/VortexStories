 // Format :  datePassed('07/21/2024')
 
 export function datePassed(InputDate){
    let diff; // it will contain diierence in date or month or year and return number/string

    let oldDate = new Date(InputDate)
    let oldYear = oldDate.getFullYear();
    let oldMonth = oldDate.getMonth();
    let oldDay = oldDate.getDate();
    let oldHour = oldDate.getHours();
    
    // current date
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth();
    let currDay = currDate.getDate();
    let currHour = currDate.getHours();


    // checking how much time passed

    // ## Yeah Yeah I know there can be other goods methods to do this but, i just want the work to be dome
    
    // also you can add extra if else for the singular plural, i.e.: 1 days ago, 1 years, ago...

    // check for year
    if(oldYear !== currYear){
        diff = String( currYear - oldYear);
        // console.log(typeof(diff))
        // console.log(`${diff} years`)
        return(`${diff} years`)
    }

    // check for months
    else if(oldMonth !== currMonth){
        diff = String( currMonth - oldMonth);
        // console.log(typeof(diff))
        // console.log(`${diff} months`)
        return(`${diff} months`)
    }

    // check for days
    else if(oldDay !== currDay){
        diff = String( currDay - oldDay);
        // console.log(typeof(diff))
        // console.log(`${diff} days`)
        return(`${diff} days`)
    }

    // check for Hours
    else if(oldHour !== currHour){
        diff = String( currHour - oldHour);
        return(`${diff}h`)
    }
    
    else{
        diff = 'mins'
        // console.log(typeof(diff))
        // console.log(diff)
        return(`few ${diff}`)
    }
}

