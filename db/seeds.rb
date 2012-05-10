# encoding: UTF-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# http://jsbin.com/ujiqig/4/edit
User.first.bookmarks.destroy_all
User.first.bookmarks.create([
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description"
    },
    {
        url: "http://speakerdeck.com/u/addyosmani/p/building-decoupled-large-scale-applications-using-javascript-and-jquery",
        title: "Building Decoupled Large-scale Applications Using JavaScript (And jQuery) // Speaker Deck",
        description: "auto generated description"
    },
    {
        url: "http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script",
        title: "User Script Tip: Using jQuery - Erik Vold's Blog",
        description: "auto generated description"
    },
    {
        url: "http://www.futureme.org/thanks.php",
        title: "FutureMe.org: e-mail your future self",
        description: "auto generated description"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-to-do-list-app-with-node-js-and-geddy/",
        title: "Creating a Todo List App With Node.js and Geddy | Nettuts+",
        description: "auto generated description"
    },
    {
        url: "http://tom.preston-werner.com/2009/05/19/the-git-parable.html",
        title: "The Git Parable",
        description: "auto generated description"
    },
    {
        url: "http://javascript.ru/optimize/google-closure-compiler",
        title: "Google Closure Compiler в деталях",
        description: "auto generated description"
    },
    {
        url: "http://addyosmani.com/blog/jquery-1-7s-callbacks-feature-demystified/",
        title: "Demystifying jQuery 1.7′s $.Callbacks",
        description: "auto generated description"
    },
    {
        url: "http://ajpiano.com/widgetfactory/#slide1",
        title: "jQuery UI Widget Factory",
        description: "auto generated description"
    },
    {
        url: "http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/",
        title: "Essential jQuery Plugin Patterns | Smashing Coding",
        description: "auto generated description"
    },
    {
        url: "http://scriptble.com/2011/02/expanding-the-jquery-plugin-development-pattern/",
        title: "Expanding the jQuery Plugin Development Pattern | Scriptble",
        description: "auto generated description"
    },
    {
        url: "http://addyosmani.com/resources/essentialjsdesignpatterns/book/",
        title: "Learning JavaScript Design Patterns",
        description: "auto generated description"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/",
        title: "Getting Cozy With Underscore.js | Nettuts+",
        description: "auto generated description"
    },
    {
        url: "http://sugarjs.com/",
        title: "Sugar: A Javascript library for working with native objects.",
        description: "auto generated description"
    },
    {
        url: "http://bookz.ru/book.php?id=45933&n=1&p_count=20&g=proza&f=odino4es_226&b_name=%CE%E4%E8%ED%EE%F7%E5%F1%F2%E2%EE%20%E2%20%D1%E5%F2%E8&a_name=%DF%ED%F3%F8%20%C2%E8%F8%ED%E5%E2%F1%EA%E8%E9&a_id=anu6-vi6nevskii",
        title: "\"Одиночество в Сети\" | Януш Вишневский",
        description: "auto generated description"
    }
])
