// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );


$( "#btncreateacc" ).click(function() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var radioValue = $("input[name='role']:checked").val();
    var checkform = true;
    if(fname == null || fname == ""){
        $("#mes-fname").show();
        $("#fname").addClass("red-border");
        checkform = false;
    }else{
        var regexfname = /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ ,.'-]+$/u;
        if(regexfname.test(fname) == false){
            $("#mes-fname-regex").show();
            $("#fname").addClass("red-border");
            checkform = false;
        }else{
            $("#mes-fname-regex").hide();
            $("#fname").removeClass("red-border");
            checkform = true;
        }
    }

    if(lname == null || lname == ""){
        $("#mes-lname").show();
        $("#lname").addClass("red-border");
        checkform = false;
    }else{
        var regexlname = /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ ,.'-]+$/u;
        if(regexlname.test(lname) == false){
            $("#mes-lname-regex").show();
            $("#lname").addClass("red-border");
            checkform = false;
        }else{
            $("#mes-lname-regex").hide();
            $("#lname").removeClass("red-border");
            checkform = true;
        }
    }

    if(email == null || email == ""){
        $("#mes-email").show();
        $("#email").addClass("red-border");
        checkform = false;
    }else{
        var regexemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexemail.test(email) == false){
            $("#mes-email-regex").show();
            $("#email").addClass("red-border");
            checkform = false;
        }else{
            $("#mes-email-regex").hide();
            $("#email").removeClass("red-border");
            checkform = true;
        }
    }

    if(password == null || password == ""){
        $("#mes-password").show();
        $("#password").addClass("red-border");
        checkform = false;
    }else{
        var regexpassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if(regexpassword.test(password) == false){
            $("#mes-password-regex").show();
            $("#password").addClass("red-border");
            checkform = false;
        }else{
            $("#mes-password-regex").hide();
            $("#password").removeClass("red-border");
            checkform = true;
        }
    }

    if(checkform == false){
        return false;
    }
});


$("#fname").keyup( function(){
    $("#mes-fname").hide();
    $("#mes-fname-regex").hide();
    $("#fname").removeClass("red-border");
})

$("#lname").keyup( function(){
    $("#mes-lname").hide();
    $("#mes-lname-regex").hide();
    $("#lname").removeClass("red-border");
})

$("#email").keyup( function(){
    $("#mes-email").hide();
    $("#mes-email-regex").hide();
    $("#email").removeClass("red-border");
})

$("#password").keyup( function(){
    $("#mes-password").hide();
    $("#mes-password-regex").hide();
    $("#password").removeClass("red-border");
})

$("#button-showpw").click(function(){
    $("#password").attr('type', 'text');
    $("#button-showpw").hide();
    $("#button-hidepw").show();
})

$("#button-hidepw").click(function(){
    $("#password").attr('type', 'password');
    $("#button-hidepw").hide();
    $("#button-showpw").show();
})

// ----------------------update info-------------------------


$('#btn-updateinfo').click(function(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var birthday = document.getElementById("birthday").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;
    var degree = document.getElementById("degree").value;
    var subject = document.getElementById("subject").value;
    var workexper = document.getElementById("workexper").value;
    var mailcontact = document.getElementById("mailcontact").value;
    var introduce = document.getElementById("introduce").value;
    var checkform = true;
    if(fname == null || fname == ""){
        $("#mesfname").show();
        $("#fname").addClass("red-border");
        checkform = false;
    }

    if(lname == null || lname == ""){
        $("#meslname").show();
        $("#lname").addClass("red-border");
        checkform = false;
    }

    if(birthday == null || birthday == ""){
        $("#mesbirthday").show();
        $("#birthday").addClass("red-border");
        checkform = false;
    }

    if(phonenumber == null || phonenumber == ""){
        $("#mesphone").show();
        $("#phonenumber").addClass("red-border");
        checkform = false;
    }

    if(address == null || address == ""){
        $("#mesaddress").show();
        $("#address").addClass("red-border");
        checkform = false;
    }

    if(degree == null || degree == ""){
        $("#mesdegree").show();
        $("#degree").addClass("red-border");
        checkform = false;
    }

    if(subject == null || subject == ""){
        $("#messubject").show();
        $("#subject").addClass("red-border");
        checkform = false;
    }

    if(workexper == null || workexper == ""){
        $("#mesworkexper").show();
        $("#workexper").addClass("red-border");
        checkform = false;
    }

    if(mailcontact == null || mailcontact == ""){
        $("#mesmailcontact").show();
        $("#mailcontact").addClass("red-border");
        checkform = false;
    }

    if(introduce == null || introduce == ""){
        $("#mesintroduce").show();
        $("#introduce").addClass("red-border");
        checkform = false;
    }

    if(checkform == false){
        return false;
    }
})

