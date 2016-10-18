$(document).ready(function(){

    // var logoW = $("#navLogo").width();
    // $("#navLogo").css({'height':logoW})\
// $('#myForm').validator()


    $('#myForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("clicked");

            var first = $('#inputFirstName').val()
            var last = $('#inputLastName').val() 
            var email = $('#inputEmail').val()

            $.post('/signup', {
                first: $('#inputFirstName').val(),
                last: $('#inputLastName').val(), 
                email: $('#inputEmail').val()
            },function(data){
                // console.log(data);
                console.log('herenow');
                $('#newModalTitle').text("Welcome to myKlovr " + first)
                    $('#newModal').modal();
                    }
            )
        }
    })
})

    $('#ambassadorForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
            e.preventDefault();
            console.log("clicked");

            var name = $('#name').val()
            var email = $('#email').val() 
            var schoolname = $('#schoolname').val()

            $.post('/ambassador', {
                name: name,
                email: email, 
                schoolname: schoolname
            },function(data){
                
                console.log('herenow');
                 $("#myAmbassadorBtn").click(function(){
                $("#myAmbassador").modal();
                    })
             })
        }
    })

         

    $('#businessForm').on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("ambclicked");

            var name = $('#name').val()
            var email = $('#email').val()
            var companytitle = $('#companytitle').val() 
            var companyname = $('#companyname').val() 
            console.log(name)
            console.log(email)

            $.post('/business', {
                name: name,
                email: email,
                companytitle: companytitle,
                companyname: companyname 
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $("#businessForm").click(function(){
                $("#newBusiness").modal();})
            })
        })
})




    $('#schoolForm').on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("ambclicked");

            var name = $('#name').val()
            var email = $('#email').val()
            var schooltitle = $('#schooltitle').val() 
            var schoolname = $('#schoolname').val() 
            console.log(name)
            console.log(email)

            $.post('/school', {
                name: name,
                email: email,
                schooltitle: schooltitle,
                schoolname: schoolname
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $("#schoolForm").click(function(){
                $("#newSchool").modal();
                }
            )
        }
    })
})

    $('#educatorForm').on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("ambclicked");

            var name = $('#name').val()
            var email = $('#email').val()
            var subject = $('#subject').val() 
            var school = $('#schoolname').val() 
            console.log(name)
            console.log(email)

            $.post('/educator', {
                name: name,
                email: email,
                subject: subject,
                school: schoolname
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $("#educatorForm").click(function(){
                $("#newEducator").modal();
                }
            )
        }
    })
})

    $('#messageForm').on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("ambclicked");

            var name = $('#name').val()
            var email = $('#email').val()
            var phone = $('#phone').val() 
            var message = $('#message').val() 
            console.log(name)
            console.log(email)

            $.post('/message', {
                name: name,
                email: email,
                phone: phone,
                message: message
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $("#messageForm").click(function(){
                $("#newMessage").modal();
                }
            )
        }
    })
})


    // $('#myForm').on('submit', function(e){
    //     // e.preventDefault();
    //     console.log("clicked");

    //     var first = $('#inputFirstName').val()
    //     var last = $('#inputLastName').val() 
    //     var email = $('#inputEmail').val()

     

    //     $.post('/signup', {
    //         first: $('#inputFirstName').val(),
    //         last: $('#inputLastName').val(), 
    //         email: $('#inputEmail').val()
    //     }, function(data){
    //         // console.log(data);
    //         $('#newModalTitle').text("Welcome to myKlovr " + first)
    //             $('#newModal').modal();
    //         // if (data.have == true){
    //         //     console.log("this");
    //         //     $('#newModal').modal();

    //         // }else{console.log('that')
    //         //     $('#newModalTitle').text("Welcome to myKlovr " + first)
    //         //     $('#newModal').modal();
    //         // }
           



    //     });






    // })














    // $("#mainNav").hide();

    // // fade in .navbar
    // $(function () {
    //     $(window).scroll(function () {

    //              // set distance user needs to scroll before we start fadeIn
    //         if ($(this).scrollTop() > 100) {
    //             $('.navbar').fadeIn();
    //         } else {
    //             $('.navbar').fadeOut();
    //         }
    //     });
    // });





    // $("#myBtn").click(function(){
    //     $("#myModal").modal();
    // });
    // $("#myBtnBusiness").click(function(){
    //     $("#myBusiness").modal();
    // });
    // $("#myBtnSchools").click(function(){
    //     $("#mySchools").modal();
    // });
    //   $("#myBtnEducators").click(function(){
    //     $("#myEducators").modal();
    // });







// });