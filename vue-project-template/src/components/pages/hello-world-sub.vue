<template>
  <section>
    <base-choose
      @get-options="getChooseForm"
      @search-form="search"
      @get-pagination="getChangedData"
    >
      <template #default="slotProps">
        <el-button
          link
          type="success"
          size="small"
          @click="viewItem(slotProps.id)"
        >
          Detail
        </el-button>
        <el-button
          link
          type="primary"
          size="small"
          @click="editItem(slotProps.id)"
        >
          Edit
        </el-button>
        <el-button
          link
          type="danger"
          size="small"
          @click="showDeleteItemDialog(slotProps.id)"
        >
          Delete
        </el-button>
      </template>
    </base-choose>
    <base-confirm
      v-if="deleteDialogVisible"
      :dialog-visible="deleteDialogVisible"
      content="是否确认删除该项?"
      @get-visible="closeDeleteItemDialog"
      @confirm-deletion="confirmDeletion"
    />

    <el-dialog
      v-model="editDialogVisible"
      title="修改"
      width="30%"
      :close-on-click-modal="false"
    >
      <base-form
        ref="editForm"
        :properties="$route.meta.editProperties"
        :base-form="editForm"
        :inline="false"
        width="100px"
        :base-rules="$route.meta.editRules"
      >
        <el-button @click="submit(0)">
          保存
        </el-button>
        <el-button
          type="primary"
          @click="submit(1)"
        >
          提交
        </el-button>
      </base-form>
    </el-dialog>
  </section>
</template>

<script>
import BaseForm from '../common/base-form.vue';
import { timestampToTime, timeToTimestamp } from '../../utils/index.js';

export default {
  components: {
    BaseForm
  },
  provide() {
    return {
      getTable: () => {
        return {
          tableFields: this.tableFields,
          tableData: this.listData,
          total: this.total
        };
      }
    };
  },
  data() {
    return {
      tableFields: [],
      listData: [],
      id: 0,
      total: 20,
      chooseForm: {},
      editForm: {},
      deleteDialogVisible: false,
      editDialogVisible: false,
      pagination: {}
    };
  },
  mounted() {
    let column = JSON.parse(localStorage.getItem('column'));
    if (column) {
      this.tableFields = column;
    } else {
      this.tableFields = this.$global.helloWorldSubTableFields;
    }
    this.getListData(false, {
      current_page: 1,
      page_size: 10
    });
  },
  methods: {
    async getListData(dialog = true, pagination) {
      let params = this.chooseForm;
      params['current_page'] = pagination.current_page;
      params['page_size'] = pagination.page_size;
      try {
        await this.$store.dispatch('helloworldSub/getListData', { params });
        this.listData = this.$store.state.helloworldSub.listData;
        this.listData.forEach((item) => {
          item.time = timestampToTime(item.time);
        });
        if (dialog) {
          this.deleteDialogVisible = false;
        }
      } catch (err) {
        return;
      }
    },
    search() {
      this.getListData(false, this.pagination);
    },
    showDeleteItemDialog(id) {
      this.id = id;
      this.deleteDialogVisible = true;
    },
    closeDeleteItemDialog() {
      this.deleteDialogVisible = false;
    },
    confirmDeletion() {
      this.getListData(true);
    },
    viewItem(id) {
      this.id = id;
      //执行查看详情的操作
    },
    editItem(id) {
      this.id = id;
      this.editForm = {
        submit_time: timestampToTime(1649298432),
        problem_title: 'xxxx',
        approval_state: 0,
        creator: '张三'
      };
      this.editDialogVisible = true;
    },
    getChooseForm(val) {
      this.chooseForm = val;
    },
    submit(operation) {
      let form = JSON.parse(JSON.stringify(this.editForm));
      form.submit_time = timeToTimestamp(form.submit_time);
      if (operation === 0) {
        //执行save操作
      } else {
        this.$refs.editForm.$refs.form.validate((valid) => {
          if (valid) {
            //执行通过校验后的提交操作
          }
        });
      }
    },
    getChangedData(val) {
      this.pagination = val;
      this.getListData(false, val);
    }
  }
};
</script>
