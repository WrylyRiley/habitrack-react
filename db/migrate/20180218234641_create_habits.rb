class CreateHabits < ActiveRecord::Migration[5.1]
  def change
    create_table :habits do |t|
      t.string :name
      t.string :type
      t.references :user
      t.string :time_scale
      t.string :motivation

      t.timestamps
    end
  end
end
