class PagesController < ActionController::Base
  before_filter :authenticate_user!
  def index
  end
end