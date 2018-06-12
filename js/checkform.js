function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);

}
var generateError = function(text){
    var error = document.createElement('span');
            error.className = "errorfield";
            error.innerHTML = text;
    return error;
}

var removeValidation =function(form){
    var fields = document.querySelector('.search__input');
    var errors = document.getElementsByClassName('errorfield');
    fields.classList.remove("error");
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
        }
}

var checkPresent =function(form,fields){

        if (!fields.value){
            var error = generateError(' Cannot be blank');
            insertAfter(error,fields);
            fields.classList.add("error");
        }
        else
        document.getElementById('myform').submit();
       
    
};
        


function myForm () {
    var form = document.querySelector('.search');
    var fields = document.querySelector('.search__input');
    event.preventDefault();
    removeValidation(form);
    checkPresent(form,fields);

};