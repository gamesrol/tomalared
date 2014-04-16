function chat(name){
		if(name==$("#tag_id").val()){			
			$("#chat").dialog("close");
			$("#tag_id").val("");			
		}else{
			$("#chat").dialog("open");
			$("#chat").dialog('option', 'title', 'Chat #'+name);
			$("#tag_id").val(name);
			//$("#form-new").attr("title","#"+name);							
		}
		return false;
}