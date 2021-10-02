function focused() {
    Array
        .from(document.getElementsByTagName('input'))
        .forEach(f => {
            f.addEventListener('focus', onfocus);
            f.addEventListener('blur', onblur);
        })
    ;

    function onfocus(e){
        e.target.parentNode.className = 'focused';
    }

    function onblur(e){
        e.target.parentNode.className = '';
    }
}