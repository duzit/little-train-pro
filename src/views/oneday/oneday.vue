<template>
  <div class="h100 oneday">
    <el-row :gutter="18">
      <el-col :span="6">
        <el-tree
          ref="onedayTree"
          class="tree-layout"
          :data="treeData"
          :props="defaultProps"
          highlight-current
          accordion
          node-key="id"
          @node-click="handleNodeClick"
        >
        </el-tree>
      </el-col>
      <el-col :span="18">
        <transition name="detail">
          <oneday-detail
            ref="onedayDetail"
            class="detail-layout"
          >
          </oneday-detail>
        </transition>
      </el-col>
    </el-row>
    
    
  </div>
</template>
<script>
import { 
  oneTrees 
} from '@/utils/tree-data.js'

import onedayDetail from '@/components/oneday/details.vue'

export default {
  components: {
    onedayDetail
  },
  data() {
    return {
      defaultProps: {
        label: 'label',
      },
      treeData: [],
    }
  },
  mounted() {
    // 初始树数据
    this.init()
  },
  methods: {
    init() {
      this.treeData = oneTrees
      // 默认选中第一个节点
      this.$nextTick(() => {
        this.$refs.onedayTree &&
          this.$refs.onedayTree.setCurrentKey('a')
      })
    },
    handleNodeClick(data, node) {
      // this.$refs.onedayDetail.locationHref(data.herf)
    },
  }
}
</script>
<style lang="scss" scoped>
.oneday {
  margin-top: 10px;
  overflow: auto;
  .el-row,
  .el-col {
    height: 100%;
  }
  .tree-layout,
  .detail-layout {
    padding: 1.5rem 3rem;
    height: 88%;
    overflow: auto;
  }

  .detail-layout {
    background: #fff;
  }

  // 好像没用呀
  .detail-enter-active {
    transition: all .3s ease;
  }

  .detail-enter, .detail-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
 
}
</style>
