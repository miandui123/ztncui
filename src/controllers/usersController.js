/*
  ztncui - ZeroTier network controller UI
  Copyright (C) 2017-2021  Key Networks (https://key-networks.com)
  Licensed under GPLv3 - see LICENSE for details.
*/

const fs = require('fs');
const argon2 = require('argon2');
const util = require('util');

const passwd_file = 'etc/passwd';
const min_pass_len = 6;

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const chmod = util.promisify(fs.chmod);

let _users = null;

const get_users = async function() {
  if (_users) {
    return _users;
  } else {
    try {
      _users = JSON.parse(await readFile(passwd_file, 'utf8'));
      return _users;
    } catch(err) {
      throw(err);
    }
  }
}
exports.get_users = get_users;

const update_users = async function(users) {
  try {
    await writeFile(passwd_file, JSON.stringify(users), 'utf8');
    await chmod(passwd_file, 0600);

  } catch (err) {
    throw err;
  }
  _users = null;
  return await get_users();
}

exports.users_list = async function(req, res) {
  const navigate =
    {
      active: 'users',
    }

  try {
    const users = await get_users();

    // 检查当前用户是否有超级管理员权限
    let isSuperAdmin = req.session.user && req.session.user.role === 'super_admin';

    if (!isSuperAdmin) {
      return res.render('users', { title: '用户管理', navigate: navigate, message: '只有超级管理员才能访问用户管理', users: null, error: '权限不足' });
    }

    res.render('users', { title: '用户管理', navigate: navigate, message: '所有用户列表（仅超级管理员可见）', users: users });
  } catch (err) {
    res.render('users', { title: '用户管理', navigate: navigate, message: '错误', users: null, error: '返回用户列表时出错：' + err });
  }
}

exports.password_get = async function(req, res) {
  const navigate =
    {
      active: 'users',
    }

  const user =
    {
      name: req.params.name,
      password1: null,
      password2: null
    };
  res.render('password', { title: '设置密码', navigate: navigate, user: user, readonly: true, message: '' });
}

exports.password_post = async function(req, res) {
  const navigate =
    {
      active: 'users',
    }

  req.checkBody('username', 'Username required').notEmpty();
  req.sanitize('username').escape();
  req.sanitize('username').trim();

  req.checkBody('password1', '密码必填').notEmpty();
  req.checkBody('password1', '最小密码长度为 ' + min_pass_len + ' 个字符').isLength({ min: min_pass_len, max: 160 });

  req.checkBody('password2', '请重新输入密码').notEmpty();
  req.checkBody('password2', '最小密码长度为 ' + min_pass_len + ' 个字符').isLength({ min: min_pass_len, max: 160 });
  req.checkBody('password2', '密码不相同').equals(req.body.password1);

  const errors = req.validationErrors();

  if (errors) {
    const user =
      {
        name: req.body.username,
        password1: req.body.password1,
        password2: req.body.password2
      };
    const message = '请检查以下错误';
    res.render('password', { title: '设置密码', navigate: navigate, user: user, readonly: true, message: message, errors: errors });
  } else {
    let pass_set = true;
    if (req.body.pass_set === 'check') pass_set = false;

    const hash = await argon2.hash(req.body.password1);

    const user =
      {
        name: req.body.username,
        pass_set: pass_set,
        hash: hash
      };

    const passwd_user =
      {
        [req.body.username]: user
      };

    let users = await get_users();
    users[req.body.username] = user;

    users = await update_users(users);

    const message = '成功为 ' + req.body.username + ' 设置密码';
    res.render('password', { title: '设置密码', navigate: navigate, user: user, readonly: true, message: message });
  }
}

exports.user_create_get = async function(req, res) {
  const navigate =
    {
      active: 'create_user',
    }

  const user =
    {
      name: null,
      password1: null,
      password2: null
    };

  res.render('password', { title: '创建新管理员用户', navigate: navigate, user: user, readonly: false});
}

exports.user_create_post = async function(req, res) {
  const navigate =
    {
      active: 'create_user',
    }

  res.redirect(307, '/users/' + req.body.username + '/password');
}

// 注册新用户
exports.register_get = function(req, res) {
  const navigate =
    {
      active: 'register',
    }

  const user =
    {
      name: null,
      password1: null,
      password2: null
    };

  res.render('register', { title: '注册新用户', navigate: navigate, user: user, readonly: false, message: '' });
}

