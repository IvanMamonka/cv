let n=1, max=6

function timer(){
    if (n>max) n=1
    img1.src = `images/slade${n++}.jpeg`
    timerId=setTimeout(timer,1000)}

    function stop(){
        clearTimeout(timerId)
    }
