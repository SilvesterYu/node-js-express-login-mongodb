var testButton = document.querySelector('#testButton');

var sendInfo = {
    "username": "xxx",
    "email": "xxx@xmail.com",
    "password": "xyxyxyxy123",
    "roles": ["user", "moderator"]
}

function sendReq() {
    console.log("sending info");
    jQuery.ajax({
        method: 'POST',
        url: '/api/auth/signup',
        data: JSON.stringify(sendInfo)
    })
    console.log("info sent");
}

testButton.onclick = sendReq;