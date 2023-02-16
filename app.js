function signup(){
    var a = document.getElementById('yName').value; 
    var b = document.getElementById('email1').value; 
    var c = document.getElementById('pass1').value; 
    // var d = document.getElementById('pass1').value;
localStorage.setItem('Yname',a)
localStorage.setItem('email1',b)
localStorage.setItem('pass1',c)
// localStorage.setItem('pass1',d)
alert('Data saved successfully')
window.location.href= 'login.html'
}


  function result(){
    var score=0;
    if (document.getElementById('correct1').checked)
    {
        score++;
    }
    if (document.getElementById('correct2').checked)
    {
        score++;
    }
    if (document.getElementById('correct3').checked)
    {
        score++;
    }
    if (document.getElementById('correct4').checked)
    {
        score++;
    }
    if (document.getElementById('correct5').checked)
    {
        score++;
    }
    if (document.getElementById('correct6').checked)
    {
        score++;
    }
    if (document.getElementById('correct7').checked)
    {
        score++;
    }
    if (document.getElementById('correct8').checked)
    {
        score++;
    }
    if (document.getElementById('correct9').checked)
    {
        score++;
    }
    if (document.getElementById('correct10').checked)
    {
        score++;
    }
    alert("your score is:"+score)
}
