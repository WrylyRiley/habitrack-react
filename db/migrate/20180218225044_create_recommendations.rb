class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      # An actual recommendation
      t.string :recommendation
      # category for the recommendaion
      t.string :group
      t.timestamps
    end
  end
end
