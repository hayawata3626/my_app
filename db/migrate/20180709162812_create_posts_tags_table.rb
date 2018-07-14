class CreatePostsTagsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :posts_tags_tables do |t|
      t.integer :post_id, null: false
      t.integer :tag_id, null: false
    end
  end
end
