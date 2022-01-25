$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const user = document.getElementById('user');
const sear = document.getElementById('search')

function entra(){
    user.style.color = '#AAA'

}
function entrar(){
    sear.style.color = '#AAA'
}
function sai(){
    user.style.color = ''
}
function sair(){
    sear.style.color = ''
}