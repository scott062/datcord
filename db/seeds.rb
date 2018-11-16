# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create({email: "demo@email.com", password: "password", username: "demoUser"})

User.create({email: "test@email.com", password: "password", username: "test"})

User.create({email: "scott@email.com", password: "password", username: "scott"})

User.create({email: "keith@email.com", password: "password", username: "keith"})

User.create({email: "dustin@email.com", password: "password", username: "dustin"})

User.create({email: "brittany@email.com", password: "password", username: "brittany"})

User.create({email: "regan@email.com", password: "password", username: "regan"})

User.create({email: "david@email.com", password: "password", username: "david"})
