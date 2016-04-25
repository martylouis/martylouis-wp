<?php get_header(); ?>

<div class="page-title">
	<h1>
		Work / <?php printf( __( '%s', 'twentyten' ), '' . single_tag_title( '', false ) . '' ); ?>
		<span class="pull-right"><a class="icon" href="<?php echo home_url(); ?>"><i class="icon-th-large icon-large"></i></a></span>
	</h1>
</div>

<?php get_template_part( 'loop', 'tag' ); ?>

<?php // get_sidebar(); ?>
<?php get_footer(); ?>