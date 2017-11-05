var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 24.837466,
				lng: 121.787645
			  });
			  
			  var marker = map.addMarker({
				lat: 24.837466,
				lng: 121.787645,
	            title: 'Company, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 24.837466,
		        lng : 121.787645
		      });
		    });
		}        

    };
}();