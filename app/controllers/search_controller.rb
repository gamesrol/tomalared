class SearchController < ApplicationController

 def search
	if params[:q] != ""

      @q = params[:q]
      @q1 = params[:q]
      
			if @q.scan(/^#/){$1} 
				@q = @q.gsub(/^#/,"")
			end
		  if @q.scan(/^@/){$1}
        @q = @q.gsub(/^@/,"")            
      end

	    @tags = Tag.search(@q).sort { |x, y| x.name <=> y.name }[0..11]
	    @users = User.search(@q).sort { |x, y| x.name <=> y.name }[0..11]
	    @posts = Post.search(@q1).sort_by{ |p| - p.id}[0..3]
	else
		redirect_to :back
  end

 end
 
 
  def searched
    
    if params[:term]
      @q = params[:term]
      tags = Array.new
      users = Array.new 
            
      d = @q[0..0]
      
      if d == "#" 
        @q1 = @q.gsub(/^#/,"")
        like= "%".concat(@q1.concat("%"))
        tags = Tag.where("name like ?", like)      
      else
        if d == "@"
          @q1 = @q.gsub(/^@/,"")
          like= "%".concat(@q1.concat("%"))
          users = User.where("name like ?", like)
        else
          like= "%".concat(@q)
          users = User.where("name like ?", like)
          tags = Tag.where("name like ?", like)
        end
      end
    list = users.map {|u| Hash[ id: u.id, label: "@#{u.name}", name: u.name, tipo: "user", img: "/img/#{u.id}.jpg" ]}
    list = list + tags.map {|t| Hash[ id: t.id, label: "##{t.name}", name: t.name, tipo: "tag", img: "/img/tag.png" ]}  
    list = list.sort_by {|a,b| a[:name]}
    render json: list
    end
  end
end