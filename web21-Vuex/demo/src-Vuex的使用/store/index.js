// 该文件用于创建Vuex中最为核心的store
// 引入Vuex
import Vuex from 'vuex';
// 引入Vue
import Vue from "vue";
// 使用插件，vuex插件的使用必须在创建store之前
Vue.use(Vuex)

// 准备actions，用于响应组件中的动作
const actions = {
    incOdd(context, value) {
        if (context.state.sum % 2) context.commit('INC', value);
    },
    incWait(context, value) {
        setTimeout(() => context.commit('INC', value), 1000);
    }
};
// 准备mutations，用于操作数据(state)
const mutations = {
    INC(state, value) {
        state.sum += value;
    },
    DEC(state, value) {
        state.sum -= value;
    }
};
// 准备state，用于存储数据
const state = {
    sum: 0
};
// 准备getters，用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
};

// 创建并暴露store
export default new Vuex.Store({
    actions, mutations, state, getters
});
    