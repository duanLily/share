# Sass
  |-简介：Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、
    嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更
    加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。
## 1、特色功能 (Features)
    |-完全兼容 CSS3
    |-在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能
    |-通过函数进行颜色值与属性值的运算
    |-提供控制指令 (control directives)等高级功能
    |-自定义输出格式
## 2、语法格式 (Syntax)
    |-1、SCSS (Sassy CSS) 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 .scss 作为拓展名。
    |-2、Sass 被称为缩进格式 (Indented Sass) 是一种简化格式。它使用“缩进”代替“花括号”表示属性属于某个选择器，用“换行”代替“分号”分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能。这种格式以 .sass 作为拓展名。
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
      |-有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。
        为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中。
  ### 4.4、占位符选择器 %foo (Placeholder Selectors: %foo)
      |-提供了一种特殊类型的选择器：占位符选择器 (placeholder selector)。与常用的 id 与 class 选择器写法相似，只是 # 或 . 替换成了 %。必须通过 @extend 指令调用
## 5、注释 /* */ 与 //
    |-多行注释 /* */，被完整输出到编译后的 CSS 文件中;
    |-单行注释 //，不会被完整输出到编译后的 CSS 文件中;
    |-将 ! 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息。
      插值语句 (interpolation) 也可写进多行注释中输出变量值。

## 6、变量 $ (Variables: $)
    |-作用：存储信息并在将来重复利用
    |-变量以美元符号 $ 开头，赋值方法与 CSS 属性的写法一样，直接使用即调用变量。
    |-变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。
      将局部变量转换为全局变量可以添加 !global 声明。
