document.addEventListener("DOMContentLoaded", function () {

    var product=document.querySelectorAll('.box');

    product.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            this.nextElementSibling.style.display = "none";
        });
        e.addEventListener('mouseout', function () {
            this.nextElementSibling.style.display = "block";
        })
    });

    var nextBtn = document.getElementById('nextImg');
    var prevBtn = document.getElementById('prevImg');

    var list = document.querySelectorAll('.chairSlider li');
    console.log(list);

    var liArray = [];

    list.forEach(function (li) {
        liArray.push(li);
    });

    console.log(liArray);


    var imgIndex =0;

    var visible = liArray[imgIndex].classList.add('visible');

    nextBtn.addEventListener('click', function () {
        visible=liArray[imgIndex].classList.remove('visible');
        imgIndex++;
        if(imgIndex>=liArray.length) {
            imgIndex=0;}
        visible= liArray[imgIndex].classList.add('visible');
    });

    prevBtn.addEventListener('click', function () {
        visible=liArray[imgIndex].classList.remove('visible');
        imgIndex--;
        if(imgIndex<0) {
            imgIndex=liArray.length-1;}
        visible = liArray[imgIndex].classList.add('visible');
    });








});


