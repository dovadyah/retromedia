// animated smooth scroll
const scroll = ()=>{
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
}

$('#view-work').on('click', scroll);