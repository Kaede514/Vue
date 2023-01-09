// 计数功能相关的配置
export default {
    // 开启命名空间
    namespaced: true,
    actions: {
        incOdd(context, value) {
            if (context.state.sum % 2) context.commit('INC', value);
        },
        incWait(context, value) {
            setTimeout(() => context.commit('INC', value), 1000);
        }
    },
    mutations: {
        INC(state, value) {
            state.sum += value;
        },
        DEC(state, value) {
            state.sum -= value;
        }
    },
    state: {
        sum: 0
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
};
    