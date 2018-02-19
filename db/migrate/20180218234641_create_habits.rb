class CreateHabits < ActiveRecord::Migration[5.1]
  def change
    create_table :habits do |t|
      t.string :name
      # daily, weekly, monthly, quantified
      t.string :category
      t.references :user
      t.string :motivation

      t.timestamps
    end
  end
end
