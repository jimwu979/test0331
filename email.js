//引用 nodemailer
var nodemailer = require('nodemailer');

//宣告發信物件
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'test0331.jim@gmail.com',
        pass: 'testtesttest0331'
    }
});

var options = {
    //寄件者
    from: 'steve@fun-la.com',
    //收件者
    to: 'steve@fun-la.com',
    //副本
    cc: 'jim@uxi-design.com',
    //密件副本
    bcc: 'housemeow@gmail.com',
    //主旨
    subject: '這是 node.js 發送的測試信件', // Subject line
    //純文字
    text: 'Hello world2', // plaintext body
    //嵌入 html 的內文
    html: '<div style="width:380px;height:240px;background:url(cid:#001)"><h1 style="color:#ffffff">Done! embed background image</h1></div>',
    //附件檔案
    attachments: [{
        filename: 'AI.png',
        path: 'public/img/AI.png',
        cid: '#001' //same cid value as in the html img src
    }]
};

//發送信件方法
transporter.sendMail(options, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('訊息發送: ' + info.response);
    }
});