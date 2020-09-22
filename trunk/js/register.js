$().ready(function() {
    // 在键盘按下并释放及提交后验证提交表单
      $("#signupForm").validate({
        rules: {
          username: {
            required: true,
            myUser: 2
          },
          password: {
            required: true,
            myPwd: 5
          },
          confirm_password: {
            required: true,
            myRepwd: 5,
            equalTo: "#password"
          },
          tel: {
            required: true,
            myTel: 11
          },
          verification: {
            required: true,
            minlength: 4
          },
          phone_code: {
            required: true,
            minlength: 4
          },
          agree: "required"
        },
        messages: {
          firstname: "请输入您的",
          lastname: "请输入您的名字",
          username: {
            required: "请输入用户名",
            minlength: "用户名必需由两个字符组成"
          },
          password: {
            required: "请输入密码",
            minlength: "密码长度不能小于 5 个字符"
          },
          confirm_password: {
            required: "请输入密码",
            minlength: "密码长度不能小于 5 个字符",
            equalTo: "两次密码输入不一致"
          },
          tel: {
            required: "请输入手机号码",
            minlength: "手机号码长度不能小于 11 个字符",
            
          },
          verification: {
            required: "请输入验证码",
            minlength: "验证码长度不能小于 4个字符",
            
          },
          phone_code: {
            required: "请输入手机验证码",
            minlength: "手机验证码长度不能小于 4个字符",
            
          },
          agree: "请接受我们的声明",
          
         }
        })
   }); 

    jQuery.validator.addMethod("myUser", function(value, element) {   
        var tel = /^[A-Za-z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的用户名");

    jQuery.validator.addMethod("myPwd", function(value, element) {   
        var tel = /^[A-Za-z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的密码");

    jQuery.validator.addMethod("myRepwd", function(value, element) {   
        var tel = /^[A-Za-z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请与上面密码保持一致");
    jQuery.validator.addMethod("myTel", function(value, element) {   
        var tel = /^1[0-9]{10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的手机号码");
    
let loginBtn = document.querySelector('#content');
let username = document.querySelector('#username');
let delImg = document.querySelector('.delImg');
let pwdBox = document.querySelector('#pwd');
let eyeImg = document.querySelector('.eyeImg');
let nameMsgBox = document.querySelector('#nameMsgBox');
let pwdMsgBox = document.querySelector('#pwdMsgBox');
let loginbox = document.getElementById('loginbox')
console.log(loginBtn);
    let flagObj = {
        userflag:false,
        pwdflag:false
    }
    username.addEventListener('input',function(){
      let str = this.value;
      if(str.length>0){
          delImg.style.display = 'block';
      }else{
          delImg.style.display = 'none';
      }
  })
  password.addEventListener('input',function(){
      let str = this.value;
      if(str.length>0){
        eyeImg.style.display = 'block';
      }else{
        eyeImg.style.display = 'none';
      }
  })
  confirm_password.addEventListener('input',function(){
      let str = this.value;
      if(str.length>0){
        eyeImg.style.display = 'block';
      }else{
        eyeImg.style.display = 'none';
      }
  })
  tel.addEventListener('input',function(){
      let str = this.value;
      if(str.length>0){
        eyeImg.style.display = 'block';
      }else{
        eyeImg.style.display = 'none';
      }
  })

// 表单事件
signupForm.addEventListener('submit',function(e){
  // e.preventDefault();
  // alert(flagObj.userflag===false);
  if(flagObj.userflag===false){
      
      nameMsgBox.style.color = 'red';
      username.style.borderColor = 'red';
      e.preventDefault();

      // 阻止默认提交
      // e.preventDefault();
  }else if(!flagObj.pwdflag){
     
      pwdMsgBox.style.color = 'red';
      pwdBox.style.borderColor = 'red';
      e.preventDefault();
  }
})
// 删除图片点击事件
delImg.addEventListener('click',function(){
  // 清空文本
  username.value = '';
  // 隐藏文本
  this.style.display = 'none';
})

// 眼睛点击事件
let eyeFlag = false;
eyeImg.addEventListener('click',function(){
  // 闭眼
  if(!eyeFlag){
      eyeImg.src = './images/open.png';
      password.type = 'text';
  }else{
      eyeImg.src = './images/close.png';
      password.type = 'password';
  }
  eyeFlag = !eyeFlag;
})

// 提交禁用
let $submit = $('.submit');
$('#checkbox').click(function(){
  let bool = $(this).prop('checked');
  console.log(bool);
  if(bool) {
    $submit.prop('disabled',false)
    $submit.addClass('bgcf60').removeClass('bgf5')
    // alert(1)  
  }else{
    $submit.prop('disabled',true)
    $submit.addClass('bgf5').removeClass('bgcf60')
  }
})

// 验证码
$(function() {
  code_draw();
  // 点击后刷新验证码
  $("#canvas").on('click', function() {
    code_draw();
  })
  
  $(".submit").on('click', function() {
    // 将输入的内容转为大写，可通过这步进行大小写验证
    var val = $(".input-val").val().toLowerCase();
    // 获取生成验证码值
    var num = $('#canvas').attr('data-code');
    if (val == '') {
      alert('请输入验证码！');
    } else if (val == num) {
      alert('提交成功！');
      $(".input-val").val('');
  
    } else {
      alert('验证码错误！请重新输入！');
      $(".input-val").val('');
    }
  })
})
