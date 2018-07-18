class PostsController < ApplicationController
  # before_action :authenticate_user
  # before_action :ensure_correct_user, {only: [:edit, :update, :destroy]}

  def index
    @posts = Post.search(params[:search])
    @tags = [];
    if @posts.blank?
      @searchResult = false;
      return;
    end
    @searchResult = true
  end

  def show
    @post = Post.find_by(id:params[:id])
    @user = @post.user
    @likes_count = Like.where(post_id: @post.id).count
  end

  def new
    @post = Post.new
  end

  def create
    if params[:post][:image_name].present?
      @post = Post.new(
        title: params[:post][:title],
        content: params[:post][:content],
        image_name: params[:post][:image_name].original_filename,
        user_id: current_manager.id
      )
    else
      @post = Post.new(
        title: params[:post][:title],
        content: params[:post][:content],
        image_name: "no-image.png",
      )
    end

    if params[:post][:image_name].present?
      output_path = Rails.root.join('public/images', params[:post][:image_name].original_filename)
      File.open(output_path, 'w+b') do |fp|
        fp.write(params["post"]["image_name"].read)
      end
    end
   

    tag_list = params[:tag_name].split(",")
    if @post.save
      @post.save_posts(tag_list)
    end
    redirect_to root_path
  end

  def edit
    @post = Post.find_by(id:params[:id])
    @tags = [];
  end

  def update
    @post = Post.find_by(id:params[:id])
    @post.title = params[:title]
    @post.content = params[:content]
    @post.save
    redirect_to root_path
  end

  def destroy
    @post = Post.find_by(id:params[:id])
    @post.destroy
    @post.save
    redirect_to root_path
  end

  def ensure_correct_user
    @post = Post.find_by(id: params[:id])
    if @post.user_id != @current_user.id
      flash[:notice] = "権限がありません"
      redirect_to("/posts/index")
    end
  end

  def list
    @posts = Post.all
    render json: @posts
  end

end