exports.register_post = async function(req, res) {
  const navigate =
    {
      active: 'register',
    }

  req.checkBody('username', '用户名必填').notEmpty();
  req.sanitize('username').escape();
  req.sanitize('username').trim();

  req.checkBody('password1', '密码必填').notEmpty();
  req.checkBody('password1', '最小密码长度为 ' + min_pass_len + ' 个字符').isLength({ min: min_pass_len, max: 160 });

  req.checkBody('password2', '请再次输入密码').notEmpty();
  req.checkBody('password2', '最小密码长度为 ' + min_pass_len + ' 个字符').isLength({ min: min_pass_len, max: 160 });
  req.checkBody('password2', '密码不相同').equals(req.body.password1);

  const errors = req.validationErrors();

  if (errors) {
    const user =
      {
        name: req.body.username,
        password1: req.body.password1,
        password2: req.body.password2
      };
    const message = '请检查以下错误';
    res.render('register', { title: '注册新用户', navigate: navigate, user: user, message: message, errors: errors });
  } else {
    try {
      let users = await get_users();

      // 检查用户是否已存在
      if (users[req.body.username]) {
        const user =
          {
            name: req.body.username,
            password1: req.body.password1,
            password2: req.body.password2
          };
        return res.render('register', { title: '注册新用户', navigate: navigate, user: user, error: '用户名已存在，请选择其他用户名' });
      }

      let pass_set = false;

      const hash = await argon2.hash(req.body.password1);

      const user =
        {
          name: req.body.username,
          pass_set: true,  // 注册后不需要立即修改密码
          hash: hash,
          role: 'user'  // 注册默认为普通用户
        };

      const passwd_user =
        {
          [req.body.username]: user
        };

      users[req.body.username] = user;
      users = await update_users(users);

      const message = '用户 ' + req.body.username + ' 注册成功，请登录';
      res.render('register', { title: '注册新用户', navigate: navigate, user: user, message: message, readonly: true });
    } catch (err) {
      const user =
        {
          name: req.body.username,
          password1: req.body.password1,
          password2: req.body.password2
        };
      res.render('register', { title: '注册新用户', navigate: navigate, user: user, error: '注册失败：' + err });
    }
  }
}

exports.user_delete = async function(req, res) {
  const navigate =
    {
      active: 'users',
    }

  try {
    var users = await get_users();
  } catch (err) {
    throw err;
  }

  const user = users[req.params.name];

  if (user && (req.session.user.name === user.name)) {
    res.render('user_delete', { title: '删除用户', navigate: navigate, user: user, self_delete: true });
  }

  if (req.body.delete === 'delete') {
    if (user) {
      const deleted_user = { name: user.name };
      delete users[user.name];
      users = await update_users(users);
      res.render('user_delete', { title: '已删除用户', navigate: navigate, user: deleted_user, deleted: true });
    } else {
      res.render('user_delete', { title: '删除用户', navigate: navigate, user: null });
    }
  } else {
    if (user) {
      res.render('user_delete', { title: '删除用户', navigate: navigate, user: user });
    } else {
      res.render('user_delete', { title: '删除用户', navigate: navigate, user: null });
    }
  }
}

// 提升用户为管理员
exports.user_promote_post = async function(req, res) {
  const navigate =
    {
      active: 'users',
    }

  try {
    var users = await get_users();
  } catch (err) {
    throw err;
  }

  const user = users[req.params.name];

  if (!user) {
    return res.redirect('/users');
  }

  if (user.role === 'admin') {
    return res.redirect('/users');
  }

  // 提升为管理员
  user.role = 'admin';
  users[req.params.name] = user;
  await update_users(users);

  res.redirect('/users');
}

// 超级管理员重置用户密码
exports.user_reset_password_post = async function(req, res) {
  const navigate =
    {
      active: 'users',
    }

  try {
    var users = await get_users();
  } catch (err) {
    throw err;
  }

  const user = users[req.params.name];

  if (!user) {
    return res.redirect('/users');
  }

  // 不能重置超级管理员的密码
  if (user.role === 'super_admin') {
    return res.redirect('/users');
  }

  const newPassword = Math.random().toString(36).substring(2, 10);
  const hash = await argon2.hash(newPassword);

  user.hash = hash;
  user.pass_set = false;  // 强制下次登录时修改密码
  users[req.params.name] = user;
  await update_users(users);

  const message = '已重置用户 ' + req.params.name + ' 的密码为：' + newPassword;
  req.session.success = message;
  res.redirect('/users');
}

