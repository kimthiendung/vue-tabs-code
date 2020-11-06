<template>
  <el-tabs class="tabs-code" v-model="active">
    <el-tab-pane
      v-for="(val, key) in data"
      :key="key"
      :name="'t_' + key"
      :label="val.label"
    >
      <el-code :language="val.lang">
        {{ codeFormat(val.code) }}
      </el-code>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { component as VueCodeHighlight } from "./vue-code-highlight";
import Tabs from "../tabs";
import TabPane from "../tab-pane";
export default {
  name: "TabsCode",
  components: {
    "el-code": VueCodeHighlight,
    "el-tabs": Tabs,
    "el-tab-pane": TabPane
  },
  props: ["data"],
  data() {
    return {
      active: "t_" + 0
    };
  },
  methods: {
    removeIndent: function(input) {
      var indents = input.match(/^[^\S\n\r]*(?=\S)/gm);

      if (!indents || !indents[0].length) return input;

      indents.sort(function(a, b) {
        return a.length - b.length;
      });

      if (!indents[0].length) return input;

      return input.replace(RegExp("^" + indents[0], "gm"), "");
    },
    codeFormat: function(input) {
      let txt = input;
      txt = txt.replace(/\s*?$/gm, ""); //removeTrailing
      txt = this.removeIndent(txt);
      txt = txt.replace(/^\s+/, ""); //leftTrim
      txt = txt.replace(/\s+$/, ""); //rightTrim

      return txt;
    }
  }
  // mounted() {
  //   if (this.data.length) this.active = this.data[0].label;

  //   console.log(this.active);
  // }
};
</script>
<style lang="scss">
@import "./prism.scss";
@import "../tabs/tabs.scss";
.tabs-code {
  background: #2d2d2d;
  padding: 0 1rem;
  color: #eee;
  border-radius: 12px;
}
.el-tabs__nav-wrap::after {
  background-color: #212121;
}
.el-tab-pane {
  padding-bottom: 1rem;
}
.tabs-code .el-tabs__item {
  font-family: sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}
.el-tabs__item.is-active {
  color: #409eff;
}
.el-icon-arrow-left,
.el-icon-arrow-right {
  display: inline-block;
  vertical-align: text-bottom;
  width: 18px;
  height: 18px;
  background: url("./angle-left.svg") no-repeat center;
  color: transparent;
  filter: invert(0.6);
}
.el-icon-arrow-right {
  transform: rotate(180deg);
}
</style>
