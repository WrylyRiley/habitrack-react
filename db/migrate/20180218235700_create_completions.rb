class CreateCompletions < ActiveRecord::Migration[5.1]
  def change
    create_table :completions do |t|
      t.string :date_completed
      t.string :note
      t.references :habit
      t.references :user
      t.string :data_one
      t.string :data_two
      t.string :data_three

      t.timestamps
    end
  end
end
