/* global TW */
TW.IDE.Widgets.logoutredirector = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/LogoutRedirectorWidget/ui/logoutredirector/logout.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'LogoutRedirector',
      'description': 'Widget to perfom a logout with redirect to a URL',
      'category': ['Common'],
      'iconImage': 'logout.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'url': {
          'isVisible': true,
          'baseType': 'STRING',
          'isBindingTarget': true,
          'isEditable': true,
          'description': 'The redirect URL'
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        }
      }
    };
  };

  this.widgetServices = function () {
    return {
      'Execute': {
        'warnIfNotBound': true
      }
    };
  };

  this.widgetEvents = function () {
    return {
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-logoutredirector">' + '<span class="logoutredirector-property">Logout Redirector</span>' + '</div>';
  };
};