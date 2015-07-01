define(["dialog","report/edit/canvas/table-setting/link/link-model","report/edit/canvas/table-setting/link/link-template","report/edit/canvas/table-setting/link/link-param-template","report/edit/canvas/table-setting/link/link-param-add-template"],function(a,b,c,d){var e=Backbone.View.extend({events:{"click .j-set-link":"dialogLinkSetting"},initialize:function(a){var c=this;c.model=new b({canvasModel:a.canvasView.model,reportId:a.reportId}),this.model.set("compId",this.$el.find(".j-comp-setting").attr("data-comp-id"))},dialogLinkSetting:function(){var a=this;a.model.getColumnLinkPlaneList(function(b){a._openColumnLinkPlaneDialog(b),a.bindEvents()})},bindEvents:function(){var a=this,b=$(".j-table-link-set-column-table .j-next"),c=$(".j-table-link-set-param-table .j-back"),d=$(".j-table-link-set-param-table .j-ok");b.unbind(),c.unbind(),d.unbind(),b.bind("click",function(){a.saveColumnTableRelation($(this))}),c.bind("click",function(){$(".j-table-link-set-column-table").show(),$(".j-table-link-set-param-table").hide()}),d.bind("click",function(){a.saveParamRelation()}),$(".j-table-link-set-plane-table").unbind(),$(".j-table-link-set-plane-table").change(function(b){a.showSetParamBtn(b)})},showSetParamBtn:function(a){var b=$(a.target);b.val()?b.next().show():b.next().hide()},showParamSetting:function(a){var b=this;b.model.getParamSetList(a,function(a){$(".j-table-link-set-param-items").html(d.render(a))})},saveColumnTableRelation:function(a){var b=this,c={},d=[],e=$(".j-table-link-set-column-table .table-link-set-item");e.each(function(){var a=$(this),b=a.find("label").attr("data-value"),c=a.find("select").val();d.push({id:b,selectedTable:c})}),c.linkInfo=JSON.stringify(d);var f={};f.planeTableId=a.prev("select").val(),f.olapElementId=a.prev().prev().attr("data-value"),b.olapElementId=f.olapElementId,b.model.saveColumnTableRelation(c,function(){$(".j-table-link-set-column-table").hide(),$(".j-table-link-set-param-table").show(),b.showParamSetting(f)})},saveParamRelation:function(){var a=this,b=$(".j-table-link-set-param-table .table-link-set-item"),c=[],d={};b.each(function(){var a=$(this),b=a.find("label").attr("data-value"),d=a.find("select").val();c.push({paramName:b,selectedDim:d})}),d.mappingInfo=JSON.stringify(c),d.olapElementId=a.olapElementId,a.model.saveParamRelation(d,function(){a.$dialog.dialog("close")})},destroy:function(){this.stopListening(),this.model.clear({silent:!0}),delete this.model,this.$el.unbind()},_openColumnLinkPlaneDialog:function(b){var d,e=this;return $.isEmptyObject(b.columnDefine)?(a.alert("没有指标"),void 0):(d=c.render(b),e.$dialog=a.showDialog({title:"跳转设置",content:d,dialog:{width:440,height:400,resizable:!1}}),void 0)}});return e});