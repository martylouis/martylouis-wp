<?php if( !have_posts() ) : ?>
	<h1><?php _e( 'Not Found', 'twentyten' ); ?></h1>
	<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'twentyten' ); ?></p>
	<?php get_search_form(); ?>
<?php endif; ?>

<?php $i = 1; // count for the grid ?>

<div class="row-fluid">

<?php while (have_posts()): the_post();

	if (in_category('work')) : ?>

		<div class="span6">

			<?php $sitelink = get_post_meta($post->ID, 'Website', true); ?>
      <?php $post_thumb = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full', false); ?>

			<div class="post-thumb">
				<?php if( has_post_thumbnail() ): ?>
          <?php if ($sitelink): ?>
  					<a href="<?php echo $sitelink; ?>" target="_blank" title="<?php the_title(); ?>">
              <img src="<?php echo $post_thumb[0]; ?>" alt="<?php the_title(); ?>">
            </a>
          <?php else: ?>
            <img src="<?php echo $post_thumb[0]; ?>" alt="<?php the_title(); ?>">
          <?php endif; ?>
				<?php endif; ?>
				<div class="post-thumb-meta">
					<?php /* <div class="pull-left"><?php the_title(); ?></div> */ ?>
					<div class="clearfix">
						<div class="pull-left post-tags"><?php echo get_the_tag_list($before = '', $sep = '', $after = ''); ?></div>
						<?php if($sitelink): ?>
							<div class="pull-right post-link">
							  <a href="<?php echo $sitelink; ?>" rel="nofollow" title="View the site" target="_blank">View Website &rarr;</a>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>

	<?php if($i % 2 == 0) echo '</div><div class="row-fluid">'; $i++; ?>

	<?php else: ?>
	</div>

<?php endif; ?>

<?php endwhile; // End the loop. Whew. ?>

<?php if (  $wp_query->max_num_pages > 1 ) : ?>

	<div class="row-fluid">
		<div class="span12">
			<div class="page-nav clearfix">
				<?php previous_posts_link('&laquo; Previous', 0); ?>
        <?php next_posts_link('Next &raquo;', 0); ?>
			</div>
		</div>
	</div>

<?php endif; ?>
