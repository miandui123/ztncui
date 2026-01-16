/*
  ztncui - ZeroTier network controller UI
  Copyright (C) 2017-2021  Key Networks (https://key-networks.com)
  Licensed under GPLv3 - see LICENSE for details.
*/

const translations = {
  en: {
    nav: {
      home: 'Home',
      controller_home: 'Home',
      users: 'Users',
      networks: 'Networks',
      add_network: 'Add network',
      logout: 'Logout',
      login: 'Login',
      register: 'Register',
      create_user: 'Create user'
    },
    lang: {
      switch_to: '中文',
      toggle: 'EN'
    },
    login: {
      title: 'Login',
      username: 'Username:',
      password: 'Password:',
      username_placeholder: 'Enter your username',
      password_placeholder: 'Enter your password',
      login_button: 'Login',
      cancel_button: 'Cancel'
    },
    register: {
      title: 'Register',
      username: 'Username:',
      password: 'Password:',
      username_placeholder: 'Enter your username',
      password_placeholder: 'Enter your password',
      confirm_password: 'Password (Confirm):',
      confirm_password_placeholder: 'Enter your password again',
      register_button: 'Register',
      cancel_button: 'Cancel',
      success: 'User %s registered successfully, please login',
      user_exists: 'Username already exists, please choose another'
    },
    users: {
      title: 'User Management',
      no_users: 'There are no users on this system',
      role_user: 'User',
      role_admin: 'Admin',
      role_super_admin: 'Super Admin',
      password_set: 'Set',
      password_not_set: 'Not Set',
      promote_to_admin: 'Promote to Admin',
      reset_password: 'Reset Password',
      delete_confirm: 'Are you sure you want to delete user %s?',
      reset_password_confirm: 'Are you sure you want to reset password for user %s? The new password will be shown in success message',
      reset_success: 'Password for user %s has been reset to: %s',
      super_admin_only: 'Super Admin only',
      no_permission: 'Only super admin can access user management',
      error_prefix: 'Error returning user list: '
    },
    password: {
      title: 'Create New Admin User',
      title_set: 'Set Password',
      username: 'Username:',
      enter_password: 'Enter new password:',
      reenter_password: 'Re-enter password:',
      change_on_login: 'Change password on next login:',
      set_button: 'Set password',
      cancel_button: 'Cancel',
      success: 'Successfully set password for %s',
      check_errors: 'Please check the following errors'
    }
  },
  zh: {
    nav: {
      home: '首页',
      controller_home: '首页',
      users: '用户',
      networks: '网络',
      add_network: '添加网络',
      logout: '退出',
      login: '登录',
      register: '注册',
      create_user: '创建用户'
    },
    lang: {
      switch_to: 'English',
      toggle: '中'
    },
    login: {
      title: '登录',
      username: '用户名:',
      password: '密码:',
      username_placeholder: '请输入用户名',
      password_placeholder: '请输入密码',
      login_button: '登录',
      cancel_button: '取消'
    },
    register: {
      title: '注册新用户',
      username: '用户名:',
      password: '密码:',
      username_placeholder: '请输入用户名',
      password_placeholder: '请输入密码',
      confirm_password: '密码 (确认):',
      confirm_password_placeholder: '请再次输入密码',
      register_button: '注册',
      cancel_button: '取消',
      success: '用户 %s 注册成功，请登录',
      user_exists: '用户名已存在，请选择其他用户名'
    },
    users: {
      title: '用户管理',
      no_users: '系统中还没有用户',
      role_user: '普通用户',
      role_admin: '管理员',
      role_super_admin: '超级管理员',
      password_set: '已设置',
      password_not_set: '未设置',
      promote_to_admin: '提升为管理员',
      reset_password: '重置密码',
      delete_confirm: '确定要删除用户 %s 吗？',
      reset_password_confirm: '确定要重置用户 %s 的密码吗？新密码将显示在成功消息中',
      reset_success: '已重置用户 %s 的密码为：%s',
      super_admin_only: '超级管理员',
      no_permission: '只有超级管理员才能访问用户管理',
      error_prefix: '返回用户列表时出错：'
    },
    password: {
      title: '创建新管理员用户',
      title_set: '设置密码',
      username: '用户名:',
      enter_password: '输入新密码:',
      reenter_password: '再次输入密码:',
      change_on_login: '下次登录时修改密码:',
      set_button: '设置密码',
      cancel_button: '取消',
      success: '成功为 %s 设置密码',
      check_errors: '请检查以下错误'
    }
  }
};

module.exports = translations;
