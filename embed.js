( function() {

if (window.he_width === undefined)
	he_width = 550;
if (window.he_height === undefined)
	he_height = 350;
if (window.he_zoom === undefined || he_zoom < 0 || he_zoom > 18)
	he_zoom = 11;
if (window.he_maptype === undefined || !(he_maptype == 'h' || he_maptype == 'm' || he_maptype == 'k' || he_maptype == 'p' || he_maptype == 'osm'))
	he_maptype = 'm';

if (window.he_show_aprs === undefined)
	he_show_aprs = 't';
if (window.he_show_aprs_w === undefined)
	he_show_aprs_w = 't';
if (window.he_show_aprs_i === undefined)
	he_show_aprs_i = 't';
if (window.he_show_ais === undefined)
	he_show_ais = 't';
if (window.he_hide_tcp === undefined)
	he_hide_tcp = 0;
if (window.he_show_others === undefined)
	he_show_others = 0;

document.write(
	'<iframe name="aprshefi_map" id="aprshefi_map"'
	+ ' src="http://aprs.fi/embedded?'
	+ 'width=' + he_width + '&amp;height=' + he_height
	+ '&amp;z=' + he_zoom
	+ ((window.he_track === undefined) ? '' : '&amp;he_track=' + he_track)
	+ ((window.he_lat === undefined || window.he_lng === undefined || window.he_track !== undefined)
		? '' : '&amp;lat=' + he_lat +'&amp;lng=' + he_lng)
	+ '&amp;maptype=' + he_maptype
	+ '&amp;show_others=' + he_show_others
	+ '&amp;show_aprs=' + he_show_aprs
	+ '&amp;show_aprs_w=' + he_show_aprs_w
	+ '&amp;show_aprs_i=' + he_show_aprs_i
	+ '&amp;show_ais=' + he_show_ais
	+ '&amp;hide_tcp=' + he_hide_tcp
	+ '&amp;key=34e640cddcfc5d5de228c969d24565d2'
	+ '"'
	+ ' marginwidth="0" marginheight="0"'
	+ ' vspace="0" hspace="0" allowtransparency="true"'
	+ ' frameborder="0" scrolling="no" width="' + he_width + '" height="' + he_height + '"></iframe>\n'
);

})()
