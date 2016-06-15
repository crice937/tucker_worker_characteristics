var dojoConfig = {
  packages: [{
    name: "bootstrap",
    location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
  },
  {
    name: "calcite-maps",
    location: "https://esri.github.io/calcite-maps/dist/js/dojo"
  }]
};

require([
      // ArcGIS JS
      "esri/views/MapView",
      "esri/WebMap",
      "esri/widgets/Legend",
      "esri/widgets/Search",
      "esri/widgets/Home",

      // Bootstrap
      "bootstrap/Collapse", 

      // Calcite-maps
      "calcite-maps/calcitemaps-v0.2",
      "dojo/domReady!"
      ], function(MapView, WebMap, Legend, Search, Home) {

      // Webmap  
      var webmap = new WebMap({
        portalItem: {
          id: "6de0c1835caa41ff893505c003123f6d"
        }
      });

      // View
      var view = new MapView({
        map: webmap,
        container: "mapViewDiv",
        padding: {
          top: 64
        }
      });

      // Legend
      view.then(function(result) {
        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: view.map.layers.items[0],
            title: ""
          }]
        });

        view.ui.add(legend, "bottom-right");

        //Locator
        var searchWidget = new Search({
          view: view
        });
        searchWidget.startup();

        view.ui.add(searchWidget, {
          position: "top-right",
          index: 0
        });

        //Home button
        var homeWidget = new Home({
          view: view
        });

        view.ui.add(homeWidget, "top-left");
      });
    });