window.addEventListener('load', function(event){

    // document.documentElement.scrollTop = 672
    let domHeight = document.body.clientHeight
    // let domHeight = window.innerHeight
    console.log(domHeight);    
    
    window.scrollTo(0, domHeight+100)
})


// document.addEventListener('scroll', function(event){
//     console.log(document.documentElement.scrollTop);

// })



