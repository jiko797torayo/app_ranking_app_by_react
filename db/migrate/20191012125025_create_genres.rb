class CreateGenres < ActiveRecord::Migration[6.0]
  def change
    create_table :genres do |t|
      t.integer :number
      t.string :name
      t.string :product
      t.timestamps
    end
  end
end
