// 该文件用于创建Vuex中最为核心的store
// 引入Vuex
import Vuex from 'vuex';
// 引入Vue
import Vue from "vue";
// 使用插件，vuex插件的使用必须在创建store之前
Vue.use(Vuex)
// 引入数据配置
import countOptions from './count'

// 创建并暴露store
export default new Vuex.Store({
    // actions, mutations, state, getters
    modules: {
        countAbout: countOptions
    }
});
