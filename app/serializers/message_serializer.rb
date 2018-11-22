class MessageSerializer < ActiveModel::Serializer
  attributes :id, :channel_id, :body, :author_id, :created_at
end
