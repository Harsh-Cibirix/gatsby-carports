// Main scripts for the project
/* global Swiper, document, setTimeout */
import $ from "jquery"
import Swiper from "swiper"

(function () { // jshint ignore:line
    //Functions
    function createBuildingsCarousel() {
        new Swiper('.buildings__carousel', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true
        });
    }

    function parseJsonToHtml(jsonData) {
        var resultsHtml = '';
        resultsHtml += '<div class="swiper-container buildings__carousel">';
        resultsHtml += '<div class="swiper-wrapper">';
        for (var i = 0; i < jsonData.length; i++) {
            resultsHtml += '<div class="swiper-slide buildings__carousel-item">';
            resultsHtml += '<picture>';
            resultsHtml += '<source srcset="' + jsonData[i].img + ' 1x, ' + jsonData[i].img2x + ' 2x">';
            resultsHtml += '<img class="buildings__carousel-item-img" src="' + jsonData[i].img + '" alt="alt">';
            resultsHtml += '</picture>';
            resultsHtml += '<p class="buildings__carousel-item-name">' + jsonData[i].name + '</p>';
            resultsHtml += '</div>';
        }
        resultsHtml += '</div>';
        resultsHtml += '</div>';
        return resultsHtml;
    }
    $(document).ready(function () {
        //Variables
        var heroSlider;
        //Hero slider
        heroSlider = new Swiper('.hero__slider', {
            slidesPerView: 'auto',
            loop: true,
            centeredSlides: true,
            speed: 500,
            autoplay: {
                delay: 3500,
            }
        });
        //Buildings carousel
        createBuildingsCarousel();
        //Get buildings ( AJAX )
        $('.buildings__header-btn').on('click', function (e) {
            $('.buildings__header-btn').removeClass('buildings__header-btn_active');
            $(this).addClass('buildings__header-btn_active');
            //Get data attribute value
            var dataValue = $(this).data('building-name');
            $.ajax({
                method: 'GET',
                // data: dataValue,
                dataType: 'json',
                url: 'inc/testData.json',
                success: function (resultsData) {
                    var successResult = parseJsonToHtml(resultsData);
                    $('.buildings__grid').html(successResult);
                    setTimeout(function () {
                        createBuildingsCarousel();
                    }, 500);
                },
            })
        });
    })
})();