export default {
  name: 'ContainerView',
  props: {
  },
  data() {
    return {
      // 預設顯示的路徑,
      activeIndex: '/jasperDemo',
      title: '2024 iThome 鐵人賽 <Java工程師的報表入門與實作> 報表範例'
    }
  },
  watch: {
    // 監聽路由變化，並更新 activeIndex
    $route(to) {
      this.activeIndex = to.path;
    }
  },
  methods: {
    handleSelect(index) {
      // 如果選中的路由與當前路由相同，則不進行導航
      if (this.$route.path !== index) {
        this.$router.push(index);
      }
    },
  },
}