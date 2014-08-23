var test = require('grape'),
    crel = require('crel'),
    cloneWithStyles = require('../');


window.addEventListener('load', function(){

    var styles = crel('style', '.thing{border:solid 1px #F00;color:#F00;width:200px;} .thing span{color:#0F0;width:100px;display:inline-block;}'),
        testElement;

    crel(document.body, styles, 
        testElement = crel('div', {class:'thing'}, 
            crel('span', 'things')
        )
    );

    test('a', function(t){
        t.plan(4);

        var clone = cloneWithStyles(testElement);

        t.equal(clone.style['width'], '200px');
        t.equal(clone.style['border-width'], '1px');
        t.equal(clone.style['border-style'], 'solid');
        t.equal(clone.children[0].style['width'], '100px');

    });
    
})