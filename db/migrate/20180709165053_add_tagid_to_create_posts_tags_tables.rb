class AddTagidToCreatePostsTagsTables < ActiveRecord::Migration[5.2]
  def change
    add_column :create_posts_tags_tables, :tag_id, :integer
  end
end
