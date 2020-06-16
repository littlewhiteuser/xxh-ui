<template>
  <div>
    <el-button
      type="success"
      @click="drawerVisible = true"
    >打开侧弹</el-button>
    <ChooseDrawer
      :size="830"
      title="分配"
      :drawerVisible.sync="drawerVisible"
      @searchForm="searchDrawerForm"
      @confirm="confirmDrawerData"
      @drawerCurrentChange="drawerCurrentChange"
      :formOptions="formOptions"
      :tableOptions="tableOptions"
      :tableData="tableData"
      :total="total"
    ></ChooseDrawer>
  </div>
</template>

<script>
export default {
  comments: {},
  data () {
    return {
      page: {
        total: 4,
        currentPage: 1,
        pageSize: 20
      },
      drawerVisible: false,
      tableData: [
        {
          staffCode: "12121",
          staffName: "王小虎",
          deptName: "上海市普陀区金沙江路 1518 弄"
        },
        {
          staffCode: "121212",
          staffName: "王小虎",
          deptName: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      // 分配组件表单字段
      formOptions: [
        { label: '员工名称', type: 'text', field: 'staffName' },
        { label: '员工工号', type: 'text', field: 'staffCode' },
        { label: '部门名称', type: 'text', field: 'deptName' }
      ],
      // 分配组件列表字段
      tableOptions: [
        { label: '员工工号', type: 'text', field: 'staffCode', width: '150', isOnly: true },
        { label: '员工名称', type: 'text', field: 'staffName', width: '170' },
        { label: '员工所属部门', type: 'text', field: 'deptName', width: '200' }
      ],
      total: 10
    }
  },
  methods: {
    handleSizeCb () { },
    handlePageCb () { },
    indexMethod (index) {
      return index * 2;
    },
    handleScope (scope) {
      console.log(scope);
    },
    searchDrawerForm () { },
    confirmDrawerData () { },
    drawerCurrentChange () { },
  }
}
</script>