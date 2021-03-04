var orm = require ("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res){
            cb(res);
        });
    },

//CREATE, CREATE, CREATE!
create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
        cb(res);
    });
  },

//UPDATE, UPDATE, UPDATE!
update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
        cb(res);
    });
},

//DELETE, DELETE, DELETE!
delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
        cb(res);
    });
}

};

module.exports = burger;