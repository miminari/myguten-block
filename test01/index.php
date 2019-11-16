<?php

/**
 * Plugin Name: mimi's gutenberg training 01
 */

defined( 'ABSPATH' ) || exit;

function gutenberg_training_01() {

	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'test-block-01',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type(
		'my-blocks/test-block-01',
		array(
			'editor_script' => 'test-block-01',
		)
	);

}
add_action( 'init', 'gutenberg_training_01' );
