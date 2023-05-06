/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx059fd4d424143c9b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7d4b8fa3b005d268e5238b83ac71c593',

  PROVINCE: '江苏',
  CITY: '苏州',

[
    {
      // 想要发送的人的名字
      name: "clx",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o_nWa5pK5vM_omuqjPFXLQHGBT2k",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "GRDkkemH1YKx-QxnKQ7SFkSE1aO5baerUpY-t3HEBtc",
      // 所在省份
      province: "江苏",
      // 所在城市
      city: "苏州",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: "04-10",
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: "今日",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "www.baidu.com",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "生日",
          name: "clx",
          year: "2000",
          date: "04-10",
          isShowAge: true,
        },
        {
          type: "生日",
          name: "cyx",
          year: "2001",
          date: "11-28",
          isShowAge: true,
        },
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2023-03-14" },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
        // 退伍日
        //{ keyword: 'ex_day', date: '2022-09-10' }
      ],
    },
    {
      name: "cyx",
      id: "o_nWa5kg8PvBPXEvppfBjSlvp34g",
      useTemplateId: "GRDkkemH1YKx-QxnKQ7SFkSE1aO5baerUpY-t3HEBtc",
      province: "江苏",
      city: "扬州",
      horoscopeDate: "11-28",
      horoscopeDateType: "今日",
      openUrl: "www.baidu.com",
      festivals: [
        {
          type: "生日",
          name: "clx",
          year: "2000",
          date: "04-10",
          isShowAge: true,
        },
        {
          type: "生日",
          name: "cyx",
          year: "2001",
          date: "11-28",
          isShowAge: true,
        },
      ],
      customizedDateList: [{ keyword: "love_day", date: "2023-03-14" }],
      courseSchedule: null,
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

