function myFunction(){
   let userName = document.getElementById("user").value;
    let passWord = document.getElementById("pass").value;

    var Name = "admin";
    var Pass = "12345";

    if(userName == "" && passWord == ""){
        document.getElementById("errUser").innerHTML="Không được để trống";
        document.getElementById("errPass").innerHTML="Không được để trống";
   
    }else if(passWord == ""){
        document.getElementById("errPass").innerHTML="Không được để trống";
        document.getElementById("errUser").innerHTML="";
        document.getElementById("errtb1").innerHTML="";
    }else if(userName == ""){
        document.getElementById("errUser").innerHTML="Không được để trống";
        document.getElementById("errPass").innerHTML="";
        document.getElementById("errtb1").innerHTML="";
    }else if(userName ==Name && passWord ==Pass){
        document.getElementById("errtb1").innerHTML="Đăng nhập thành công";
        document.getElementById("errtb1").style.color="blue";
        document.getElementById("errUser").innerHTML="";
        document.getElementById("errPass").innerHTML="";
        document.getElementById("pass").value = "";
        document.getElementById("user").value="";
    }else{
        document.getElementById("errtb1").innerHTML="Tài khoản hoặc mật khẩu không đúng";
        document.getElementById("errUser").innerHTML="";
        document.getElementById("errPass").innerHTML="";
    }
}
function load(){
    document.getElementById("errUser").innerHTML="";
    document.getElementById("errPass").innerHTML="";
    document.getElementById("errtb1").innerHTML="";
    document.getElementById("pass").value = "";
    document.getElementById("user").value="";
}

//==================================================================================
// ===================================================================================
 function checkChangePass(){
    let OldPass = document.getElementById("oldpass").value;
    let NewPass = document.getElementById("newpass").value;
    let reNewPass = document.getElementById("renewpass").value;
    var MK = '12345';

    if(OldPass == "" && NewPass == "" && reNewPass == ""){
        document.getElementById("erroldpass").innerHTML="Vui lòng nhập mật khẩu cũ";
        document.getElementById("errnewpass").innerHTML="Vui lòng nhập mật khẩu mơi";
        document.getElementById("errrenewpass").innerHTML="Vui lòng nhập lại mật khẩu mới";
    }else if(OldPass == "" && NewPass == ""){
        document.getElementById("errnewpass").innerHTML="Vui lòng nhập mật khẩu mơi";
        document.getElementById("erroldpass").innerHTML="Vui lòng nhập mật khẩu cũ";
        document.getElementById("errrenewpass").innerHTML="";
    }else if(NewPass == "" && reNewPass == ""){
        document.getElementById("errnewpass").innerHTML="Vui lòng nhập mật khẩu mới";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="Vui lòng nhập lại mật khẩu mới";
    }else if(reNewPass == "" && OldPass == ""){
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("erroldpass").innerHTML="Vui lòng nhập mật khẩu cũ";
        document.getElementById("errrenewpass").innerHTML="Vui lòng nhập lại mật khẩu mới";
    }else if(OldPass == ""){
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("erroldpass").innerHTML="Vui lòng nhập mật khẩu cũ";
        document.getElementById("errrenewpass").innerHTML="";
    }else if(NewPass == ""){
        document.getElementById("errnewpass").innerHTML="Vui lòng nhập mật khẩu mới";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="";
    }else if(reNewPass == ""){
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="Vui lòng nhập lại mật khẩu mới";
    }else if(OldPass != MK){
        document.getElementById("erroldpass").innerHTML="Chưa chính xác";
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="";
    }else if(reNewPass != NewPass ){
        document.getElementById("errrenewpass").innerHTML="Chưa chính xác";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errnewpass").innerHTML="";
    }else if(OldPass == MK && reNewPass==NewPass){
        document.getElementById("errtb2").innerHTML="Đổi mật khẩu thành công";
        document.getElementById("errtb2").style.color="blue";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="";
    }
 }
function reload(){
    document.getElementById("erroldpass").innerHTML="";
    document.getElementById("errnewpass").innerHTML="";
    document.getElementById("errrenewpass").innerHTML="";
    document.getElementById("errtb2").innerHTML="";
    document.getElementById("oldpass").value="";
    document.getElementById("newpass").value="";
    document.getElementById("renewpass").value="";

}


