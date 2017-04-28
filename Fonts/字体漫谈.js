Ver : 2017.04.06 | 17:15

Source : https://github.com/catcat520/BLOG/blob/master/Fonts/字体漫谈.js

前言 : 文中虽参考多方资料，但仍有不少遗漏错误，请指正

01.字体名称漫谈

常见的英文名称中有 Serif 和 Sans Serif  即为英文的两大字体类型 衬线和无衬线，代表为 Times New Roman(Serif) 和 Arial(Sans Serif)

衬，顾名思义，陪衬装饰之用，在西方英文的意义，有衬线的字体指的是笔画开始结束的地方与其他部分粗细大小不同，以便达到更易于识别的作用

在中国以及整个汉字文化圈，字的书写工具往往是毛笔，由于毛笔的特性，使得中文字笔画的开始和结束以及躯干大小粗细不同，中文是天然的衬线体

在西方的历史中，一直是使用鹅毛笔作为书写工具，其特性正正是笔画没有太大的粗细之分，因此英文是天然的无衬线体，从衬线的装饰作用上看，无衬线为骨干，

衬线为装饰，如果以此逻辑推测，在西方，衬线体应该出现在无衬线体之后，然而实际上却并非如此，在最早期的时候，鹅毛笔的字体虽然没有衬线，却不叫无衬线体

而是以其手写的含义叫做 script 手写体，在西方最早的时候 无衬线体并不叫做 Sans Serif

而是叫做 Gothic，这是因为 Gothic 字体并非都是无衬线，到了后期，西方专门把 Gothic 字体中的无衬线字体抽离而和 Serif 对应叫做 Sans Serif

中文里面长期以来以 宋体和楷体 为主要代表，虽然中文字体在发展过程中出现过类似黑体的无衬线字体，但并没有形成系统

在 WIN系统中我们还可以看见一个叫做 仿宋 的字体，跟宋体比较，我们会发现，这个所谓的仿宋跟宋体大大不同，似乎仿的并不太成功，怎么会叫仿宋

原因在于，这个仿宋确实是模仿宋朝的字体而产生的字体，而我们现在使用的所谓的宋体，实际上诞生与元明朝代之际，实际上叫明朝体，可能后来的康熙皇帝

害怕有人思旧反清复明，下诏此后此类字体皆称宋体，到了近现代，中文字体受到了西方的无衬线字体以及日本的黑体影响，逐渐形成了中文特色的黑体字体
<img src=https://raw.githubusercontent.com/catcat520/BLOG/master/Fonts/img/fontknowledge/%E6%80%BB%E6%9C%89%E5%88%81%E6%B0%91%E6%83%B3%E5%AE%B3%E6%9C%95.png>

在 WIN 系统内置的 黑体/仿宋/(新)宋体/楷体 均为中易公司为微软制作的简体字体，而 (新)細明體/標楷體 均为华康公司为微软制作的繁体字体

注 : 在微软 OFFICE 里面附带的宋体并非中易公司所制作，而是方正公司授权给微软的 宋体-方正超大字符集

由于早期 WIN 系统的普及，凡提到宋体必指 WIN 系统自带的 中易宋体，凡提到黑体必指 WIN 系统自带的 中易黑体

随着网络普及，字体的大量涌现，现在宋体和黑体等名称不再特指 WIN 系统自带的 宋体和黑体

日文字体受英文和中文影响也有无衬线和衬线，日文主要使用的衬线体为明朝体，日本的明朝体以宋(朝)体为基础，融入结合了明朝时候的字体，

又经过清朝时候的明朝体（清朝时的明朝体日本称为明清体，中国称为宋体）的过渡，逐渐形成了近现代的日本独有的明朝字体

日本的无衬线体是受西方英文无衬线字体而影响产生的 黑体，ゴシック体(Goshikku-tai，音译即“哥特体”)，

而在最早传入日本的时候 叫 Gothic，所以日本就一直沿用了下去

需要注意的是，日本在黑体的基础上又发展了丸体，既中文的圆体，日文名为 丸ゴシック体，因此与其对应的黑体又称为 角ゴシック体

我们在日文字体名称经常可以看见 Kaku Gothic 实际上即为黑体，Maru Gothic 为圆体，而有些日文字体名称省略了 Kaku，只保留 Gothic，也是黑体

日文黑体对应的日文汉字名称为 黒体(注意其中的黑字为日文异体字，而体字并非繁体的體)，日文圆体对应的日文汉字名称为 圓黒体

日语中 書体(しょたい) 指的是中文的 字体，日语中的 字体(じたい/フォント) 有特指 两种不同的字形的意义，比如 简体 学 和 繁体 學，但有时候又把 字体等同于書体

99.常识定义

编码<中文汉字> : GBJ(简)/GB2312、GBF(繁)/<GB/T 12345>、GBK(简繁)/MS936、Big5(大五码)(繁)、GB18030(简繁)、CNS11643(Big5-2003)(繁)
GB : 国家标准
GB2312(1980) : 总字符7445，非汉字682，汉字6763，一级字3755，以拼音排序，二级字3008，以偏旁排序。
             : 强制显示简体，同一位置编码的繁体则显示对应的简体
GB/T 12345(1990) : 总字符7583，非汉字717，汉字6866，其中 简体字6763 转为繁体，增补一简对多繁 繁体字103
                 : 强制显示繁体，同一位置编码的简体则显示对应的繁体，此标准未被中国大陆以外地区接受，常用于古籍及繁体文字
GBK(1995) : 总字符21886，非汉字883，汉字21003，K为汉语拼音扩展缩写，该标准在 1995年12月15日 以中国技监标函 1995 229 号文件发布，需要注意
          : WIN95 中文版 也支持 GBK，WIN95 发布时间为 1995年 8月 24日，中文版发布时间为 1996年 3月 15日
Big5(1984) : 总字符13461，非汉字408，汉字13053/倚天 : 总字符13468，非汉字408，汉字13060，Big5 最初为业界标准而非法律标准，2003年收录为台湾官方标准
GB18030(2000 CJK-Ext-A : 汉字27533/2005 CJK-Ext-B) : 总字符76556，非汉字6312，汉字70244

BMP : Basic Multilingual Plane（基本多文种平面）的英文缩写，也称为第零平面(Plane 0)，Unicode编码范围是U+0000-U+FFFF
SIP : Supplementary Ideographic Plane（表意文字补充平面）的英文缩写，也称为第二辅助平面(Plane 2)，Unicode编码范围是U+20000-U+2FFFF

汉仪编码 : J(GB2312/6763字)/F(GBT12345/8877字)/W(汉仪常用简繁/9169字)/S(GB18030-2000/27533字)/H(HKSCS/27533字)/B(Big5/13077字)/TS(GB18030-2005/70244字)
