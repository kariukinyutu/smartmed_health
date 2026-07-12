frappe.pages['smh-frontoffice'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		//title:['{{frappe.session.user}}'],
		single_column: true
	});
	$(frappe.render_template("smh_frontoffice", {})).appendTo(page.body);

	let $btn = page.set_primary_action('New Patient Visit', () => frappe.new_doc("SMH Patient Visit"), 'octicon octicon-plus')
}
