<?php

/**
 * Plugin Name: First Block
 * Plugin URL: https://gustavohilario.com/
 * Description: First Block
 * Author: Gustavo Hilario
 * Author URL: https://gustavohilario.com
 */

function blocks_course_firstblock_init()
{
    register_block_type_from_metadata(__DIR__);
}

add_action('init', 'blocks_course_firstblock_init');
