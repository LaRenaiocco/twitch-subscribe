"use strict"

$('#twitch-form').on('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('name', $('#sub-name').val());
    // use checkEmail and checkPhone functions here to verify input
    formData.append('email', $('#sub-email').val());
    formData.append('phone', $('#sub-phone').val());
    console.log(formData)


});

// check that email follows correct conventions
function checkEmail() {
    console.log('checkEmail triggered');
};

// Check that phone number is 10 digits long
function checkPhone() {
    console.log('checkPhone triggered');
};

// SHOW TEXT INPUT FIELD ONLY IF SMS BOX IS CHECKED

// if ($('#sms-checkbox input:checked')) {
//     $('sub-phone-div').show()
// }
