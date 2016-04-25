<?php if(!have_posts()): ?>
	<h1><?php _e( 'Not Found', 'twentyten' ); ?></h1>
	<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'twentyten' ); ?></p>
	<?php get_search_form(); ?>
<?php endif; ?>



<?php $i = 1; // count for the grid ?>

<div class="row-fluid">
<?php while(have_posts()): ?> 

<?php the_post(); ?>
	
<?php if(in_category('work')): ?>
	<div class="span6">
		<?php $sitelink = get_post_meta($post->ID, 'Website', true); ?>
		<?php if(has_post_thumbnail()): ?>
		<div class="post-thumb">
			<a href="<?php if($sitelink): echo $sitelink; else: echo the_permalink(); endif; ?>" target="_blank" title="<?php the_title(); ?>">
				<?php //the_post_thumbnail(); ?>
				<?php $thumbSrc = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full', $icon = false, $attr = ''); ?>
				<img src="<?php echo $thumbSrc[0]; ?>" alt="<?php the_title(); ?>">
				<?php //wp_get_attachment_image($attachment_id, $size = 'thumbnail', $icon = false, $attr = '') ?>
			</a>
			<div class="post-thumb-meta">
				<div class="pull-left"><?php the_title(); ?></div>					
				<div class="pull-right">
					<span class="post-tags"><?php echo get_the_tag_list($before = '', $sep = '', $after = ''); ?></span>
				<?php if($sitelink): ?>
					<a href="<?php echo $sitelink; ?>" rel="nofollow" title="View the site" target="_blank">View</a>
					<?php else: ?>
					<!-- <a href="<?php the_permalink(); ?>" title="View this project">View</a> -->
				<?php endif; ?></div>
			</div>
		</div>
		<?php else : ?>
			<p class="alert"><em>Set Featured Image for <?php the_title(); ?> <?php edit_post_link(); ?></em></p>
		<?php endif; ?>
	</div>
	<?php if($i % 2 == 0) echo '</div><div class="row-fluid">'; $i++; ?>

	<?php else: ?>
	
	<?php // get_template_part("article"); ?>
</div>

<?php endif; ?>

<?php endwhile; // End the loop. Whew. ?>

<?php if (  $wp_query->max_num_pages > 1 ) : ?>
<div class="row-fluid">
	<div class="span12">
		<div class="page-nav"><?php next_posts_link('<button class="btn btn-small"><i class="icon-arrow-left"></i> Older', 0); ?>
			<?php previous_posts_link('<button class="btn btn-small">Newer <i class="icon-arrow-right"></i>', 0); ?></div>
	</div>
</div>
<?php endif; ?>
