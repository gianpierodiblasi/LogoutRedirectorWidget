# LogoutRedirectorWidget
An extension to perfom a logout with redirect to a URL.

**This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite and there is no PTC support.**

## Description
This extension provides a widget to perfom a logout with redirect to a URL; the native Logout widget has some limitations solved by this widget, but starting from ThingWorx 9.x this widget is obsolete due to the [Logout function](https://support.ptc.com/help/thingworx/platform/r9/en/index.html#page/ThingWorx/Help/Mashup_Builder/Functions/Logout.html) in mashup builder.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- url - STRING (no default value): the redirect URL

## Services
- Execute: service to execute the logout

## Limitations
Due to a Thingworx bug the widget may not work correctly (the user may remain logged in) when the redirect URL is a form login organization (for example http://localhost:8080/Thingworx/FormLogin/Everyone)

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
