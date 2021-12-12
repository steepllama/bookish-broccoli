$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    {
    $('.saveBtn').click(function () {
        var am8 = document.getElementById('8am').value;
        localStorage.setItem('8task', am8 );
        var am9 = document.getElementById('9am').value;
        localStorage.setItem('9task', am9 );
        var am10 = document.getElementById('10am').value;
        localStorage.setItem('10task', am10);
        var am11 = document.getElementById('11am').value;
        localStorage.setItem('11task', am11);
        var pm12 = document.getElementById('12pm').value;
        localStorage.setItem('12task', pm12);
        var pm1 = document.getElementById('1pm').value;
        localStorage.setItem('1task', pm1);
        var pm2 = document.getElementById('2pm').value;
        localStorage.setItem('2task', pm2);
        var pm3 = document.getElementById('3pm').value;
        localStorage.setItem('3task', pm3);
        var pm4 = document.getElementById('4pm').value;
        localStorage.setItem('4task', pm4);
        var pm5 = document.getElementById('5pm').value;
        localStorage.setItem('5task', pm5);
    })
    }

    var morn8 = localStorage.getItem('8task');
    document.getElementById('8am').value = morn8;
    var morn9 = localStorage.getItem('9task');
    document.getElementById('9am').value = morn9;
    var morn10 = localStorage.getItem('10task');
    document.getElementById('10am').value = morn10;
    var morn11 = localStorage.getItem('11task');
    document.getElementById('11am').value = morn11;
    var after12 = localStorage.getItem('12task');
    document.getElementById('12pm').value = after12;
    var after1 = localStorage.getItem('1task');
    document.getElementById('1pm').value = after1;
    var after2 = localStorage.getItem('2task');
    document.getElementById('2pm').value = after2;
    var after3 = localStorage.getItem('3task');
    document.getElementById('3pm').value = after3;
    var after4 = localStorage.getItem('4task');
    document.getElementById('4pm').value = after4;
    var after5 = localStorage.getItem('5task');
    document.getElementById('5pm').value = after5;
    
});