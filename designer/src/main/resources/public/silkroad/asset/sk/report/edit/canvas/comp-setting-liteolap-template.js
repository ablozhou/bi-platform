define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.compId,f=c.$each,g=b.xAxis,h=(b.item,b.$index,b.yAxis),i=b.sAxis,j=b.candInds,k=b.candDims,l="";return l+='<div class="con-comp-setting-type1 j-comp-setting" data-comp-id="',l+=d(e),l+='" data-comp-type="LITEOLAP">\n    <div>\n        <div class="norm-empty-prompt">纵轴指标信息不能为空</div>\n    </div>\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-x" data-axis-type="x">\n        <span class="letter">横轴:</span>\n        ',f(g,function(a){l+='\n        <div class="item hover-bg j-root-line c-m" data-id="',l+=d(a.id),l+='">\n            <span class="item-text j-item-text" title="',l+=d(a.caption),l+="（",l+=d(a.name),l+='）">\n            ',l+=d(a.caption),a.name&&(l+="（",l+=d(a.name),l+="）"),l+='\n            </span>\n            <span class="icon-letter j-delete" title="删除">×</span>\n        </div>\n        '}),l+='\n    </div>\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-y" data-axis-type="y">\n        <span class="letter">纵轴:</span>\n        ',f(h,function(a){l+='\n        <div class="item hover-bg j-root-line c-m" data-id="',l+=d(a.id),l+='">\n            <span class="item-text j-item-text" title="',l+=d(a.caption),l+="（",l+=d(a.name),l+='）">\n            ',l+=d(a.caption),a.name&&(l+="（",l+=d(a.name),l+="）"),l+='\n            </span>\n            <span class="icon-letter j-delete" title="删除">×</span>\n        </div>\n        '}),l+='\n    </div>\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-s" data-axis-type="s">\n        <span class="letter">过滤轴:</span>\n        ',f(i,function(a){l+='\n        <div class="item hover-bg j-root-line" data-id="',l+=d(a.id),l+='">\n            <span class="item-text j-item-text" title="',l+=d(a.caption),l+="（",l+=d(a.name),l+='）">\n            ',l+=d(a.caption),a.name&&(l+="（",l+=d(a.name),l+="）"),l+='\n            </span>\n            <span class="icon-letter j-delete" title="删除">×</span>\n        </div>\n        '}),l+='\n    </div>\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-cand-ind" data-axis-type="CAND_IND">\n        <span class="letter">候选指标:</span>\n        ',f(j,function(a){l+='\n        <div class="item hover-bg j-root-line" data-id="',l+=d(a.id),l+='">\n            <span class="item-text j-item-text" title="',l+=d(a.caption),l+="（",l+=d(a.name),l+='）">\n            ',l+=d(a.caption),a.name&&(l+="（",l+=d(a.name),l+="）"),l+="\n            </span>\n            ",a.used||(l+='\n            <span class="icon-letter j-delete" title="删除">×</span>\n            '),l+="\n        </div>\n        "}),l+='\n    </div>\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-cand-dim" data-axis-type="CAND_DIM">\n        <span class="letter">候选维度:</span>\n        ',f(k,function(a){l+='\n        <div class="item hover-bg j-root-line" data-id="',l+=d(a.id),l+='">\n            <span class="item-text j-item-text" title="',l+=d(a.caption),l+="（",l+=d(a.name),l+='）">\n            ',l+=d(a.caption),a.name&&(l+="（",l+=d(a.name),l+="）"),l+="\n            </span>\n            ",a.used||(l+='\n            <span class="icon-letter j-delete" title="删除">×</span>\n            '),l+="\n        </div>\n        "}),l+='\n    </div>\n    <div class="data-axis-line data-axis-line-48 data-btn-line">\n        <span class="letter">设置:</span>\n        <span class="icon-letter icon-letter-btn j-set-data-format">数据格式</span>\n    </div>\n</div>'}return{render:b}});