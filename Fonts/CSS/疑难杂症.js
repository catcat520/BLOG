001.chrome 字体 粗细 FallBack
#ThePowerOfRedYellow{content:"手札体-简体";}
@font-face{font-family:"Plus.Func.Fonts.CN.FallBack";font-weight:Bold;src:local("Hannotate SC"),local("Hannotate SC Regular");}
@font-face{font-family:"Plus.Func.Fonts.CN.FallBack";src:local("Hannotate SC"),local("Hannotate SC Regular");}
#ThePowerOfRedYellow{content:"阿里类网站&ForceFont";}

002.判断 firefox / chrome
firefox : 
@supports(-moz-osx-font-smoothing: grayscale){
@font-face{font-family:"VarFont";src:local("KaiTi");}
*{font-family:VarFont !important}
}

chrome : 
@supports(-webkit-font-smoothing: subpixel-antialiased){
@font-face{font-family:"VarFont";src:local("KaiTi");}
*{font-family:VarFont !important}
}

