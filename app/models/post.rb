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

  def save_posts(savepost_tags)
    current_tags = self.tags.pluck(:name) unless self.tags.nil?
    old_tags = current_tags - savepost_tags
    new_tags = savepost_tags - current_tags

    # Create new taggings:
    new_tags.each do |new_name|
      post_tag = Tag.find_or_create_by(name:new_name)
      self.tags << post_tag
    end
  end

end
