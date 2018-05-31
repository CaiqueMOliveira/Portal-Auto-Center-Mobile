// Host
var host = '192.168.0.100';
// var host = '192.168.0.110';
// var host = '127.0.0.1';
	
// API Routes 
var api = {
	'authentication':`http://${host}/Portal-Auto-Center-API/api/v1/user/`,
	'state':`http://${host}/Portal-Auto-Center-API/api/v1/state/`,
	'product':`http://${host}/Portal-Auto-Center-API/api/v1/product/`,
	'vehicle':`http://${host}/Portal-Auto-Center-API/api/v1/vehicle/`,
	'fuel':`http://${host}/Portal-Auto-Center-API/api/v1/fuel/`,
	'fuel_supply':`http://${host}/Portal-Auto-Center-API/api/v1/fuel/supply/`,
	'service':`http://${host}/Portal-Auto-Center-API/api/v1/service/`,
	'service_details':`http://${host}/Portal-Auto-Center-API/api/v1/service/details/`,
	'service_provider':`http://${host}/Portal-Auto-Center-API/api/v1/service/provider/`,
	'supply_register':`http://${host}/Portal-Auto-Center-API/api/v1/supplyRegister/`,
	'google_geocode':`https://maps.googleapis.com/maps/api/geocode/json?latlng=`
};