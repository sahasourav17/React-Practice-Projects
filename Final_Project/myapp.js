let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify');
function set(){
    // console.log(elements);
    for (let i = 0; i < elements.length; i++) {

        // get element value and property
        let cssProperty = elements[i].getAttribute('id');
        let cssValue = elements[i].value;

        console.log(cssProperty,cssValue);

        // way 1
        // div.style.setProperty(cssProperty,cssValue);

        //way 2
        div.style[cssProperty] = cssValue;
    }
}
document.getElementById('set').addEventListener('click',set);