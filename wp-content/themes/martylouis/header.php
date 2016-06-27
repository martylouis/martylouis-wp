<!doctype html>
<!--

 »» New website coming soon!

-->
<html class="no-js" <?php language_attributes(); ?>>
<head>
  <title><?php wp_title(); ?></title>
  <meta name="description" content="<?php bloginfo('description'); ?>" />
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/vendor/modernizr.custom-2.5.1.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

	<?php wp_head(); ?>
  <script type="text/javascript">
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var n=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(n?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(a,o);for(var r=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["clearEventProperties","identify","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=r(p[c])};
    heap.load("3283827348");
  </script>

  <!-- Start of Async Drift Code -->
  <script>
  !function() {
    var t;
    return t = window.driftt = window.drift = window.driftt || [], t.init ? void 0 : t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
    t.methods = [ "identify", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
    t.factory = function(e) {
      return function() {
        var n;
        return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e, n, o, r;
      e = 3e5, r = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + r + "/" + t + ".js",
      n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
    });
  }();
  drift.SNIPPET_VERSION = '0.2.0'
  drift.load('rib4n8mmb4ed')
  </script>
  <!-- End of Async Drift Code -->
</head>

<body <?php body_class(); ?>>
<?php get_template_part("templates/content", "header"); ?>
