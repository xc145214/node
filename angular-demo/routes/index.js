
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/**
 * get basic page
 * @param req
 * @param res
 */
exports.basic = function(req, res){
  res.render('thebasics', { title: 'the basics' });
};

exports.login = function(req, res){
  res.render('login', { title: 'login' });
};

exports.todo = function(req, res){
  res.render('todo', { title: 'todo' });
};

exports.nav = function(req,res){
  res.render('nav', { title: 'nav' })
}

exports.niceTodo = function(req,res){
  res.render('niceTodo', { title: 'niceTodo' })
}

exports.unitConver = function(req,res){
  res.render('unitConver',{title:'unitConver'})
}

exports.notes = function(req,res){
  res.render('notes',{title:'notes'})
}