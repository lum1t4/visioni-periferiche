<?php
/**
 * Hero Section Block Template.
 *
 * @param   array $attributes - The block attributes.
 * @param   string $content - The block default content.
 * @param   WP_Block $block - The block instance.
 */

$video_url = $attributes['videoUrl'] ?: get_template_directory_uri() . '/assets/video/trailer-edizione-2024.mp4';
$title = $attributes['title'];
$subtitle = $attributes['subtitle'];
$description = $attributes['description'];
$button_text = $attributes['buttonText'];
$button_url = $attributes['buttonUrl'];
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'hero-section alignfull']); ?>>
    <div class="hero-video-container">
        <video autoplay muted loop playsinline>
            <source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
        <h1 class="hero-title fade-in"><?php echo esc_html($title); ?></h1>
        <p class="hero-subtitle fade-in delay-1"><?php echo esc_html($subtitle); ?></p>
        <p class="hero-description fade-in delay-2"><?php echo esc_html($description); ?></p>
        
        <?php if ($button_text) : ?>
            <a href="<?php echo esc_url($button_url); ?>" class="hero-button fade-in delay-3">
                <?php echo esc_html($button_text); ?>
            </a>
        <?php endif; ?>
    </div>
</section>