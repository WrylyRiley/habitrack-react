class CreateCompletions < ActiveRecord::Migration[5.1]
  def change
    create_table :completions do |t|
      t.integer :date_completed
      t.string :note
      t.reference :habit
      t.reference :user
      t.string :data_one
      t.string :data_two
      t.string :data_three

      t.timestamps
    end
  end
end
