class ChangeServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :admin_id, :integer, null: false
    add_column :servers, :server_name, :string, null: false
    add_column :servers, :avatar_url, :string, null: false

    add_timestamps(:servers)
  end
end
