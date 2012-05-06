class ActiveSupport::TimeWithZone
    def as_json(options = {})
        strftime('%c')
    end
end