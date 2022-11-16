document.getElementById("icon_close").onclick = function () {
    document.getElementById("form").style.display = 'none';
    document.getElementById('btn_show').style.display = 'block';
}
document.getElementById('icon_close_change').onclick = function(){
    document.getElementById('reform').style.display = 'none';
    document.getElementById('btn_show').style.display = 'block';
}
document.getElementById("btn_show").onclick = function(){
    document.getElementById("form").style.display='block';
    document.getElementById('btn_show').style.display='none';
    reload();
}
document.getElementById('btn_forgot').onclick= function(){
    document.getElementById("reform").style.display='block';
    document.getElementById('form').style.display='none';
    reload();
}
document.getElementById('btn_back').onclick=function(){
    document.getElementById('form').style.display='block';
    document.getElementById('reform').style.display='none';
    reload();
    
    


}

var Name = "admin";
var Pass = "12345";

function checkForm(){
       
    let userName = document.getElementById("user").value;
    let passWord = document.getElementById("pass").value;
    
   

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
        document.getElementById("btn_DN").innerHTML="Đăng nhập thành công";
        document.getElementById("form").style.display = 'none';
        document.getElementById('btn_show').style.display = 'block';
        document.getElementById("pass").value = "";
        document.getElementById("user").value="";
        document.getElementById("errtb1").innerHTML="";
    }else if(document.getElementById("pass").value == document.getElementById("newpass").value){
        
        document.getElementById("btn_DN").innerHTML="Đăng nhập thành công";
        document.getElementById("form").style.display = 'none';
        document.getElementById('btn_show').style.display = 'block';
        document.getElementById('user').value='';
        document.getElementById('pass').value='';
        document.getElementById("errtb1").innerHTML="";
        reload();
    }else {
        document.getElementById("errtb1").innerHTML="Tài khoản hoặc mật khẩu không đúng";
        
    }
}

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
    }else if(NewPass == MK ){
        document.getElementById("errnewpass").innerHTML="Phải khác mật khẩu cũ";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="";
    }else if(OldPass != MK){
        document.getElementById("erroldpass").innerHTML="Chưa chính xác";
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="";
    }else if(reNewPass != NewPass ){
        document.getElementById("errrenewpass").innerHTML="Chưa chính xác";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errnewpass").innerHTML="";
    }else if(OldPass == MK && reNewPass == NewPass){
        alert("Đổi mật khẩu thành công");
        Pass = NewPass;
        document.getElementById('btn_show').style.display="none";
        document.getElementById("reform").style.display='none';
        document.getElementById("form").style.display = 'block';
        document.getElementById("oldPass").value="";
        document.getElementById("newPass").value="";
        document.getElementById("renewPass").value="";
        document.getElementById("erroldpass").innerHTML="";
        document.getElementById("errnewpass").innerHTML="";
        document.getElementById("errrenewpass").innerHTML="";
        
       
    }
    
    
}

function reload(){
            document.getElementById('user').value='';
            document.getElementById('pass').value='';
            document.getElementById('errUser').innerHTML='';
            document.getElementById('errPass').innerHTML='';
            document.getElementById("oldPass").value='';
            document.getElementById("newPass").value='';
            document.getElementById("renewPass").value='';
            document.getElementById('errnewpass').innerHTML='';
            document.getElementById('erroldpass').innerHTML='';
            document.getElementById('errrenewpass').innerHTML='';
            document.getElementById('errtb1').innerHTML='';
            document.getElementById('errtb2').innerHTML='';

}
function myFunction(){
    document.getElementById('btn_login').innerHTML='Loading...';
    setTimeout(function(){
        checkForm();
        document.getElementById('btn_login').innerHTML='Login';
    },100);
}