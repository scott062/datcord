class Server < ApplicationRecord
  validates :admin_id, :server_name, :avatar_url, presence: true

  after_initialize :ensure_avatar_url

  belongs_to :user,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :User

  has_many :members,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Member

  has_many :users,
    through: :members,
    source: :user

  has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Channel

  has_one_attached :photo


  def ensure_avatar_url
    self.avatar_url ||= self.server_name[0]
  end
end
