class Channel < ApplicationRecord
  validates :channel_name, :server_id, :communication_type, presence: true
  validates_inclusion_of :communication_type, in: ['voice', 'text']

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

  has_many :messages,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Message
end
