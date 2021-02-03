<?php
/*
 * Template Name: New Lift Category Page
 */
get_header(); //vars
global $post;
$post_slug=$post->post_name;

$queried_object = get_term_by('slug', $post_slug, 'lift_types');
$taxonomy = $queried_object->taxonomy;
$pageID = $post->ID;
$term_id = $queried_object->term_id;
$term = $taxonomy . '_' . $term_id;
?>
<div class="breadcrumbs-wrapper">
  <div class="wrap">
    <?php custom_breadcrumbs(); ?>
  </div>
</div>

  <main id="content" class="internal <?php if ($term_id == 9) {echo "orange-cat";}?>" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
  <?php
  if ($term_id == 8 || $term_id == 9) {
    get_template_part( 'templates/page-lift-category', 'slider');
  } ?>

  <div class="spacer"></div>
  

  <div class="row <?php if ($term_id == 9 || $term_id == 8 ) {echo "";} else{echo "rearrange-on-mobile";} ?>">
      
  <?php
  if ($pageID == '13544' || $pageID == '13567') {
    ?>

        <div class="wrap desktop">
          <div class="fw fw-content mw" id="scroll-down">
            <?php if (get_field('content', $term)) {?>
              <?= get_field('content', $term); ?>
            <?php } ?>
          </div>
        </div>

        <div class="archive-loop-wrapper">
            <?php 
               get_template_part( 'templates/page-lift-category', 'sub-loop');
				get_template_part( 'templates/page-lift-category', 'lifts-loop');
          
			
			
			?>
        </div>
        <div class="wrap mobile">
          <div class="fw fw-content mw" id="scroll-down">
            <?php if (get_field('content', $term)) {?>
              <?= get_field('content', $term); ?>
            <?php } ?>
          </div>
        </div>
    <?php
  } else {
      ?>
        <div class="wrap">
          <div class="fw fw-content mw" id="scroll-down">
            <?php if (get_field('content', $term)) {?>
              <?= get_field('content', $term); ?>
            <?php } ?>
          </div>
        </div>
        
        <div class="archive-loop-wrapper">
            <?php if ($term_id == 8 || $term_id == 9) {
                get_template_part( 'templates/page-lift-category', 'sub-loop');
            } else {
                get_template_part( 'templates/page-lift-category', 'lifts-loop');
            } ?>
        </div>
      <?php
  }
  ?>

  </div>
  <div class="row no-pt case-studies-cta category-case-studies">
    <?php
      $cs_image = get_field('case_studies_image', $term);
    ?>
    <?php
      if($cs_image) {
        echo wp_get_attachment_image( $cs_image['id'], 'full' );
      } else {
        echo wp_get_attachment_image( 11995, 'full' );
      } ?>
    <?php get_template_part( 'templates/home-case-studies'); ?>
  </div>
  <div class="content-repeater-wrapper">
    <div class="content repeater">
        <?php get_template_part( 'templates/page-lift-category', 'content-loop'); ?>
        <div class="row testimonials text-center">
          <div class="mw">
            <?php get_template_part('templates/footer-testimonials'); ?>
          </div>
        </div>
    </div>
  </div>


<?php get_footer(); ?>
