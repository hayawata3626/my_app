class User < ApplicationRecord
  has_many :posts
  validates :name, {presence: true}
  validates :email, {presence: true, uniqueness: true}
  has_secure_password

  def posts
    return Post.where(user_id: self.id)
  end
end
