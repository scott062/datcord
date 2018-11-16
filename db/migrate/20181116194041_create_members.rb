class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :members, :user_id
    add_index :members, :server_id
  end
end
