$(document).ready(function() {

    // $(window).on('load', function() {
    //     $('.box-image img').addClass('active')
    // })

    $(window).on('scroll', function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            $('.navbar').addClass('active')
        } else {
            $('.navbar').removeClass('active')
        }
    })

    $('.search-bttn').on('click', function() {
        $('.search').addClass('active')
    })

    $('.close-click').on('click', function() {
        $('.search').removeClass('active')
    })

    $('.open-profile').on('click', function() {
        $('.profile-menu').toggleClass('active')
    })

    $('.profile-closebtn').on('click', function() {
        $('.profile-menu').removeClass('active')
    })

    $('.lg-acc').on('click', function() {
        $title = "Login Here"
        $.ajax({
            url: 'login.html',
            error: err => {
                console.log("An error occured")
            },
            success: function (resp) {
                $('#uni_modal .modal-title').html($title)
                $('#uni_modal .modal-body').html(resp)
                $('#uni_modal').modal('show')
            }
        })
    })

    
})