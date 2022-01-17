module.exports = {
    extends: ['@dianmi-fe/eslint-config-vue'],
    globals: {
        getApp: false,
        wx: false,
        Vue: false,
        VueRouter: false,
        PushStream: false,
        TIM: false,
        TcPlayer: false
    },
    rules: {
        'import/extensions': 0,
        'prefer-const': ['error', { destructuring: 'all' }]
    }
}
