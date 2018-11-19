class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
  validates :avatar_url, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token, :ensure_avatar_url

  has_many :servers,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :Server

  has_many :memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Member

  has_many :messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Message

  has_many :server_memberships,
    through: :memberships,
    source: :server

  has_one_attached :photo

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_avatar_url
    self.avatar_url ||= "please find a url for this image"
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

end
