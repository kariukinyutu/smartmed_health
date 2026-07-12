// Copyright (c) 2024, ITeers Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Patient Visit', {
	// refresh: function(frm) {

	// }
});

$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
});