$('#fname').keyup(function(){
    $('#fname').removeClass("red-border");
    $("#mesfname").hide();
})

$('#lname').keyup(function(){
    $('#lname').removeClass("red-border");
    $("#meslname").hide();
})

$('#birthday').change(function(){
    $('#birthday').removeClass("red-border");
    $("#mesbirthday").hide();
})

$('#phonenumber').keyup(function(){
    $('#phonenumber').removeClass("red-border");
    $("#mesphone").hide();
})

$('#address').keyup(function(){
    $('#address').removeClass("red-border");
    $("#mesaddress").hide();
})

$('#degree').keyup(function(){
    $('#degree').removeClass("red-border");
    $("#mesdegree").hide();
})

$('#subject').keyup(function(){
    $('#subject').removeClass("red-border");
    $("#messubject").hide();
})

$('#workexper').keyup(function(){
    $('#workexper').removeClass("red-border");
    $("#mesworkexper").hide();
})

$('#mailcontact').keyup(function(){
    $('#mailcontact').removeClass("red-border");
    $("#mesmailcontact").hide();
})

$('#introduce').keyup(function(){
    $('#introduce').removeClass("red-border");
    $("#mesintroduce").hide();
})











// ------------------change password-------------------

$('#change-password').click(function(){
    var oldpass = document.getElementById("oldpass").value;
    var newpass = document.getElementById("newpass").value;
    var prepass = document.getElementById("prenewpass").value;
    var checkform = true;
    if(oldpass == "" || oldpass == null){
        checkform = false;
        $('#oldpass').addClass("red-border");
        $('#mesoldpass').show();
    }
    if(newpass == "" || newpass == null){
        checkform = false;
        $('#newpass').addClass("red-border");
        $('#mesnewpass').show();
    }else{
        var regexpassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if(regexpassword.test(newpass) == false){
            $("#mesnewpass-err").show();
            $("#newpass").addClass("red-border");
            checkform = false;
        }else{
            $("#mesnewpass-err").hide();
            $("#newpass").removeClass("red-border");
            checkform = true;
        }
    }


    if(prepass == "" || prepass == null){
        checkform = false;
        $('#prenewpass').addClass("red-border");
        $('#mesprenewpass').show();
    }else{
        if(newpass != prepass){
            checkform = false;
            $('#prenewpass').addClass("red-border");
            $('#mesprenewpass-err').show();
        }
    }

    if(checkform == false){
        return false;
    }
})

$('#oldpass').keyup(function(){
    $('#oldpass').removeClass("red-border");
    $("#mesoldpass").hide();
})

$('#newpass').keyup(function(){
    $('#newpass').removeClass("red-border");
    $("#mesnewpass").hide();
    $("#mesnewpass-err").hide();
})

$('#prenewpass').keyup(function(){
    $('#prenewpass').removeClass("red-border");
    $("#mesprenewpass").hide();
    $("#mesprenewpass-err").hide();
})



$('#btnsendmail').click(function(){
    var fullname = document.getElementById("fullname").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var messages = document.getElementById("messages").value;
    var checkform = true;
    if(fullname == "" || fullname == null){
        $('#fullname').addClass("red-border");
        $('#mesfullname').show();
        checkform = false;
    }

    if(subject == "" || subject == null){
        $('#subject').addClass("red-border");
        $('#messubject').show();
        checkform = false;
    }

    if(email == "" || email == null){
        $('#email').addClass("red-border");
        $('#mesemail').show();
        checkform = false;
    }

    if(messages == "" || messages == null){
        $('#messages').addClass("red-border");
        $('#yourmes').show();
        checkform = false;
    }

    if(checkform == false){
        return false;
    }
})


$('#fullname').keyup(function(){
    $('#fullname').removeClass("red-border");
    $("#mesfullname").hide();
})


$('#subject').keyup(function(){
    $('#subject').removeClass("red-border");
    $("#messubject").hide();
})


$('#email').keyup(function(){
    $('#email').removeClass("red-border");
    $("#mesemail").hide();
})


$('#messages').keyup(function(){
    $('#messages').removeClass("red-border");
    $("#yourmes").hide();
})


