<script>
const helloWorldTableFields = [
  { label: '任务ID', prop: 'id', show: true },
  { label: '任务名称', prop: 'name', show: true },
  { label: '创建时间', prop: 'time', show: true }
];

const helloWorldSubTableFields = [
  {
    label: '问题流程编号',
    prop: 'question_id',
    show: true
  },
  {
    label: '创建人',
    prop: 'creator',
    show: true
  },
  {
    label: '审批状态',
    prop: 'approval_state',
    show: false
  },
  {
    label: '审批结果',
    prop: 'approval_result',
    show: true
  },
  {
    label: '问题标题',
    prop: 'problem_title',
    show: true
  },
  {
    label: '是否当下解决',
    prop: 'is_timely_solved',
    show: true
  },
  {
    label: '承诺解决日期',
    prop: 'submit_time',
    show: true
  },
  {
    label: '问题类型',
    prop: 'problem_type',
    show: true
  },
  {
    label: '负责人',
    prop: 'operator',
    show: true
  },
  {
    label: '背景及现状',
    prop: 'background',
    show: true
  }
];

const helloWorldSubSubChooseOptions = [
  {
    label: 'ID',
    type: 'input',
    prop: 'id'
  },
  {
    label: '负责人',
    type: 'input',
    prop: 'creator'
  },
  {
    label: '审批状态',
    prop: 'approval_state',
    type: 'select',
    options: [
      {
        value: 0,
        label: '未完成'
      },
      {
        value: 1,
        label: '已完成'
      }
    ]
  }
];

const helloWorldSubSubOptions = [
  {
    label: '是',
    value: 1
  },
  {
    label: '否',
    value: 0
  }
];

const helloWorldSubSubEditOptions = [
  {
    label: '创建人',
    type: 'input',
    prop: 'creator'
  },
  {
    label: '审批状态',
    prop: 'approval_state',
    type: 'select',
    options: [
      {
        value: 0,
        label: '未完成'
      },
      {
        value: 1,
        label: '已完成'
      }
    ]
  },
  {
    label: '问题标题',
    prop: 'problem_title',
    type: 'input'
  },
  {
    label: '提交时间',
    prop: 'submit_time',
    type: 'date'
  }
];

const helloWorldSubSubEditRules = {
  creator: [
    {
      required: true,
      message: '请输入'
    }
  ],
  approval_state: [
    {
      required: true,
      message: '请选择'
    }
  ],
  problem_title: [
    {
      required: true,
      message: '请输入'
    }
  ]
};

const logisticsTableFields = [
  {
    label: 'ID',
    prop: 'id',
    show: true,
    fixed: 'left',
    color: '#409eff',
    width: '85px'
  },
  {
    label: '运单号',
    prop: 'waybill_no',
    show: true,
    fixed: 'left',
    color: '#409eff'
  },
  {
    label: '物流商',
    prop: 'logistic_supplier',
    width: '130px',
    show: true,
    fixed: 'left',
    color: '#409eff',
    show_overflow_tooltip: true
  },
  {
    label: '仓库',
    prop: 'warehouse',
    show: true,
    width: '130px',
    show_overflow_tooltip: true
  },
  {
    label: '平台',
    prop: 'platform',
    show: false,
    width: '130px'
  },
  {
    label: '店铺',
    prop: 'shop',
    show: false
  },
  {
    label: '包裹类型',
    prop: 'parcel_type_desc',
    show: true,
    width: '85px'
  },
  {
    label: '标签',
    prop: 'label',
    width: '130px',
    show: true
  },
  {
    label: '订单号',
    prop: 'order_no',
    show: true
  },
  {
    label: 'SKU',
    prop: 'sku',
    show: true
  },
  {
    label: '发货时间',
    prop: 'shipping_time',
    show: true
  },
  {
    label: '首枪时效',
    prop: 'receipt_days',
    show: true,
    width: '85px'
  },
  {
    label: '送达时效',
    prop: 'delivery_days',
    show: true,
    width: '85px'
  },
  {
    label: '预计送达时间',
    prop: 'estimated_delivery_time',
    show: false
  },
  {
    label: '最新轨迹停留时长',
    prop: 'stay_time',
    show: true,
    width: '140px'
  },
  {
    label: '异常处理情况',
    prop: 'exception_handling_desc',
    show: true,
    width: '140px'
  },
  {
    label: '运输子状态',
    prop: 'transit_sub_state_desc',
    width: '300px',
    show: false
  },
  {
    label: '最新轨迹时间',
    prop: 'current_event_time',
    show: true
  },
  {
    label: '最新轨迹地址',
    prop: 'current_event_address',
    show: true
  },
  {
    label: '最新轨迹详情',
    prop: 'current_event_detail',
    width: '300px',
    show: true,
    show_overflow_tooltip: true
  },
  {
    label: '获取状态',
    prop: 'sync_state_desc',
    show: true,
    width: '85px'
  },
  {
    label: '获取时间',
    prop: 'sync_time',
    show: true
  },
  {
    label: '创建人',
    prop: 'creator',
    show: true,
    width: '85px'
  },
  {
    label: '创建时间',
    prop: 'create_time',
    show: true
  },
  {
    label: '备注',
    prop: 'remark',
    show: true,
    show_overflow_tooltip: true
  },
  {
    label: '运输状态',
    prop: 'transit_state_desc',
    show: true,
    fixed: 'right',
    color: '#409eff',
    width: '85px'
  }
];

export default {
  helloWorldTableFields,
  helloWorldSubTableFields,
  helloWorldSubSubOptions,
  helloWorldSubSubEditRules,
  helloWorldSubSubEditOptions,
  helloWorldSubSubChooseOptions,
  logisticsTableFields
};
</script>
