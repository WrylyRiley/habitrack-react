# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Habit.delete_all
Completion.delete_all
Recommendation.delete_all

zach = User.create!({:email => "zbauer91@gmail.com", :password => "123123", :password_confirmation => "123123"})

# Recommendations

exercise_list = Recommendation.create!([
  {recommendation: "running", group: "exercise"},
  {recommendation: "walking", group: "exercise"},
  {recommendation: "swimming", group: "exercise"},
  {recommendation: "cycling", group: "exercise"},
  {recommendation: "weight lifting", group: "exercise"},
])
improvement_list = Recommendation.create!([
  {recommendation: "meditation", group: "personal improvement"},
  {recommendation: "10 minutes of relaxation", group: "personal improvement"},
  {recommendation: "yoga", group: "personal improvement"},
])
chore_list = Recommendation.create!([
  {recommendation: "clean house", group: "chore"},
  {recommendation: "clean out car", group: "chore"},
  {recommendation: "do the dishes", group: "chore"},
])

zach_running = zach.habits.create!([
  {name: "running", motivation: "weight loss", type: "daily"}, ,
])
