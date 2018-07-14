class Post < ApplicationRecord
  belongs_to :user
  has_many :create_posts_tags_tables
  has_many :tags, through: :create_posts_tags_tables
  validates :content, presence: true
  validates :user_id, presence: true
  default_scope -> { order(created_at: :desc) }

  def user
    return User.find_by(id: self.user_id)
  end

  def getUserName
    return User.joins(:posts).select("users.name")
  end

  def self.search(search)
    if search
      Post.where(['title like ?', "%#{search}%"])
    else
      Post.all
    end
  end

end
