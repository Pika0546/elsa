const validateEmail = (email) => {
    return email.match(/^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/);
}

function validatePhoneNumber(number) {
return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

$(document).ready(function(){
    $('input[name="course-check"]').change((e)=>{
        const val = parseInt($('input[name="course-check"]:checked').val());
        if(val === 1){
            $("#one-year-price").show();
            $("#life-time-price").hide();
            $("#invalid-course-check").hide();
        }
        else if(val === 2){
            $("#one-year-price").hide();
            $("#invalid-course-check").hide();
            $("#life-time-price").show();
        }else{
            $("#one-year-price").hide();
            $("#life-time-price").hide();
        }
    });
    const form1 = document.getElementById("form1");
    document.getElementById("name").oninput = (e) => {
        const name = e.target.value;
        if(name.length > 0){
            $("#invalid-name").hide();
        }
        else{
            $("#invalid-name").show();
        }
    }
    document.getElementById("email").oninput = (e) =>{
        const email = document.getElementById("email").value;
        if(validateEmail(email)){
            $("#invalid-email").hide();
        }
        else{
            $("#invalid-email").show();
        }
    }

    document.getElementById("phone").oninput = (e) => {
        const phone = document.getElementById("phone").value;
        if(validatePhoneNumber(phone)){
            $("#invalid-phone").hide();
        }
        else{
            $("#invalid-phone").show();
        }
    }
    form1.addEventListener("submit", (e)=>{
        e.preventDefault();
        let isValidForm = true;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        if(name.length > 0){
            $("#invalid-name").hide();
        }
        else{
            isValidForm = false;
            $("#invalid-name").show();
        }


        if(validateEmail(email)){
            $("#invalid-email").hide();
        }
        else{
            isValidForm = false;
            $("#invalid-email").show();
        }

        if(validatePhoneNumber(phone)){
            $("#invalid-phone").hide();
        }
        else{
            isValidForm = false;
            $("#invalid-phone").show();
        }

        if($('input[name="course-check"]:checked').toArray().length > 0){
            $("#invalid-course-check").hide();
        }
        else{
            isValidForm = false;
            $("#invalid-course-check").show();
        }

        if(isValidForm){
            alert("Đăng kí thành công!");
        }
        else{
            alert("Đăng kí thất bại! Thông tin không hợp lệ!");
        }
    })

    window.addEventListener("pagehide", (e)=>{
        console.log("hide")
    })
});