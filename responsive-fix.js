(function () {
  var breakpoint = 768;
  var resizeTimer = null;
  var stabilizeTimer = null;

  window.__responsiveFixLoaded = true;

  function applyStyles(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
  }

  function setResponsiveWidth(node) {
    node.style.width = "100%";
    node.style.maxWidth = "100%";
    node.style.minWidth = "0";
  }

  function runFix() {
    window.__responsiveFixRanAt = Date.now();

    if (window.innerWidth > breakpoint) {
      document.documentElement.style.overflowX = "";
      if (document.body) {
        document.body.style.overflowX = "";
      }
      return;
    }

    document.documentElement.style.overflowX = "hidden";
    if (document.body) {
      document.body.style.overflowX = "hidden";
    }

    applyStyles("img,svg,video,canvas,iframe", function (node) {
      node.style.maxWidth = "100%";
      node.style.height = "auto";
    });

    applyStyles("iframe,.fb_iframe_widget_fluid_desktop iframe", function (node) {
      node.style.maxWidth = "100%";
      node.style.minWidth = "0";
    });

    applyStyles(
      ".wrapper,.boxinner,.mainArea,#commonArea,.layout,.oh,.headerUpper,.headerLower,.ddMenu,.ddMenuInner,.topicPathList,#seriesCommodityList,.dv_recommend,.dv_rc_items,#colorbox,#cboxWrapper,#cboxContent,.ccm-image-slider-container,.ccm-image-slider,.ccm-image-slider-inner,.rslides,#recommend,#recommend .dv_recommend,#recommend .dv_rc_items,.yotpo-main-widget,.yotpo-display-wrapper,.yotpo-nav-content,.yotpo-footer,.yotpo-pager,.yotpo-modal-dialog,.yotpo-lightbox-container,.filters-container,.write-review-content",
      function (node) {
        node.style.boxSizing = "border-box";
        node.style.maxWidth = "100%";
        node.style.minWidth = "0";
      }
    );

    applyStyles(".row", function (node) {
      node.style.marginLeft = "0";
      node.style.marginRight = "0";
    });

    applyStyles(".row > [class*='col-'],.row-inner,[class*='col-xs-'],[class*='col-sm-'],[class*='col-md-'],[class*='col-lg-']", function (node) {
      node.style.minWidth = "0";
    });

    applyStyles("#keySearch1 fieldset", function (node) {
      node.style.display = "flex";
      node.style.flexWrap = "wrap";
      node.style.gap = "8px";
      node.style.minWidth = "0";
    });

    applyStyles("#keySearch1 .keySearch_select,#keySearch1 .add-clear-span,#keySearch1 #searchButton", function (node) {
      node.style.flex = "1 1 100%";
      setResponsiveWidth(node);
    });

    applyStyles(
      "#keySearch1 .pageHeaderSearchCategoryCode,#keySearch1 #pkw,#keySearch1 input[type='text'],#keySearch1 input[type='search']",
      function (node) {
        setResponsiveWidth(node);
      }
    );

    applyStyles(".ccm-image-slider-container,.ccm-image-slider,.ccm-image-slider-inner,.rslides,#recommend,#recommend .dv_recommend,#recommend .dv_rc_items,#slider_area,#slider_area .slick-list", function (node) {
      node.style.width = "100%";
      node.style.maxWidth = "100%";
      node.style.overflow = "hidden";
    });

    applyStyles(".ccm-image-slider-container ul,.ccm-image-slider-inner ul,.rslides", function (node) {
      node.style.width = "100%";
      node.style.margin = "0";
      node.style.padding = "0";
      node.style.listStyle = "none";
    });

    applyStyles(".ccm-image-slider-container li,.ccm-image-slider-inner li,.rslides li", function (node) {
      node.style.left = "0";
      node.style.width = "100%";
      node.style.maxWidth = "100%";
    });

    applyStyles(".ccm-image-slider img,.rslides li img,.ccm-image-slider-text,.ccm-image-slider-text p", function (node) {
      node.style.width = "100%";
      node.style.maxWidth = "100%";
      node.style.boxSizing = "border-box";
    });

    applyStyles(".slick-list,#slider_area .slick-list", function (node) {
      node.style.padding = "0";
    });

    applyStyles("#slider_area", function (node) {
      node.style.margin = "0";
      node.style.padding = "0";
      node.style.paddingLeft = "0";
      node.style.paddingRight = "0";
      node.style.listStyle = "none";
    });

    applyStyles(".np-keyword-suggest,.np-item-suggest", function (node) {
      var width = Math.max(0, Math.min(window.innerWidth - 24, 347));
      node.style.width = width + "px";
      node.style.maxWidth = width + "px";
      node.style.left = "0";
      node.style.right = "auto";
    });

    applyStyles(".np-item-suggest .item a,.np-item-suggest table td a", function (node) {
      node.style.width = "auto";
      node.style.maxWidth = "100%";
    });

    applyStyles(".slideClip,.slideBasis,.imageList,.imageList.sep4,.imageList.sep5", function (node) {
      node.style.maxWidth = "100%";
    });

    applyStyles(".slideClip", function (node) {
      node.style.overflow = "hidden";
    });

    applyStyles(".slideBasis .imageList.sep5,.slideClip .imageList.sep5,ul.relate", function (node) {
      node.style.display = "flex";
      node.style.flexWrap = "wrap";
      node.style.width = "100%";
      node.style.margin = "0";
      node.style.padding = "0";
      node.style.listStyle = "none";
      node.style.gap = "12px";
    });

    applyStyles(".slideBasis .imageList.sep5 > li,.slideClip .imageList.sep5 > li,.imageList.sep4 > li,.relatebox,.relatebox-last", function (node) {
      node.style.float = "none";
      node.style.width = "100%";
      node.style.maxWidth = "100%";
      node.style.margin = "0";
    });

    applyStyles(".layout .oh,.layout .col-xs-12,.tdContent,#commodityPriceArea1", function (node) {
      node.style.maxWidth = "100%";
      node.style.overflowX = "auto";
      node.style.webkitOverflowScrolling = "touch";
    });

    applyStyles("table.tableBreak1,table#commodityPriceArea1,.layout table", function (node) {
      node.style.display = "block";
      node.style.width = "100%";
      node.style.maxWidth = "100%";
      node.style.overflowX = "auto";
      node.style.webkitOverflowScrolling = "touch";
    });

    applyStyles(
      "table.tableBreak1 > thead,table.tableBreak1 > tbody,table.tableBreak1 > tfoot,table#commodityPriceArea1 > thead,table#commodityPriceArea1 > tbody,table#commodityPriceArea1 > tfoot,.layout table > thead,.layout table > tbody,.layout table > tfoot",
      function (node) {
        node.style.display = "table";
        node.style.width = "max-content";
        node.style.minWidth = "100%";
      }
    );

    applyStyles(".yotpo-footer,.yotpo-grouping-reference,.yotpo-helpful,.yotpo-clr,.share-options-wrapper", function (node) {
      node.style.width = "auto";
      node.style.maxWidth = "100%";
      node.style.minWidth = "0";
      node.style.boxSizing = "border-box";
      node.style.overflow = "hidden";
    });

    applyStyles("[style*='width: 9999px'],[style*='width:9999px']", function (node) {
      node.style.width = "1px";
      node.style.maxWidth = "1px";
    });
  }

  function scheduleRuns() {
    [0, 300, 1000, 2500, 5000].forEach(function (delay) {
      window.setTimeout(runFix, delay);
    });

    window.clearInterval(stabilizeTimer);
    var pass = 0;
    stabilizeTimer = window.setInterval(function () {
      runFix();
      pass += 1;
      if (pass >= 24) {
        window.clearInterval(stabilizeTimer);
      }
    }, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleRuns);
  } else {
    scheduleRuns();
  }

  window.addEventListener("load", scheduleRuns);
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(runFix, 150);
  });
})();
