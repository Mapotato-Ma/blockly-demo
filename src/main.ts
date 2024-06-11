import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// Import Blockly core.
import * as Blockly from 'blockly/core';
// Import a message file.
import * as En from 'blockly/msg/en';
import * as libraryBlocks from 'blockly/blocks';
console.log('🚀 ~ libraryBlocks ~ 320行', libraryBlocks);
Blockly.setLocale(En);
createApp(App).mount('#app');
