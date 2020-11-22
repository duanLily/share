# Sass
  |-简介：Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。
## 1、特色功能 (Features)
    |-完全兼容 CSS3
    |-在 CSS 基础上增加变 量、嵌套 (nesting)、混合 (mixins) 等功能
    |-通过函数进行颜色值与属性值的运算
    |-提供控制指令 (control directives)等高级功能
    |-自定义输出格式
## 2、语法格式 (Syntax)
    |-1、SCSS (Sassy CSS) 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 .scss 作为拓展名。
    |-2、Sass 被称为缩进格式 (Indented Sass) 是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能。这种格式以 .sass 作为拓展名。
    |-3、二者的区别：
         a、注释：            
    |-4、任何一种格式可以直接 导入 (@import) 到另一种格式中使用，或者通过 sass-convert 命令行工具转换成另一种格式：
      # Convert Sass to SCSS
      $ sass-convert style.sass style.scss
      # Convert SCSS to Sass
      $ sass-convert style.scss style.sass
## 3、使用 Sass (Using Sass)
    |-使用方式：
      |-方式1：作为命令行工具
      |-方式2：作为独立的 Ruby 模块 (Ruby module)
      |-方式3：作为 Rack-enabled 框架的插件（例如 Ruby on Rails 与 Merb）
    |-常用命令：
      |-gem install sass  安装sass。
      |-sass v  查看sass版本。
      |-sass sass/style.scss:css/style.css  将sass目录下的style.sass编译成style.css输出到css目录下。
      |-sass --watch sass:css  监视 Sass 文件，每次修改并保存时自动编译为css。
      |-sass --watch sass:css --style compact
        |-sass修改编译后输出的css有四种格式：
          |-nested，嵌套
          |-compact，紧凑
          |-expanded，扩展
          |-compressed，压缩
## 4、CSS 功能拓展 (CSS Extensions)
  ### 4.1、嵌套规则 (Nested Rules)
      |-允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器。避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理
  ### 4.2、父选择器 & (Referencing Parent Selectors:&)
      |-用 & 代表嵌套规则外层的父选择器。如果含有多层嵌套，最外层的父选择器会一层一层向下传递。& 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器。
  ### 4.3、属性嵌套 (Nested Properties)
      |-有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中。
  ### 4.4、占位符选择器 %foo (Placeholder Selectors: %foo)
      |-提供了一种特殊类型的选择器：占位符选择器 (placeholder selector)。与常用的 id 与 class 选择器写法相似，只是 # 或 . 替换成了 %。必须通过 @extend 指令调用
## 5、注释 /* */ 与 //
    |-多行注释 /* */，被完整输出到编译后的 CSS 文件中;
    |-单行注释 //，不会被完整输出到编译后的 CSS 文件中；
    |-将 ! 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息。插值语句 (interpolation) 也可写进多行注释中输出变量值。

## 6、SassScript
  ### 6.2、变量 $ (Variables: $)
      |-作用：存储信息并在将来重复利用
      |-变量以美元符号 $ 开头，赋值方法与 CSS 属性的写法一样，直接使用即调用变量。
      |-变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 !global 声明。
  ### 6.3、数据类型 (Data Types)（6中主要）
      |-数字，1, 2, 13, 10px
      |-字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
      |-颜色，blue, #04a3f9, rgba(255,0,0,0.5)
      |-布尔型，true, false
      |-空值，null
      |-数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
      |-maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)
      |-1、字符串 (Strings)
        |-有引号字符串 (quoted strings)
        |-无引号字符串 (unquoted strings)
        在编译 CSS 文件时一般不会改变其类型。只有使用 #{} (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名。
      |-数组 (Lists)

### 1、特色功能 (Features)
### 1、特色功能 (Features)
### 1、特色功能 (Features)
### 1、特色功能 (Features)






