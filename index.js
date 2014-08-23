function copyStyles(fromElement, toElement){
    var computed = document.defaultView.getComputedStyle(fromElement, '');

    for(var key in computed){
        toElement.style[key] = computed[key];
    }
}

function cloneStyles(fromElement, toElement){
    for (var i = 0; i < fromElement.children.length; i++) {
        cloneStyles(fromElement.children[i], toElement.children[i]);
    }
    copyStyles(fromElement, toElement);    
}

function clone(fromElement){
    var clone = fromElement.cloneNode(true);

    cloneStyles(fromElement, clone);

    return clone;
}

module.exports = clone;