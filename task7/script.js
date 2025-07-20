

function myLoop(start, end, breaknum, countnum) {
    if (start && end && breaknum && countnum) {
        for (var i = start; i <= end; i++)
            if (i === breaknum)
                break;
            else if (i === countnum)
                continue;
            else (console.log(i))
    }
    
    else
        console.log('please enter all 4 numbers')
}


myLoop(1,10,7,4)