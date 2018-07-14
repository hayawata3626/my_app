class AddPostidToCreatePostsTagsTables < ActiveRecord::Migration[5.2]
  def change
    add_column :create_posts_tags_tables, :post_id, :integer
  end
end
