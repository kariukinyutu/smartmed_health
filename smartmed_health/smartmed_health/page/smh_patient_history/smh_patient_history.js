frappe.pages['smh_patient_history'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'SMH Patient History',
		single_column: true
	});
}