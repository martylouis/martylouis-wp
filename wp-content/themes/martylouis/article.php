<article class="post">
	<?php if(is_single()) : ?>
	<div class="row-fluid">
		<div class="span12">
			<header class="post-header">
				<h1><?php the_title(); ?></h1>
			</header>
		</div>
	</div>
	<?php else: ?>
	<div class="row-fluid">
		<div class="span12">
			<header class="post-header">
				<h2 class="post-title">
					<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyten' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
				</h2>				
			</header>
		</div>
	</div>
	<?php endif; ?>
	<div class="row-fluid">
		<div class="span3">
			<div class="post-meta">
				<p><?php martylouis_entry_meta(); ?></p>
				<?php if(is_single()): ?>
				<p><?php previous_post_link( '%link', '' . _x( '&larr;', 'Previous post link', 'twentyten' ) . ' %title' ); ?>
					<?php next_post_link( '%link', '%title ' . _x( '&rarr;', 'Next post link', 'twentyten' ) . '' ); ?>
				</p>
				<?php endif; ?>
			</div>
		</div>
		<div class="span6 offset1">
			<section class="post-content">				
				<?php if ( is_archive() || is_search() || /* since home page is blog too..*/ is_front_page() ) : // Only display excerpts for archives and search. ?>
						<?php // the_excerpt(); ?>
						<?php the_content( __( 'Continue reading &rarr;', 'twentyten' ) ); ?>
				<?php else : ?>
						<?php the_content( __( 'Continue reading &rarr;', 'twentyten' ) ); ?>
						<?php // wp_link_pages( array( 'before' => '' . __( 'Pages:', 'twentyten' ), 'after' => '' ) ); ?>						
				<?php endif; ?>
			</section>
			<footer>
				<?php // comments ?>		
				<?php //comments_popup_link( __( 'Leave a comment', 'twentyten' ), __( '1 Comment', 'twentyten' ), __( '% Comments', 'twentyten' ) ); ?>
				<?php //edit_post_link( __( 'Edit', 'twentyten' ), '| ', '' ); ?>

				<?php //comments_template( '', true ); ?>
			</footer>
		</div>
	</div>	
</article>