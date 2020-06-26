function verticalScrollAnimate() {
    var tickerLength = $('.vertical-slider-li').length;
    var tickerHeight = $('.vertical-slider-li').outerHeight();
    $('.vertical-slider-li:last-child').prependTo('.vertical-slider-ul');
    $('.vertical-slider-ul').css('marginTop', -tickerHeight);
    function moveTop() {
        $('.vertical-slider-ul').animate({
            top: -tickerHeight
        }, 600, function () {
            $('.vertical-slider-li:first-child').appendTo('.vertical-slider-ul');
            $('.vertical-slider-ul').css('top', '');
        });
    }
    setInterval(function () {
        moveTop();
    }, 3000);
}

$(document).ready(myFunction());

async function myFunction() {
    $("<div/>").attr('class', 'vertical-slider-container').appendTo('body');
    $("<ul/>").attr('class', 'vertical-slider-ul').appendTo('.vertical-slider-container');

    const responseJSON = await $.get('https://randomuser.me/api/?results=10');
    console.log(responseJSON.results)

    createList(responseJSON.results)

}

function createList(data) {
    for (let i = 0; i < data.length; i++) {
        var l = list(data[i].picture.medium);
        $(l).attr('class', 'vertical-slider-li').appendTo('.vertical-slider-ul');
    }
    verticalScrollAnimate();
}

function list(picture) {
    const c = `<div><img src=${picture}></img><br/>
    Are you ready to bring your employees back to work?<br/> <a href="/" >click here</a></div>`;
    const listContent = `${c}`;
    return listContent;
}