export default {
    parnterId:3,
    serverIp:'http://www.7uao.com/',
    wxAppid: "wxc0c60e07a4916091",
    userTypeName: {
        10: "技术员",
        11: "管理员",
        12: "合作伙伴",
        13: "代理",
        14: "玩家",
        15: "测试员"
    },
    userStatus: {
        wait: 0,
        normal: 1,
        locked: 2
    },
    operateTip: {
        gamer: "抱歉，非正式代理不能进入后台管理",
        apply: "操作成功，请重公众号登陆管理后台"
    },
    messageType: {
        suggestion: 1,
        message: 2,
        outMoney: 3
    },
    messageStatus: {
        newMsg: 1,
        processed: 2,
        invalid: 3
    },
    messageStatusText: {
        1: "未处理",
        2: "已处理",
        3: "作废"
    },
    classify: {
        3: [1, 2, 3, 6, 8],
        4: [1, 2, 4, 8],
        5: [1, 2, 5, 6, 8],
        6: [1, 2, 8,9],
        7: [1, 2, 8,10],
        8:[2,8]
    }
}