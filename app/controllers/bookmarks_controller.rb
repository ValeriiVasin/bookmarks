class BookmarksController < ApplicationController
  before_filter :authenticate_user!

  def index
    render :json => current_user.bookmarks
  end

  def create
    bookmark = current_user.bookmarks.create params[:bookmark]
    render :json => bookmark
  end

  def update
    if bookmark = current_user.bookmarks.find(params[:id])
      bookmark.update_attributes! params[:bookmark]
      render :json => bookmark
    else
      render :nothing => true
    end
  end

  def destroy
    if bookmark = current_user.bookmarks.find(params[:id])
      bookmark.destroy
    end
    render :nothing => true
  end
end