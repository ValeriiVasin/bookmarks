class Bookmark < ActiveRecord::Base
  attr_accessible :description, :title, :url, :created_at
  belongs_to :user
end
