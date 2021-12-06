/* global TW */
TW.Runtime.Widgets.logoutredirector = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-logoutredirector" style="display:none;"></div>';
    return html;
  };

  this.serviceInvoked = function (serviceName) {
    if (serviceName === 'Execute') {
      var url = thisWidget.getProperty('url');
      var debugMode = thisWidget.getProperty('debugMode');

      if (debugMode) {
        console.log("LogoutRedirector - execute -> Start");
        console.log("LogoutRedirector - evaluate -> url = " + url);
      }

      var logoutInvoker = new ThingworxInvoker({
        entityType: "Server",
        entityName: "*",
        apiMethod: "POST",
        characteristic: "Services",
        target: "Logout"
      });

      logoutInvoker.invokeService(function () {
        if (TW.Environment.queryIEMode()) {
          document.execCommand("ClearAuthenticationCache");
        }
        window.location = url;
      }, function () {
        alert('Failed to log out');
      });

      if (debugMode) {
        console.log("LogoutRedirector - execute -> Stop");
      }
    }
  };

  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === 'url') {
      this.setProperty("url", updatePropertyInfo.RawSinglePropertyValue);
    }
  };
};