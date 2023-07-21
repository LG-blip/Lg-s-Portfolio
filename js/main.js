const submitBtn = document.getElementById('btnsubmit');

submitBtn.onclick = function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "g021306@gmail.com",
        Password : "ABDD5682CBC43E67A2396799F22E4B9B71B8",
        To : "g021306@gmail.com",
        From : "g021306@gmail.com",
        Subject : "New Email from",
        Body : document.getElementById('name').value  + "\n" + "Email :" + 
        document.getElementById('email').value + "\n" + "Description :" + " " +document.getElementById('textarea').value
    }).then(
      message => alert("Message sent successfully!")
    );
}

// var typed = new Typed('#element', {
//     strings: ['Android Developer', 'Blogger', 'Web Developer'],
//     typeSpeed: 70,
// });