## 7、数据类型 (Data Types)（6中主要）  函数
    |-字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
    |-数字，1, 2, 13, 10px
    |-颜色，blue, #04a3f9, rgba(255,0,0,0.5)
    |-数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
    |-maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)
    |-布尔型，true, false
    |-空值，null
  ### 7.1、字符串 (Strings)
      |-有引号字符串 (quoted strings)
      |-无引号字符串 (unquoted strings)
        在编译 CSS 文件时一般不会改变其类型。只有使用 #{} (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名。
      |-字符串相关函数
        |-quote(string)：给字符串添加引号;
        |-unquote(string)：移除字符串的引号;
        |-str-index(string, substring)：返回 substring 子字符串第一次在 string 中出现的位置。如果没有匹配到子字符串，则返回 null;
        |-str-insert(string, insert, index)：在字符串 string 中 index 位置插入 insert;
        |-str-length(string)：返回字符串的长度;
        |-str-slice(string, start, end)：从 string 中截取子字符串，通过 start-at 和 end-at 设置始末位置，未指定结束索引值则默认截取到字符串末尾;
        |-to-lower-case(string)：将字符串转成小写;
        |-to-upper-case(string)：将字符串转成大写;
        |-unique-id()：返回一个无引号的随机字符串作为 id。不过也只能保证在单次的 Sass 编译中确保这个 id 的唯一性;
  ### 7.2、数字 (Number)
      |-数字相关函数：
        |-abs(number):返回一个数值的绝对值;
        |-ceil(number):向上取整;
        |-floor(number):向下取整;
        |-comparable(num1, num2):返回一个布尔值，判断 num1 与 num2 是否可以进行比较;
        |-max(number...):返回最大值;
        |-min(number...):返回最小值;
        |-percentage(number):将数字转化为百分比的表达形式;
        |-random():返回 0-1 区间内的小数;
        |-random(number):返回 1 至 number 之间的整数，包括 1 和 limit;
        |-round(number):返回最接近该数的一个整数，四舍五入;
  ### 7.3、颜色 (color)
      |-颜色函数--颜色设置
        |-rgb(red, green, blue):	创建一个 Red-Green-Blue (RGB) 色。其中 R 是 "red" 表示红色，而 G 是 "green" 绿色，B 是 "blue" 蓝色;
        |-rgba(red, green, blue, alpha):根据红、绿、蓝和透明度值创建一个颜色;
        |-hsl(hue, saturation, lightness):通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色;
        |-hsla(hue, saturation, lightness, alpha):通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色;
        |-grayscale(color):将一个颜色变成灰色，相当于 desaturate( color,100%);
        |-complement(color):返回一个补充色，相当于adjust-hue($color,180deg);
        |-invert(color, weight):返回一个反相色，红、绿、蓝色值倒过来，而透明度不变;
      |-颜色函数--颜色获取
        |-red(color):从一个颜色中获取其中红色值（0-255）;
        |-green(color):从一个颜色中获取其中绿色值（0-255）;
        |-blue(color):从一个颜色中获取其中蓝色值（0-255）;
        |-hue(color):返回颜色在 HSL 色值中的角度值 (0deg - 255deg);
        |-saturation(color):获取一个颜色的饱和度值(0% - 100%);
        |-lightness(color):获取一个颜色的亮度值(0% - 100%);
        |-alpha(color):返回颜色的alpha通道，0到1之间的数字;
        |-opacity(color):获取颜色透明度值(0-1);
      |-颜色函数--颜色操作
        |-opacify(color, amount):降低颜色的透明度，取值在 0-1 之。等价于 adjust-color(color, alpha: amount);
        |-fade-in(color, amount):降低颜色的透明度，取值在 0-1 之。等价于 adjust-color(color, alpha: amount);
        |-fade-out(color, amount):提升颜色的透明度，取值在 0-1 之间。等价于 adjust-color(color, alpha: -amount);
        |-transparentize(color, amount):提升颜色的透明度，取值在 0-1 之间。等价于 adjust-color(color, alpha: -amount);
        |-rgba(color, alpha):根据红、绿、蓝和透明度值创建一个颜色;
        |-lighten(color, amount):通过改变颜色的亮度值（0% - 100%），让颜色变亮，创建一个新的颜色;
        |-darken(color, amount):通过改变颜色的亮度值（0% - 100%），让颜色变暗，创建一个新的颜色;
        |-saturate(color, amount):提高传入颜色的色彩饱和度。等同于 adjust-color( color, saturation: amount);
        |-desaturate(color, amount):调低一个颜色的饱和度后产生一个新的色值。同样，饱和度的取值区间在 0% ~ 100%。等同于 adjust-color(color, saturation: -amount);
        |-mix(color1, color2, weight):把两种颜色混合起来。 weight 参数必须是 0% 到 100%。
          默认 weight 为 50%，表明新颜色各取 50% color1 和 color2 的色值相加。
          如果 weight 为 25%，那表明新颜色为 25% color1 和 75% color2 的色值相加;
        |-adjust-hue(color, degrees):通过改变一个颜色的色相值（-360deg - 360deg），创建一个新的颜色;
        |-adjust-color(color, red, green, blue, hue, saturation, lightness, alpha):这个函数能够调整给定色彩的一个或多个属性值，
          包括 RGB 和 HSL 色彩的各项色值参数，另外还有 alpha 通道的取值。这些属性值的调整依赖传入的关键值参数，
          通过这些参数再与给定颜色相应的色彩值做加减运算;
        |-change-color(color, red, green, blue, hue, saturation, lightness, alpha):跟上面 adjust-color 类似，
          只是在该函数中传入的参数将直接替换原来的值，而不做任何的运算;
        |-scale-color(color, red, green, blue,  saturation, lightness, alpha):不必担心溢出，让参数在阈值范围内进行有效的调节。
          adjust-color 通过传入的参数简单的与本身的色值参数做加减，有时候可能会导致累加值溢出，当然，函数会把结果控制在有效的阈值内。
          而 scale-color 函数则避免了这种情况。举个例子，一个颜色的亮度 lightness 取值在 0% ~ 100% 之间，假如执行 scale-color($color, $lightness: 40%)，
          表明该颜色的亮度将有 (100 - 原始值) × 40% 的增幅。
          另一个例子，执行 scale-color($color, $lightness: -40%)，表明这个颜色的亮度将减少 (原始值 - 0) × 40% 这么多的值。
          所有传参的取值范围都在 0% ~ 100% 之间，并且 RGB 同 HSL 的传参不能冲突;
  ### 7.4、列表 (List)
      |-列表函数
        |-length(list):返回列表的长度号;
        |-nth(list, n):设置列表第 n 项的值为 value;
        |-set-nth(list, n, value):获取第 n 项的值;
        |-index(list, value):返回元素 value 在列表中的索引位置;
        |-append(list, value, [separator]):将单个值 value 添加到列表尾部。separator 是分隔符，默认会自动侦测，或者指定为逗号或空格;
        |-join(list1, list2, [separator, bracketed]):合并两列表，将列表 list2 添加到列表 list1 的末尾。
          separator 是分隔符，默认会自动侦测，或者指定为逗号或空格。 bracketed 默认会自动侦测是否有中括号，可以设置为 true 或 false;
        |-zip(lists):将多个列表按照以相同索引值为一组，重新组成一个新的多维度列表;
        |-is-bracketed(list):判断列表中是否有中括号;
        |-list-separator(list):返回一列表的分隔符类型。可以是空格或逗号;
  ### 7.5、映射 (Map)
      |-映射函数
        |-map-get(map, key):返回 Map 中 key 所对应的 value(值)。如没有对应的 key，则返回 null 值;
        |-map-keys(map):返回 map 中所有的 key 组成的队列;
        |-map-values(map):返回 map 中所有的 value 并生成一个队列;
        |-map-has-key(map, key):判断 map 是否有对应的 key，存在返回 true，否则返回 false;
        |-map-merge(map1, map2):合并两个 map 形成一个新的 map 类型，即将 map2 添加到 map1的尾部;
        |-map-remove(map, keys...):移除 map 中的 keys，多个 key 使用逗号隔开;
  ### 7.6、选择器函数
      |-选择器函数
        |-is-superselector(super, sub):比较两个选择器匹配的范围，即判断 super 选择器是否包含了 sub 选择器所匹配的范围，是的话返回 true，否则返回 false;
        |-selector-append(selectors):将第二个 (也可以有多个) 添加到第一个选择器的后面。 selector.;
        |-simple-selectors(selectors):将合成选择器拆为单个选择器;
        |-selector-unify(selector1, selector2):将两组选择器合成一个复合选择器。如两个选择器无法合成，则返回 null 值;
        |-selector-replace(selector, original, replacement):给定一个选择器，用replacement 替换 original 后返回一个新的选择器队列;
        |-selector-parse(selector):将字符串的选择符 selector 转换成选择器队列;
        |-selector-nest(selectors):返回一个新的选择器，该选择器通过提供的列表选择器生成一个嵌套的列表;
  ### 7.6、Introspection 函数
      |- Introspection 函数比较少用于构建样式表，一般用于代码的调试上
        |-type-of(value):返回值类型。返回值可以是 number, string, color, list, map, bool, null, function, arglist;
        |-call(function, arguments...):函数的动态调用，即调用函数 function 参数为 arguments，并返回结果;
        |-content-exists():查看当前的混入是否传递 @content 块;
        |-feature-exists(feature):检查当前的 Sass 实现是否支持该特性;
        |-function-exists(functionname):检测指定的函数是否存在;
        |-get-function(functionname, css: false):返回指定函数。如果 css 为 true，则返回纯 CSS 函数;
        |-global-variable-exists(variablename):检测某个全局变量是否定义;
        |-inspect(value):返回一个字符串的表示形式，value 是一个 sass 表达式;
        |-mixin-exists(mixinname):检测指定混入 (mixinname) 是否存在;
        |-unit(number):返回传入数字的单位（或复合单位）;
        |-unitless(number):返回一个布尔值，判断传入的数字是否带有单位;
        |-variable-exists(variablename):判断变量是否在当前的作用域下;



### 1、特色功能 (Features)
### 1、特色功能 (Features)
### 1、特色功能 (Features)
### 1、特色功能 (Features)



## API
  |-链接：https://www.sass.hk/



