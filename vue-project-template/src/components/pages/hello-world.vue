<template>
  <base-choose @get-pagination="getChangedData">
    <template #default="slotProps">
      <el-button
        link
        type="success"
        size="small"
        @click="viewItem(slotProps.id)"
      >
        Detail
      </el-button>
    </template>
  </base-choose>
</template>

<script>
export default {
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
      tableFields: this.$global.helloWorldTableFields,
      listData: [],
      total: 1,
      id: 0,
      pagination: {}
    };
  },
  mounted() {
    this.getListData({
      current_page: 1,
      page_size: 10
    });
  },
  methods: {
    async getListData(val) {
      let params = {
        current_page: val.current_page,
        page_size: val.page_size
      };
      try {
        await this.$store.dispatch('helloworld/getListData', { params });
        this.listData = this.$store.state.helloworld.listData;
      } catch (err) {
        return;
      }
    },
    viewItem(id) {
      this.id = id;
      //执行查看详情的操作
    },
    getChangedData(val) {
      this.pagination = val;
      this.getListData(val);
    }
  }
};
</script>
