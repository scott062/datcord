# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
Member.destroy_all
Channel.destroy_all

def add_user_photo(user)
  file = File.open('app/assets/images/datcord logo.svg')
  user.photo.attach(io: file, filename: 'datcord logo.svg')
  user.save!
end

def add_server_photo(server)
  file = File.open('app/assets/images/session_background_scene.jpg')
  server.photo.attach(io: file, filename: 'session_background_scene.jpg')
  server.save!
end

demo = User.new({email: "demo@email.com", password: "password", username: "demoUser"})

add_user_photo(demo)

test = User.new({email: "test@email.com", password: "password", username: "test"})

add_user_photo(test)

scott = User.new({email: "scott@email.com", password: "password", username: "scott"})

add_user_photo(scott)

keith = User.new({email: "keith@email.com", password: "password", username: "keith"})

add_user_photo(keith)

dustin = User.new({email: "dustin@email.com", password: "password", username: "dustin"})

add_user_photo(dustin)

brittany = User.new({email: "brittany@email.com", password: "password", username: "brittany"})

add_user_photo(brittany)

regan = User.new({email: "regan@email.com", password: "password", username: "regan"})

add_user_photo(regan)

david = User.new({email: "david@email.com", password: "password", username: "david"})

add_user_photo(david)

# JavascriptClub Server
js = Server.new({admin_id: demo.id, server_name: "JavascriptClub"})

add_server_photo(js)

general1 = Channel.create({channel_name: "General", server_id: js.id, communication_type: 'text'})

#CSSHaters Server
css = Server.new({admin_id: test.id, server_name: "CSSHaters"})

add_server_photo(css)

general2 = Channel.create({channel_name: "General", server_id: css.id, communication_type: 'text'})

#BinaryOrNothing Server
binary = Server.new({admin_id: scott.id, server_name: "BinaryOrNothing"})

add_server_photo(binary)

general3 = Channel.create({channel_name: "General", server_id: binary.id, communication_type: 'text'})

#Members Join Table
Member.create({user_id: demo.id, server_id: js.id})
Member.create({user_id: demo.id, server_id: css.id})
Member.create({user_id: demo.id, server_id: binary.id})

Member.create({user_id: keith.id, server_id: js.id})
Member.create({user_id: keith.id, server_id: css.id})
Member.create({user_id: keith.id, server_id: binary.id})

Member.create({user_id: david.id, server_id: js.id})
Member.create({user_id: brittany.id, server_id: js.id})
Member.create({user_id: regan.id, server_id: js.id})
Member.create({user_id: test.id, server_id: js.id})
Member.create({user_id: dustin.id, server_id: js.id})
