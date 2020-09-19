// 文档加载事件
$(function (){
    $('.btn p').click(function (){
        // 选中元素所展示的激活样式
        $(this).addClass('active').siblings().removeClass('active')
        // 展示相应的内容
        let index = $(this).index()
        $('.list').hide().eq(index).show()
    })
  
})

let loginBtn = document.querySelector('#loginBox');
let username = document.querySelector('#username');
let delImg = document.querySelector('.delImg');
let pwdBox = document.querySelector('#pwd');
let eyeImg = document.querySelector('.eyeImg');
let nameMsgBox = document.querySelector('#nameMsgBox');
let pwdMsgBox = document.querySelector('#pwdMsgBox');
let loginbox = document.getElementById('loginbox')
console.log(loginBtn);
// let myform = document.querySelector("#myform")
    let flagObj = {
        userflag:false,
        pwdflag:false
    }
// 文本框的输入事件
username.addEventListener('input',function(){
    let str = this.value;
    if(str.length>0){
        delImg.style.display = 'block';
    }else{
        delImg.style.display = 'none';
    }
})
pwdBox.addEventListener('input',function(){
    let str = this.value;
    if(str.length>0){
      eyeImg.style.display = 'block';
    }else{
      eyeImg.style.display = 'none';
    }
})
// 用户认证
username.addEventListener('blur',function(){
    let str = username.value;
    let reg = /^[a-zA-Z0-9_]{4,10}$/;
    let bool = reg.test(str);
    console.log(bool);
    if(bool){
        nameMsgBox.innerHTML = '验证通过';
        nameMsgBox.style.color = 'green';
        username.style.borderColor = 'green';
        flagObj.userflag = true;
    }else{
        nameMsgBox.innerHTML = '请输入正确用户名';
        nameMsgBox.style.color = 'red';
        username.style.borderColor = 'red';
        flagObj.userflag = false;
    }
})
// 密码认证
pwdBox.addEventListener('blur',function(){
    let str = pwdBox.value;
    let reg = /^[a-zA-Z0-9_]{6,10}$/;
    let bool = reg.test(str);
    console.log(bool);
    if(bool){
        pwdMsgBox.innerHTML = '验证通过';
        pwdMsgBox.style.color = 'green';
        pwdBox.style.borderColor = 'green';
        flagObj.pwdflag = true;
    }else{
        pwdMsgBox.innerHTML = '请输入正确密码';
        pwdMsgBox.style.color = 'red';
        pwdBox.style.borderColor = 'red';
        flagObj.pwdflag = false;
    }
})
// 表单事件
myform.addEventListener('submit',function(e){
    // e.preventDefault();
    // alert(flagObj.userflag===false);
    if(flagObj.userflag===false){
        nameMsgBox.innerHTML = '请输入正确用户名';
        nameMsgBox.style.color = 'red';
        username.style.borderColor = 'red';
        e.preventDefault();

        // 阻止默认提交
        // e.preventDefault();
    }else if(!flagObj.pwdflag){
        pwdMsgBox.innerHTML = '请输入正确密码';
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
        pwdBox.type = 'text';
    }else{
        eyeImg.src = './images/close.png';
        pwdBox.type = 'password';
    }
    eyeFlag = !eyeFlag;
    
})
