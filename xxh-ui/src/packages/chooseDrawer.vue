<template>
  <div class="right-drawer">
    <el-drawer
      class="el-right-drawer"
      :size="size + 'px'"
      :title="title"
      :visible.sync="elDrawerVisible"
      :wrapperClosable="false"
    >
      <div
        class="table-filter-sales"
        v-if="isNeedSearch"
      >
        <el-form
          :inline="true"
          :model="formData"
          label-width="72px"
        >
          <template v-for="item in constFormOptions">
            <el-form-item
              :label="item.label"
              :key="item.field"
            >
              <el-input
                v-model="constFormData[item.field]"
                disabled
              ></el-input>
            </el-form-item>
          </template>
          <template v-for="item in formOptions">
            <el-form-item
              :label="item.label"
              :key="item.field"
            >
              <el-input
                v-if="item.type === 'text'"
                placeholder="请输入"
                v-model="formData[item.field]"
                maxlength="50"
              ></el-input>
              <el-select
                v-if="item.type === 'select'"
                v-model="formData[item.field]"
                placeholder="请选择"
              >
                <el-option
                  v-for="obj in item.options"
                  :key="obj.value"
                  :label="obj.label"
                  :value="obj.value"
                ></el-option>
              </el-select>
              <el-date-picker
                v-if="item.type === 'date'"
                v-model="formData[item.field]"
                type="date"
                value-format="timestamp"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </template>
          <div class="search-button">
            <el-button
              class="btn-topic"
              @click="search"
            >查询</el-button>
            <el-button
              class="btn-default reset"
              @click="reset"
            >重置</el-button>
          </div>
        </el-form>
      </div>
      <div
        class="drawerTable"
        :class="[isNeedSearch ? '' : 'notNeedSearch']"
      >
        <el-table
          ref="multipleTable"
          border
          stripe
          :data="tableData"
          empty-text="暂无数据"
          :height="tableHeight"
          :row-key="filterField"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            v-if="type === 'single'"
            label
            width="35"
            align="center"
          >
            <template slot-scope="scope">
              <el-radio
                v-model="radio"
                :label="scope.row[filterField]"
                @change="chooseData(scope.$index, scope.row)"
              ></el-radio>
              <span></span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="type === 'selection'"
            type="selection"
            :reserve-selection="true"
            width="35"
          ></el-table-column>
          <el-table-column
            type="index"
            width="35"
          ></el-table-column>
          <el-table-column
            v-for="(item,index) in tableOptions"
            :key="item.field + index"
            :label="item.label"
            :prop="item.field"
            :show-overflow-tooltip="true"
            :min-width="item.width"
          >
            <template slot-scope="scope">
              <span v-if="item.type !== 'link'">{{getScope(scope.row, item.field, item.type, item.statusMap)}}</span>
              <span
                v-else
                class="link-style"
                @click="jumpToDetail(item.linkOptions.basic, scope.row[item.linkOptions.key])"
              >{{ scope.row[item.field] || '-' }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination_box">
        <el-pagination
          :current-page="pagination.pageNum"
          @current-change="handleCurrentChange"
          :page-size="20"
          layout="total, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
      <p class="drawer-footer">
        <span
          class="btn submit-btn"
          @click="confirm"
        >确定</span>
        <span
          class="btn cancel_btn"
          @click="elDrawerVisible = false"
        >取消</span>
      </p>
    </el-drawer>
  </div>
</template>

<script>
import { formatDate } from '../../util/datetime'
export default {
  name: 'ChooseDrawer',
  props: {
    // 显隐控制
    drawerVisible: {
      type: Boolean,
      default: false
    },
    // 需不需要查询条件
    isNeedSearch: {
      type: Boolean,
      default: true
    },
    // 不可改变的搜索数据
    constFormData: {
      type: Object,
      default: () => { }
    },
    constFormOptions: {
      type: Array,
      default: () => []
    },
    // 表单选项
    formOptions: {
      type: Array,
      default: () => []
    },
    // 列表选项
    tableOptions: {
      type: Array,
      default: () => []
    },
    // 列表数据
    tableData: {
      type: Array,
      default: () => []
    },
    // 列表总数
    total: {
      type: Number,
      default: 0
    },
    // 抽屉大小
    size: {
      type: Number,
      default: 830
    },
    // 标题
    title: {
      type: String,
      default: '标题'
    },
    // 表格单选多选切换
    type: {
      type: String,
      default: 'single',
      validator (type) {
        if (
          type &&
          !['selection', 'single'].includes(type)
        ) {
          console.error(
            'type类型必须为:' +
            ['selection', 'single'].join('、')
          )
        }
        return true
      }
    }
  },
  watch: {
  },
  data () {
    return {
      formData: {},
      formInit: {}, // 缓存表单，点查询后将当前表单数据同步
      multipleSelection: [],
      radio: '',
      pagination: {
        pageNum: 1,
        pageSize: 20
      }
    }
  },
  computed: {
    // 表格高度
    tableHeight () {
      if (this.isNeedSearch) {
        return window.innerHeight - 240
      } else {
        return window.innerHeight - 200
      }
    },
    // 抽屉显隐
    elDrawerVisible: {
      get () {
        return this.drawerVisible
      },
      set (newVal) {
        this.pagination.pageNum = 1
        this.formData = {}
        this.formInit = {}
        this.radio = ''
        this.multipleSelection = []
        this.type === 'selection' && this.$refs.multipleTable.clearSelection()
        this.$emit('update:drawerVisible', newVal)
        if (!newVal) this.$emit('close')
      }
    },
    // 筛选唯一字段
    filterField () {
      let array = this.tableOptions.filter(item => {
        return item.isOnly
      })
      if (array && array.length > 0) {
        return array[0].field
      } else {
        console.error('传入的tableOptions需要有一条唯一数据，包含isOnly:true')
        return ''
      }
    }
  },
  methods: {
    // 查询
    search () {
      // this.traverse(this.formData)
      this.pagination.pageNum = 1
      this.formInit = Object.assign({}, this.formData)
      let params = this.concatData(this.formData)
      this.$emit('searchForm', params)
    },
    // 合并表单和分页的参数
    concatData (data) {
      return data ? Object.assign({}, data, this.pagination) : this.pagination
    },
    // 备用 删除空参数
    // traverse (data) {
    //   const keys = Object.keys(this.formData)
    //   for (let item of keys) {
    //     if (!this.isDef(this.formData[item])) this.$delete(this.formData, item)
    //   }
    // },
    // 空校验
    isDef (v) {
      return v !== undefined && v !== null && v !== ''
    },
    // 重置
    reset () {
      for (let item in this.formData) {
        this.formData[item] = ''
      }
    },
    // 以下对表格特定数据做特殊处理
    getScope (row, field, type, statusMap = {}) {
      let val = row[field]
      switch (type) {
        case 'text':
          return val || '-'
        case 'date':
          return formatDate(val) || '-'
        case 'formatDate':
          return formatDate(val, 'YYYY-MM-DD')
        case 'timeQuanTum':
          return formatDate(val, 'YYYY-MM-DD') + '~' + formatDate(row['endTime'], 'YYYY-MM-DD')
        case 'status':
          return statusMap[val] || '-'
        default:
          return val || '-'
      }
    },
    // 获取单选数据
    chooseData (index, row) {
      this.multipleSelection[0] = row
    },
    // 确认按钮
    confirm () {
      if (!this.multipleSelection.length) {
        this.$message({
          showClose: true,
          message: '请选择一行数据',
          type: 'error'
        })
      } else {
        this.$emit('confirm', this.multipleSelection)
        this.elDrawerVisible = false
      }
    },
    // 切换分页
    handleCurrentChange (val) {
      this.pagination.pageNum = val
      let params = this.concatData(this.formInit)
      this.$emit('searchForm', params)
    },
    // 多选回调
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 跳转详情页
    jumpToDetail (basic, id) {
      this.$router.push({
        path: `${basic}/${id}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>