class Bookmark < ActiveRecord::Base
  attr_accessible :description, :title, :url
  belongs_to :user
end