$('#btncreatenewcourse').click(function(){
    var checkform = true;
   
    var coursename = document.getElementById("coursename").value;
    var coursebackground = document.getElementById("coursebackground").value;
    var videointro = document.getElementById("videointro").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;
    var required = document.getElementById("required").value;
    var gained = document.getElementById("gained").value;
    var openday = document.getElementById("openday").value;
    var endday = document.getElementById("endday").value;
    var timetb = document.getElementById("timetb").value;

    var monday = document.getElementById("inlineCheckboxMonday").checked;
    var tuesday = document.getElementById("inlineCheckboxTuesday").checked;
    var wednesday = document.getElementById("inlineCheckboxWednesday").checked;
    var thursday = document.getElementById("inlineCheckboxThursday").checked;
    var friday = document.getElementById("inlineCheckboxFriday").checked;
    var saturday = document.getElementById("inlineCheckboxSaturday").checked;
    var sunday = document.getElementById("inlineCheckboxSunday").checked; 

    if(monday || tuesday || wednesday || thursday || friday || saturday || sunday){
        checkform = true;
    }else{
        $('#mestimetable').show();
        checkform = false;
    }

    if(coursename == "" || coursename == null){
        $('#coursename').addClass("red-border");
        $('#mescoursename').show();
        checkform = false;
    }

    if(coursebackground == "" || coursebackground == null){
        $('#coursebackground').addClass("red-border");
        $('#mescoursebackground').show();
        checkform = false;
    }else{
        let allowedExtension = ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp'];
        let type = document.getElementById('coursebackground').files[0].type;
        if(allowedExtension.indexOf(type)>-1){
            checkform = true;
        }else{
            $('#mestypeimage').show();
            checkform = false;
        }
    }

    if(videointro == "" || videointro == null){
        $('#videointro').addClass("red-border");
        $('#mesvideointro').show();
        checkform = false;
    }

    if(price == "" || price == null){
        $('#price').addClass("red-border");
        $('#mesprice').show();
        checkform = false;
    }

    if(description == "" || description == null){
        $('#description').addClass("red-border");
        $('#mesdescription').show();
        checkform = false;
    }

    if(required == "" || required == null){
        $('#description').addClass("red-border");
        $('#mesrequired').show();
        checkform = false;
    }

    if(gained == "" || gained == null){
        $('#gained').addClass("red-border");
        $('#mesgained').show();
        checkform = false;
    }

    if(openday == "" || openday == null){
        $('#openday').addClass("red-border");
        $('#mesopenday').show();
        checkform = false;
    }

    if(endday == "" || endday == null){
        $('#endday').addClass("red-border");
        $('#mesendday').show();
        checkform = false;
    }

    if(timetb == "" || timetb == null){
        $('#timetb').addClass("red-border");
        $('#mestimetable').show();
        checkform = false;
    }

    if(checkform == false){
        return false;
    }
})



$('#coursename').keyup(function(){
    $('#coursename').removeClass("red-border");
    $("#mescoursename").hide();
})

$('#coursebackground').change(function(){
    $('#coursebackground').removeClass("red-border");
    $("#mescoursebackground").hide();
    $('#mestypeimage').hide();
})

$('#videointro').keyup(function(){
    $('#videointro').removeClass("red-border");
    $("#mesvideointro").hide();
})

$('#price').keyup(function(){
    $('#price').removeClass("red-border");
    $("#mesprice").hide();
})

$('#description').keyup(function(){
    $('#description').removeClass("red-border");
    $("#mesdescription").hide();
})

$('#required').keyup(function(){
    $('#required').removeClass("red-border");
    $("#mesrequired").hide();
})

$('#gained').keyup(function(){
    $('#gained').removeClass("red-border");
    $("#mesgained").hide();
})

$('#openday').change(function(){
    $('#openday').removeClass("red-border");
    $("#mesopenday").hide();
})

$('#endday').change(function(){
    $('#endday').removeClass("red-border");
    $("#mesendday").hide();
})

$('#timetb').change(function(){
    $('#timetb').removeClass("red-border");
    $("#mestimetable").hide();
})

$('#inlineCheckboxMonday').change(function(){
    $("#mestimetable").hide();
})

$('#inlineCheckboxTuesday').change(function(){
    $("#mestimetable").hide();
})

$('#inlineCheckboxWednesday').change(function(){
    $("#mestimetable").hide();
})

$('#inlineCheckboxThursday').change(function(){
    $("#mestimetable").hide();
})

$('#inlineCheckboxFriday').change(function(){
    $("#mestimetable").hide();
})

$('#inlineCheckboxSaturday').change(function(){
    $("#mestimetable").hide();
})

$('#inlineCheckboxSunday').change(function(){
    $("#mestimetable").hide();
})































































