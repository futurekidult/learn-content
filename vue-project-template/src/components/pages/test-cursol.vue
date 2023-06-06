<template>
  <el-form
    ref="form"
    :model="form"
    label-width="120px"
  >
    <el-form-item
      label="Password"
      prop="password"
    >
      <el-input
        v-model="form.password"
        type="password"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm('form')"
      >
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
  },
  setup() {
    const form = ref({
      password: ''
    });

    const submitForm = (formName) => {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    };

    return {
      form,
      submitForm
    };
  }
};
</script>
