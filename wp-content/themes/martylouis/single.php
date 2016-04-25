<?php get_header(); ?>

<div class="page-title">
	<h1><?php the_title(); ?></h1>
</div>
<?php get_template_part('loop', 'index'); ?>

<?php // get_sidebar(); ?>
<?php get_footer(); ?>