function settinghideshow() {
    let colorchange=document.querySelector("#changecolor");

    if (colorchange.style.display="none") {
        colorchange.style.display="block"
        
    }else{
        colorchange.style.display="none"
    }

}
// function menuhish() {
//     console.log("hello");  
//     let menu = document.querySelector(".main1");
//     menu.setAttribute("style","display:none;")
//     let aboutmargin = document.querySelector(".about");
//     aboutmargin.setAttribute("style","margin-left:0px;")
//     let servicemargin = document.querySelector(".service");
//     servicemargin.setAttribute("style","margin-left:0px;")
//     let portfoliomargin = document.querySelector(".portfolio");
//     portfoliomargin.setAttribute("style","margin-left:0px;")
//     let Contactmargin = document.querySelector(".Contact");
//     Contactmargin.setAttribute("style","margin-left:0px;")
//     let main2margin = document.querySelector(".main2");
//     main2margin.setAttribute("style","margin-left:0px;")
    
// }
function menuhish() {
    let menu = document.querySelector(".main1");
    
    if (menu.setAttribute("style","display:none;")) {
        menu.setAttribute("style","display:block;")
        console.log("block");
        let aboutmargin = document.querySelector(".about");
            aboutmargin.setAttribute("style","margin-left:0px;")
            let servicemargin = document.querySelector(".service")
            servicemargin.setAttribute("style","margin-left:0px;")
            let portfoliomargin = document.querySelector(".portfolio")
            portfoliomargin.setAttribute("style","margin-left:0px;")
            let Contactmargin = document.querySelector(".Contact")
            Contactmargin.setAttribute("style","margin-left:0px;")
            let main2margin = document.querySelector(".main2");
            main2margin.setAttribute("style","margin-left:0px;")
    }else {
        menu.setAttribute("style","display:none;")
        console.log("none");
        let aboutmargin = document.querySelector(".about")
    aboutmargin.setAttribute("style","margin-left:0px;")
    let servicemargin = document.querySelector(".service")
    servicemargin.setAttribute("style","margin-left:0px;")
    let portfoliomargin = document.querySelector(".portfolio")
    portfoliomargin.setAttribute("style","margin-left:0px;")
    let Contactmargin = document.querySelector(".Contact")
    Contactmargin.setAttribute("style","margin-left:0px;")
    let main2margin = document.querySelector(".main2");
    main2margin.setAttribute("style","margin-left:0px;")
    }
}