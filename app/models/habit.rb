class Habit < ApplicationRecord
  belongs_to :user
  has_many :completions, dependent: :destroy
end
