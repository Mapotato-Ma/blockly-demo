<template>
  <h1>可视化代码生成器</h1>
  <div id="blockly-container" style="height: 600px; width: 1800px"></div>
  <div class="output">
    <fieldset>
      <legend>js</legend>
      <textarea name="textarea" id="js-textarea" cols="30" rows="10" readonly></textarea>
    </fieldset>
    <fieldset>
      <legend>dart</legend>
      <textarea name="textarea" id="dart-textarea" cols="30" rows="10" readonly></textarea>
    </fieldset>
    <fieldset>
      <legend>python</legend>
      <textarea name="textarea" id="python-textarea" cols="30" rows="10" readonly></textarea>
    </fieldset>
  </div>
  <!-- 工具箱定义 -->
  <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-categories" style="display: none">
    <toolboxlabel name="Custom Toolbox" colour="darkslategrey"></toolboxlabel>
    <category css-icon="customIcon fa fa-cog" name="Logic" categorystyle="logic_category">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null" disabled="true"></block>
      <block type="logic_ternary"></block>
    </category>
    <category name="Loops" categorystyle="loop_category">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_repeat" disabled="true"></block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>
    </category>
    <category name="Math" categorystyle="math_category">
      <block type="math_number" gap="32">
        <field name="NUM">123</field>
      </block>
      <block type="math_arithmetic">
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="math_single">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">9</field>
          </shadow>
        </value>
      </block>
      <block type="math_trig">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">45</field>
          </shadow>
        </value>
      </block>
      <block type="math_constant"></block>
      <block type="math_number_property">
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="math_round">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">3.1</field>
          </shadow>
        </value>
      </block>
      <block type="math_on_list"></block>
      <block type="math_modulo">
        <value name="DIVIDEND">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="DIVISOR">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="math_constrain">
        <value name="VALUE">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="LOW">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="HIGH">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_int">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_float"></block>
      <block type="math_atan2">
        <value name="X">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="Y">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
    </category>
    <category name="Text" categorystyle="text_category">
      <block type="text"></block>
      <block type="text_join"></block>
      <block type="text_append">
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_isEmpty">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="text_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
        <value name="FIND">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_getSubstring">
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_trim">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_count">
        <value name="SUB">
          <shadow type="text"></shadow>
        </value>
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_replace">
        <value name="FROM">
          <shadow type="text"></shadow>
        </value>
        <value name="TO">
          <shadow type="text"></shadow>
        </value>
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_reverse">
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <label text="Input/Output:" web-class="ioLabel"></label>
      <block type="text_print">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_prompt_ext">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
    </category>
    <category name="Lists" categorystyle="list_category">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block type="lists_sort"></block>
      <block type="lists_reverse"></block>
    </category>
    <sep></sep>
    <category name="Variables" categorystyle="variable_category" custom="VARIABLE"></category>
    <category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"></category>
  </xml>
</template>
<script setup lang="ts">
// 引入核心服务
import * as Blockly from 'blockly/core';
// 引入js代码生成器
import { javascriptGenerator } from 'blockly/javascript';
// 引入dart代码生成器
import { dartGenerator } from 'blockly/dart';
// 引入python生成器
import { pythonGenerator } from 'blockly/python';
import { onMounted, ref } from 'vue';
import DarkTheme from '@blockly/theme-dark';
// 搞一个主题
// const myTheme = Blockly.Theme.defineTheme('myTheme', {
//   name: 'myTheme',
//   base: Blockly.Themes.Classic,
//   blockStyles: {},
//   categoryStyles: {},
//   componentStyles: {
//     workspaceBackgroundColour: '#1113a8',
//     flyoutBackgroundColour: '#1113a8',
//   },
//   fontStyle: {},
//   startHats: true,
// });

const supportedEvents = new Set([
  Blockly.Events.BLOCK_CHANGE,
  Blockly.Events.BLOCK_CREATE,
  Blockly.Events.BLOCK_DELETE,
  Blockly.Events.BLOCK_MOVE,
]);

function updateCode(event: Blockly.Events.Abstract) {
  if (workspace.value?.isDragging()) return; // Don't update while changes are happening.
  if (!supportedEvents.has(event.type)) return;

  const jsCode = javascriptGenerator.workspaceToCode(workspace.value);
  (<HTMLTextAreaElement>document.getElementById('js-textarea'))!.value = jsCode;
  const dartCode = dartGenerator.workspaceToCode(workspace.value);
  (<HTMLTextAreaElement>document.getElementById('dart-textarea'))!.value = dartCode;
  const pyCode = pythonGenerator.workspaceToCode(workspace.value);
  (<HTMLTextAreaElement>document.getElementById('python-textarea'))!.value = pyCode;
}

const workspace = ref<Blockly.WorkspaceSvg>();

onMounted(() => {
  // Passes the injection div.
  workspace.value = Blockly.inject(document.getElementById('blockly-container')!, {
    toolbox: document.getElementById('toolbox-categories')!,
  });
  workspace.value.setTheme(DarkTheme);
  workspace.value.addChangeListener(updateCode);
});
</script>

<style>
#blockly-container {
  border: 2px solid #ec9d27;
}
.output {
  width: 100%;
  display: flex;
  fieldset {
    flex: 1;
    text-align: left;
    textarea {
      width: 100%;
      border: none;
      outline: none;
      resize: none;
    }
  }
}
</style>
