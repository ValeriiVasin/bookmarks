class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.string :url
      t.string :title
      t.text :description
      t.references :user

      t.timestamps
    end
  end
end
