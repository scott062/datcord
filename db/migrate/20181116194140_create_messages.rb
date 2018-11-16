class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.string :link
      
    end
  end
end
