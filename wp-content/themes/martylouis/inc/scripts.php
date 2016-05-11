<?php

function martylouis_scripts() {
	wp_enqueue_style('martylouis', get_template_directory_uri() . '/assets/css/main.min.css', false, null);

	// jQuery is loaded in header.php using the same method from HTML5 Boilerplate:
	// Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline
	// It's kept in the header instead of footer to avoid conflicts with plugins.

	if (!is_admin()) {
		wp_deregister_script('jquery');
		wp_register_script('jquery', '', '', '', false);
	}

	if (is_single() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}

	// Create and reg JS

	wp_register_script('martylouis_main', get_template_directory_uri() . '/assets/js/scripts.min.js', false, null, false);
	wp_enqueue_script('martylouis_main');
}

add_action('wp_enqueue_scripts', 'martylouis_scripts', 100);
