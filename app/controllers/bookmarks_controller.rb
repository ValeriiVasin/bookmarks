class BookmarksController < ApplicationController
  before_filter :authenticate_user!

  def index
    render :json => current_user.bookmarks
  end

  def create
    bookmark = current_user.bookmarks.create params[:bookmark]
    render :json => bookmark
  end

end