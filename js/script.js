function planClass1() {
    if (document.getElementById('p1')) {
        document.getElementById('btn1').style.backgroundColor = 'rgb(42, 175, 175)';
        document.getElementById('hd1').style.backgroundColor = 'rgb(42, 175, 175)';
        return
    } };


function planClass2() {
    if  (document.getElementById('p2')) {
        document.getElementById('btn2').style.backgroundColor = 'rgb(42, 175, 175)';
        document.getElementById('hd2').style.backgroundColor = 'rgb(42, 175, 175)';
    }};  
    
    
function planClass3() {
    if (document.getElementById('p3')) {
        document.getElementById('btn3').style.backgroundColor = 'rgb(42, 175, 175)';
        document.getElementById('hd3').style.backgroundColor = 'rgb(42, 175, 175)';
        return;
    }};



    function planClassOut1() {
        if (document.getElementById('p1')) {
            document.getElementById('btn1').style.backgroundColor = 'rgb(82, 88, 84)';
            document.getElementById('hd1').style.backgroundColor = 'rgb(82, 88, 84)';
            return
        } };
    
    
    function planClassOut2() {
        if  (document.getElementById('p2')) {
            document.getElementById('btn2').style.backgroundColor = 'rgb(82, 88, 84)';
            document.getElementById('hd2').style.backgroundColor = 'rgb(82, 88, 84)';
        }};  
        
        
    function planClassOut3() {
        if (document.getElementById('p3')) {
            document.getElementById('btn3').style.backgroundColor = 'rgb(82, 88, 84)';
            document.getElementById('hd3').style.backgroundColor = 'rgb(82, 88, 84)';
            return;
        }};


    document.getElementById('p1').addEventListener('mouseenter', planClass1)
    document.getElementById('p2').addEventListener('mouseenter', planClass2)
    document.getElementById('p3').addEventListener('mouseenter', planClass3)
    document.getElementById('p1').addEventListener('mouseleave', planClassOut1)
    document.getElementById('p2').addEventListener('mouseleave', planClassOut2)
    document.getElementById('p3').addEventListener('mouseleave', planClassOut3)



    document.querySelector('header .btn').addEventListener('click', function welcome() {
        document.querySelector('header h1').innerHTML = 'HA! HA! HA! Dark mode...'
        document.querySelector('header h1').style.color = 'rgb(82, 88, 84)'
        document.querySelector('body').style.backgroundColor = 'rgb(52, 56, 53)'
        document.querySelectorAll('a').style.color = 'white'
    });
