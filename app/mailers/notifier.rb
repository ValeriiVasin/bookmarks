class Notifier < ActionMailer::Base
  default :from => "admin@lingualeo.herokuapps.com"
  def share email, bookmark
    @bookmark = bookmark
    mail :subject => "Someone wants to share content with you.",
         :to => email,
  end
end
