import createEnum from './createEnum'

// 有空补充注释
// createEnum [类型名称, 类型值, 类型字符串, 其他额外补充属性(可选)]

export const DEGREE_ENUM = createEnum([
    ['GRADUATE', 1, '专科'],
    ['BACHELOR', 2, '本科'],
    ['MASTER', 3, '研究生'],
    ['DOCTOR', 4, '博士'],
])
