class CreateCreatePostsTagsTables < ActiveRecord::Migration[5.2]
  def change
    create_table :create_posts_tags_tables do |t|

      t.timestamps
    end
  end
end
