class PostsController < ApplicationController
  before_action :authenticate_user
  protect_from_forgery :except => [:create]
  before_action :ensure_correct_user, {only: [:edit, :update, :destroy]}

  def index
    @posts = Post.all.order(created_at: :desc)
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
    @post = Post.new(title: params[:post][:title], content: params[:post][:content], user_id: @current_user.id)
    @post.save
    redirect_to root_path
  end

  def edit
    @post = Post.find_by(id:params[:id])
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
