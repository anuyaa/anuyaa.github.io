'use strict';
const moment = require('moment');

class DateTimeUtil {

	constructor (){
		this.setMomentLocale();
	}

	setMomentLocale (argLocale){
		if(!argLocale){
			argLocale = 'en';
		}
		moment.locale(argLocale); // default the locale to English
	}

	getMomentLocale (){
		return moment.locale(); // default the locale to English
	}

	getDateToEvent (argTime) {
		if(!argTime){
			return '';
		}
		return moment.utc(new Date(argTime).toISOString()).local().format('hh:mm A');
	}
}

module.exports = new DateTimeUtil();
