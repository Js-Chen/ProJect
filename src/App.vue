<template>
  <div class="app-box">
    <!-- heade头部 -->
    <mt-header fixed title="VUE-项目"></mt-header>
		<!-- 组件展示区 -->
		<transition>
			<router-view></router-view>
		</transition>
    <!-- 底部菜单栏 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/message">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/settings">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default{
	
}
</script>

<style>
html body{
    background-color:#fff;
} 
  .app-box{
    padding-top: 40px;
		overflow-x: hidden;
  }
	.v-enter{
		opacity: 0;
		transform: translateX(100%)
	}
	.v-leave-to{
		transform:translateX(-100%);
		opacity: 0;
		position: absolute; 
	}
	.v-enter-active,
	.v-leave-active{
		transition:all 0.8s ease;
	}
</style>
