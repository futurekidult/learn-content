<template>
  <section class="section-border">
    <el-input
      v-model="singleWaybill"
      style="width: 300px"
      placeholder="Type something"
    >
      <template #suffix>
        <el-icon
          class="toggle-btn"
          @click="searchSingle"
        >
          <Search />
        </el-icon>
      </template>
      <template #append>
        <el-popover
          :width="300"
          :visible="visible"
        >
          <template #reference>
            <el-icon
              class="toggle-btn"
              @click="visible = true"
            >
              <Operation />
            </el-icon>
          </template>
          <template #default>
            <el-input
              v-model="multipleWaybill"
              placeholder="Please input"
              type="textarea"
              :rows="10"
            />
            <el-divider />
            <div style="display: flex; justify-content: space-between">
              <el-button
                size="small"
                @click="clear"
              >
                清空
              </el-button>
              <div>
                <el-button
                  size="small"
                  @click="close"
                >
                  关闭
                </el-button>
                <el-button
                  size="small"
                  @click="searchMultiple"
                >
                  搜索
                </el-button>
              </div>
            </div>
          </template>
        </el-popover>
      </template>
    </el-input>
    <el-dropdown trigger="click">
      <el-button
        link
        type="primary"
      >
        <el-icon>
          <Operation />
        </el-icon>
        显示列
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-scrollbar height="400px">
            <el-tree
              :data="$global.logisticsTableFields"
              :props="defaultProps"
              draggable
              :allow-drop="handleDrop"
              @node-drop="dropOk"
            >
              <template #default="{ node, data }">
                <el-icon>
                  <Grid />
                </el-icon>
                <span class="column">{{ node.label }}</span>
                <el-switch
                  v-model="data.show"
                  @change="changeStatus($global.logisticsTableFields)"
                />
                <el-icon
                  :color="setStatusColor(data, 'left')"
                  @click="
                    toFixPosition('left', node, $global.logisticsTableFields)
                  "
                >
                  <ArrowLeftBold />
                </el-icon>
                <el-icon>
                  <ArrowRightBold
                    :color="setStatusColor(data, 'right')"
                    @click="
                      toFixPosition('right', node, $global.logisticsTableFields)
                    "
                  />
                </el-icon>
              </template>
            </el-tree>
          </el-scrollbar>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-table
      :key="tableKey"
      :data="tableData"
    >
      <template v-for="item in tableFields">
        <el-table-column
          v-if="item.show"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.show_overflow_tooltip"
        />
      </template>
    </el-table>
    <el-upload />
  </section>
</template>

<script>
import {
  Search,
  Operation,
  Grid,
  ArrowLeftBold,
  ArrowRightBold
} from '@element-plus/icons-vue';
export default {
  components: {
    Search,
    Operation,
    Grid,
    ArrowLeftBold,
    ArrowRightBold
  },
  data() {
    return {
      singleWaybill: '',
      multipleWaybill: '',
      visible: false,
      defaultProps: { label: 'label' },
      tableKey: 1,
      tableData: [
        {
          create_time: 1677216059,
          creator: '张跃龙',
          current_event_address: '',
          current_event_detail: '',
          current_event_time: 0,
          delivery_days: 0,
          estimated_delivery_time: 0,
          exception_handling: 0,
          exception_handling_desc: '无',
          id: 1079,
          label: [],
          logistic_supplier: 'fedex',
          order_no: 'CS442009197',
          parcel_type: 1,
          parcel_type_desc: '退货',
          platform: 'wayfair',
          receipt_days: 0,
          remark: '',
          shipping_time: 1672588800,
          shop: 'wayfair2',
          sku: 'x-mjl-w',
          sync_state: 10,
          sync_state_desc: '成功',
          sync_time: 1677216287,
          transit_state: 10,
          transit_state_desc: '暂无信息',
          transit_sub_state: 0,
          transit_sub_state_desc: '',
          warehouse: '美西13仓',
          waybill_no: '392901255472'
        }
      ],
      tableFields: []
    };
  },
  mounted() {
    let column = JSON.parse(localStorage.getItem('logistics-column'));
    if (column) {
      this.tableFields = column;
    } else {
      this.tableFields = this.$global.logisticsTableFields;
    }
  },
  methods: {
    searchSingle() {
      console.log(this.singleWaybill);
    },
    searchMultiple() {
      console.log(this.multipleWaybill);
    },
    clear() {
      this.multipleWaybill = '';
    },
    close() {
      this.visible = false;
    },
    dropOk() {
      this.tableKey++;
    },
    changeStatus(arr) {
      localStorage.setItem('logistics-column', JSON.stringify(arr));
    },
    setStatusColor(data, fixed) {
      return data.fixed === fixed ? data.color : '';
    },
    toFixPosition(str, node, table) {
      let { fixed } = node.data;
      if (fixed && fixed === str) {
        node.data.fixed = false;
        node.data.color = '';
      } else {
        node.data.fixed = str;
        node.data.color = '#409eff';
      }
      this.changeStatus(table);
    },
    handleDrop(type) {
      return type !== 'inner';
    },
    handleFiles(event) {
      let { files } = event.target;
      if (files.length) {
        let file = files['0'];
        let fileReader = new FileReader();
        fileReader.onload = () => {
          document.getElementById('preview').src = fileReader.result;
        };
        fileReader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
.toggle-btn {
  cursor: pointer;
}

.column {
  min-width: 150px;
  display: inline-block;
}

.el-icon,
.el-switch {
  margin-right: 16px !important;
}

.position-right {
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
}
</style>
