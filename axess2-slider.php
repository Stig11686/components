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
