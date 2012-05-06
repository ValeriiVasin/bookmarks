class BookmarksController < ApplicationController
  before_filter :authenticate_user!

  def index
    render :json => current_user.bookmarks
  end
end