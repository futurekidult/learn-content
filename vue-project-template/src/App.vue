<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    };
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
}

.section-border {
  border: 1px solid rgba(230, 230, 230, 1);
  background: #fff;
  padding: 10px;
  margin-bottom: 5px;
}
</style>
