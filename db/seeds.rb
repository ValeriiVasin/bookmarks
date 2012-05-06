# encoding: UTF-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# http://jsbin.com/ujiqig/edit#javascript,html
User.first.bookmarks.destroy_all
User.first.bookmarks.create([
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description",
        created_at: "1333482092019349"
    },
    {
        url: "http://speakerdeck.com/u/addyosmani/p/building-decoupled-large-scale-applications-using-javascript-and-jquery",
        title: "Building Decoupled Large-scale Applications Using JavaScript (And jQuery) // Speaker Deck",
        description: "auto generated description",
        created_at: "1330299562725770"
    },
    {
        url: "http://speakerdeck.com/u/addyosmani/p/building-decoupled-large-scale-applications-using-javascript-and-jquery",
        title: "Building Decoupled Large-scale Applications Using JavaScript (And jQuery) // Speaker Deck",
        description: "auto generated description",
        created_at: "1330299562725770"
    },
    {
        url: "http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script",
        title: "User Script Tip: Using jQuery - Erik Vold's Blog",
        description: "auto generated description",
        created_at: "1335430622125208"
    },
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description",
        created_at: "1333482092019349"
    },
    {
        url: "http://www.futureme.org/thanks.php",
        title: "FutureMe.org: e-mail your future self",
        description: "auto generated description",
        created_at: "1271891134485419"
    },
    {
        url: "http://www.futureme.org/thanks.php",
        title: "FutureMe.org: e-mail your future self",
        description: "auto generated description",
        created_at: "1271891134485419"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-to-do-list-app-with-node-js-and-geddy/",
        title: "Creating a Todo List App With Node.js and Geddy | Nettuts+",
        description: "auto generated description",
        created_at: "1332882942558700"
    },
    {
        url: "http://tom.preston-werner.com/2009/05/19/the-git-parable.html",
        title: "The Git Parable",
        description: "auto generated description",
        created_at: "1330639592431144"
    },
    {
        url: "http://javascript.ru/optimize/google-closure-compiler",
        title: "Google Closure Compiler in details",
        description: "auto generated description",
        created_at: "1332973454617200"
    },
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description",
        created_at: "1333482092019349"
    },
    {
        url: "http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script",
        title: "User Script Tip: Using jQuery - Erik Vold's Blog",
        description: "auto generated description",
        created_at: "1335430622125208"
    },
    {
        url: "http://addyosmani.com/blog/jquery-1-7s-callbacks-feature-demystified/",
        title: "Demystifying jQuery 1.7s $.Callbacks",
        description: "auto generated description",
        created_at: "1330290849098631"
    },
    {
        url: "http://speakerdeck.com/u/addyosmani/p/building-decoupled-large-scale-applications-using-javascript-and-jquery",
        title: "Building Decoupled Large-scale Applications Using JavaScript (And jQuery) // Speaker Deck",
        description: "auto generated description",
        created_at: "1330299562725770"
    },
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description",
        created_at: "1333482092019349"
    },
    {
        url: "http://ajpiano.com/widgetfactory/#slide1",
        title: "jQuery UI Widget Factory",
        description: "auto generated description",
        created_at: "1330322976997953"
    },
    {
        url: "http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/",
        title: "Essential jQuery Plugin Patterns | Smashing Coding",
        description: "auto generated description",
        created_at: "1330322009057546"
    },
    {
        url: "http://scriptble.com/2011/02/expanding-the-jquery-plugin-development-pattern/",
        title: "Expanding the jQuery Plugin Development Pattern | Scriptble",
        description: "auto generated description",
        created_at: "1332864749544485"
    },
    {
        url: "http://ajpiano.com/widgetfactory/#slide1",
        title: "jQuery UI Widget Factory",
        description: "auto generated description",
        created_at: "1330322976997953"
    },
    {
        url: "http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script",
        title: "User Script Tip: Using jQuery - Erik Vold's Blog",
        description: "auto generated description",
        created_at: "1335430622125208"
    },
    {
        url: "http://addyosmani.com/blog/jquery-1-7s-callbacks-feature-demystified/",
        title: "Demystifying jQuery 1.7s $.Callbacks",
        description: "auto generated description",
        created_at: "1330290849098631"
    },
    {
        url: "http://speakerdeck.com/u/addyosmani/p/building-decoupled-large-scale-applications-using-javascript-and-jquery",
        title: "Building Decoupled Large-scale Applications Using JavaScript (And jQuery) // Speaker Deck",
        description: "auto generated description",
        created_at: "1330299562725770"
    },
    {
        url: "http://addyosmani.com/resources/essentialjsdesignpatterns/book/",
        title: "Learning JavaScript Design Patterns",
        description: "auto generated description",
        created_at: "1330321599880608"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/",
        title: "Getting Cozy With Underscore.js | Nettuts+",
        description: "auto generated description",
        created_at: "1333311426168249"
    },
    {
        url: "http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/",
        title: "Essential jQuery Plugin Patterns | Smashing Coding",
        description: "auto generated description",
        created_at: "1330322009057546"
    },
    {
        url: "http://javascript.ru/optimize/google-closure-compiler",
        title: "Google Closure Compiler in details",
        description: "auto generated description",
        created_at: "1332973454617200"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-to-do-list-app-with-node-js-and-geddy/",
        title: "Creating a Todo List App With Node.js and Geddy | Nettuts+",
        description: "auto generated description",
        created_at: "1332882942558700"
    },
    {
        url: "http://javascript.ru/optimize/google-closure-compiler",
        title: "Google Closure Compiler in details",
        description: "auto generated description",
        created_at: "1332973454617200"
    },
    {
        url: "http://javascript.ru/optimize/google-closure-compiler",
        title: "Google Closure Compiler in details",
        description: "auto generated description",
        created_at: "1332973454617200"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-to-do-list-app-with-node-js-and-geddy/",
        title: "Creating a Todo List App With Node.js and Geddy | Nettuts+",
        description: "auto generated description",
        created_at: "1332882942558700"
    },
    {
        url: "http://addyosmani.com/resources/essentialjsdesignpatterns/book/",
        title: "Learning JavaScript Design Patterns",
        description: "auto generated description",
        created_at: "1330321599880608"
    },
    {
        url: "http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/",
        title: "Essential jQuery Plugin Patterns | Smashing Coding",
        description: "auto generated description",
        created_at: "1330322009057546"
    },
    {
        url: "http://scriptble.com/2011/02/expanding-the-jquery-plugin-development-pattern/",
        title: "Expanding the jQuery Plugin Development Pattern | Scriptble",
        description: "auto generated description",
        created_at: "1332864749544485"
    },
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description",
        created_at: "1333482092019349"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/",
        title: "Getting Cozy With Underscore.js | Nettuts+",
        description: "auto generated description",
        created_at: "1333311426168249"
    },
    {
        url: "http://tom.preston-werner.com/2009/05/19/the-git-parable.html",
        title: "The Git Parable",
        description: "auto generated description",
        created_at: "1330639592431144"
    },
    {
        url: "http://sugarjs.com/",
        title: "Sugar: A Javascript library for working with native objects.",
        description: "auto generated description",
        created_at: "1333393126935249"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-to-do-list-app-with-node-js-and-geddy/",
        title: "Creating a Todo List App With Node.js and Geddy | Nettuts+",
        description: "auto generated description",
        created_at: "1332882942558700"
    },
    {
        url: "http://sugarjs.com/",
        title: "Sugar: A Javascript library for working with native objects.",
        description: "auto generated description",
        created_at: "1333393126935249"
    },
    {
        url: "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/",
        title: "Getting Cozy With Underscore.js | Nettuts+",
        description: "auto generated description",
        created_at: "1333311426168249"
    },
    {
        url: "http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script",
        title: "User Script Tip: Using jQuery - Erik Vold's Blog",
        description: "auto generated description",
        created_at: "1335430622125208"
    },
    {
        url: "http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html",
        title: "jQuery Hooks | Rodney Rehm",
        description: "auto generated description",
        created_at: "1333482092019349"
    },
    {
        url: "http://bookz.ru/book.php?id=45933&n=1&p_count=20&g=proza&f=odino4es_226&b_name=%CE%E4%E8%ED%EE%F7%E5%F1%F2%E2%EE%20%E2%20%D1%E5%F2%E8&a_name=%DF%ED%F3%F8%20%C2%E8%F8%ED%E5%E2%F1%EA%E8%E9&a_id=anu6-vi6nevskii",
        title: "\"Одиночество в Сети\" | Януш Вишневский",
        description: "auto generated description",
        created_at: "1237232096208777"
    }
])
