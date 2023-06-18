dragElement(document.getElementById("myTable"));


function dragElement(elmnt) {
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        //Hiện tọa độ X, Y lên thanh StatusBar
        document.getElementById("locationX").innerHTML = elmnt.style.top;
        document.getElementById("locationY").innerHTML = elmnt.style.left;
        console.log('elmnt.style.top=' + elmnt.style.top);
        console.log('elmnt.style.left=' + elmnt.style.left);


        myStorage = window.localStorage;
        myStorage.setItem('locationX', (elmnt.offsetTop - pos2) + "px");
        myStorage.setItem('locationY', (elmnt.offsetLeft - pos1) + "px");



    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

}