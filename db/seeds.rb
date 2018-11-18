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

demo = User.create({email: "demo@email.com", password: "password", username: "demoUser"})

test = User.create({email: "test@email.com", password: "password", username: "test"})

scott = User.create({email: "scott@email.com", password: "password", username: "scott"})

keith = User.create({email: "keith@email.com", password: "password", username: "keith"})

dustin = User.create({email: "dustin@email.com", password: "password", username: "dustin"})

brittany = User.create({email: "brittany@email.com", password: "password", username: "brittany"})

regan = User.create({email: "regan@email.com", password: "password", username: "regan"})

david = User.create({email: "david@email.com", password: "password", username: "david"})

js = Server.create({admin_id: demo.id, server_name: "JavascriptClub"})

css = Server.create({admin_id: test.id, server_name: "CSSHaters"})

binary = Server.create({admin_id: scott.id, server_name: "BinaryOrNothing"})

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
