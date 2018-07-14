class Tag < ApplicationRecord
  # has_and_belongs_to_many :posts
  has_many :posts, through: :create_posts_tags_tables
  has_many :create_posts_tags_tables
end
