<?php
/**
 * Plugin Name: MetaMask Connector
 * Plugin URI:  https://chaingence.com/metamask-connector
 * Description: Connects to MetaMask Wallet using web3.js.
 * Version:     1.0
 * Author:      chaingence
 * Author URI:  https://chaingence.com
 */

// Enqueue web3.js and your custom script
function metamask_connector_enqueue_scripts() {
    // Enqueue your CSS file
    wp_enqueue_style('metamask-connector-css', plugin_dir_url(__FILE__) . 'css/style.css');
    // Enqueue web3.js from a CDN
    wp_enqueue_script('web3', 'https://cdn.jsdelivr.net/npm/web3/dist/web3.min.js', array(), null, true);

    // Enqueue your custom JavaScript file
    wp_enqueue_script('metamask-connector-js', plugin_dir_url(__FILE__) . 'js/metamask-connector.js', array('web3'), null, true);
}

add_action('wp_enqueue_scripts', 'metamask_connector_enqueue_scripts');

// Shortcode to display the MetaMask connection button
function metamask_connector_shortcode() {
    // Button that users will click to connect MetaMask
    return '<button id="connectMetamask">Connect to MetaMask</button>';
}

add_shortcode('metamask_connector', 'metamask_connector_shortcode');

// TODO: Add admin menu items, settings, or other functionalities here.
