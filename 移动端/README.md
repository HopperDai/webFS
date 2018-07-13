## 移动端

### 布局

- \*viewport(视口) 浏览器的分辨率

- 盒模型 = width/height + padding + border

  - 普通盒模型 -> padding/border 会使得盒模型往外挤 -> 盒子变大

- \*新的盒模型

  - box-sizing

    - border-box: width/height 指的是到 border 的外面

      - 适用：布局好之后，重新调整盒子的大小，不影响整体布局的宽高

    - content-box: width/height 指的是内容部分

- \*弹性盒模型 flex

  - 父级：`display:flex`

  - 子级：`flex:1` -> 系数

    - 原理

    1.  可用总宽度 - 固定占的宽度 = 剩余空间

    2.  剩余空间\*flex/flex_sum -> 每个自己的宽度

- 响应式布局(响应式设计)：一套页面可以响应所有平台（PC 端、pad 端、手机端）

  - 结论：小网站挺好（如单页，落地页）；大网站不建议

  - 统一实现的技术：媒体查询（网页所工作的环境）-> `@media(条件){css 代码 （注意优先级）}` 类似 if (注：条件满足，证明样式存在，但最终还是要考虑样式的优先级)

  - style 标签的 media 属性

    - `<style media='screen'>` // 屏幕

    - `<style media='print'>` // 打印

- rem->移动端自适应 单位

  - rem `root em` 相对根元素（html）的字体大小

  - em 相对字体大小。`font-size:12px;width:2em` -> `width:24px`

  - 说明

    | 屏幕宽度 | ui 字体大小 | html 的 fontSize(需要改) | rem(不会变) | 计算的字体大小 |
    | -------- | ----------- | ------------------------ | ----------- | -------------- |
    | 320px    | 14px        | 32px                     | 0.4375      | 14px           |
    | 460px    | 20.125px    | 46px                     | 0.4375      | 20.125px       |

    - 屏幕宽度/字体大小=新的屏幕宽度/新的字体大小

    - 目标：所有的东西都跟着屏幕大小变化（尽量简单）

    - 方法：所有的尺寸都写成 rem ,只需要改 html 的 fontSize

      - 选一个设备作为基准分辨率（iphone6:375）

      - 自定义一个 html 的 fontSize 基准

      - demo

        ```
          假设：1.基准宽度为375；2.rem基准为20

          ui图：1.宽372 -> 基准 375
                2.高110 -> 基准 375*110/372=110.88
                注：缩放比率不变。即：宽/高=新宽/新高

          换算成 rem:
          1. 宽：375 / 20 = 18.75 rem
          2. 高：110.88 / 20 = 5.544 rem

        // 设置好 rem 之后，如果屏幕大小改变，只需要改 html 的 fontSize 即可

            基准屏幕                 真实屏幕
        宽    375                     clientWidth
        字体  20                      clientWidth*20/375
        ```

      - js 动态设置 html

      ```javascript
      // document.documentElement -> html

      document.documentElement.style.fontSize =
        (document.documentElement.clientWidth * 20) / 375 + "px";
      ```

      - \*具体步骤

        1.  定基准：屏幕基准、font-size 基准

        2.  ui 的宽度变为基准宽，算出基准高（等比缩放）；计算宽/高的 rem：基准宽/font-size

        3.  动态设置 html 的 font-size

      - 开发时

        1.  vscode 插件：px to rem（快捷键：alt+z）；默认基准 font-size 为 16px；给 html 的 font-size 设为 16px

        2.  使用 i6 的宽作为屏幕基准，即 375

        3.  js 动态设置 html 的 font-size

        ```javascript
        document.documentElement.style.fontSize =
          (document.documentElement.clientWidth * 16) / 375 + "px";
        ```

### 触屏事件

- touch 多点


