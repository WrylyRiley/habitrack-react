json.extract! habit, :id, :name, :type, :user_id, :time_scale, :motivation, :created_at, :updated_at
json.url habit_url(habit, format: :json)
