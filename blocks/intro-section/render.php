<?php
/**
 * Introduction Section Block Template.
 *
 * @param   array $attributes - The block attributes.
 * @param   string $content - The block default content.
 * @param   WP_Block $block - The block instance.
 */

$title = $attributes['title'];
$content = $attributes['content'];
$images = $attributes['images'];

// Default images if none selected
if (empty($images)) {
    $default_images = array(
        get_template_directory_uri() . '/assets/img/slide_01.jpg',
        get_template_directory_uri() . '/assets/img/slide_02.jpg',
        get_template_directory_uri() . '/assets/img/slide_03.jpg',
    );
    $images = $default_images;
}
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'intro-section', 'id' => 'intro']); ?>>
    <div class="intro-container">
        <div class="intro-content">
            <h2 class="intro-title"><?php echo esc_html($title); ?></h2>
            <div class="intro-text">
                <?php echo wp_kses_post($content); ?>
            </div>
        </div>
        
        <div class="intro-slider">
            <div class="swiper-container intro-swiper">
                <div class="swiper-wrapper">
                    <?php foreach ($images as $image) : ?>
                        <div class="swiper-slide">
                            <img src="<?php echo esc_url(is_array($image) ? $image['url'] : $image); ?>" 
                                 alt="<?php echo esc_attr(is_array($image) && isset($image['alt']) ? $image['alt'] : ''); ?>" />
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>
</section>