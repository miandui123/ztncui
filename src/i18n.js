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
    },
    networks: {
      title: 'Networks',
      no_networks: 'There are no networks on this network controller - click "Add network" above to create a new network.',
      table_headers: {
        name: 'Network name',
        nwid: 'Network ID',
        operations: 'Operations'
      },
      network_name: 'Network',
      private: 'Private',
      public: 'Public',
      easy_setup: 'Easy setup',
      routes: 'Routes',
      assignment_pools: 'Address Allocation Pools',
      ipv4_assign_mode: 'IPv4 Assign Mode',
      ipv6_assign_mode: 'IPv6 Assign Mode',
      dns: 'DNS',
      detail: 'Network Details',
      back_to_networks: 'Back to Networks',
      refresh: 'Refresh',
      no_members: 'There are no members on this network - invite users to join',
      create_button: 'Create Network',
      name_label: 'Network name:',
      name_placeholder: 'Enter new network name',
      members_title: 'Members',
      member_table: {
        name: 'Member name',
        id: 'Member ID',
        authorized: 'Authorized',
        active_bridge: 'Active bridge',
        ip_assignment: 'IP assignment',
        peer_status: 'Peer status',
        peer_address: 'Peer address / latency'
      },
      detail: 'Detail for network',
      status: {
        online: 'ONLINE',
        relay: 'RELAY',
        controller: 'CONTROLLER',
        offline: 'OFFLINE'
      },
      ip_assignment: 'IP assignment',
      private_page: {
        enable_access_control: 'Enable access control. Warning: if you disable this, you will not be able to de-authorize members of the network. Disable this only if you know what you are doing.',
        enable_access_control_zh: '启用访问控制。警告：如果您禁用此功能，将无法取消授权网络成员。请仅在您知道自己在做什么时禁用。'
      },
      routes_page: {
        target: 'Target',
        target_zh: '目标',
        gateway: 'Gateway',
        gateway_zh: '网关',
        add_new_route: 'Add new route:',
        add_new_route_zh: '添加新路由:',
        target_label: 'Target:',
        target_label_zh: '目标:',
        target_placeholder: 'e.g. 10.11.12.0/24',
        target_placeholder_zh: '例如: 10.11.12.0/24',
        gateway_label: 'Gateway:',
        gateway_label_zh: '网关:',
        gateway_placeholder: 'e.g. 172.16.2.1 or leave blank if the target is the ZT network',
        gateway_placeholder_zh: '例如: 172.16.2.1 或留空如果目标是ZT网络',
        submit: 'Submit',
        submit_zh: '提交',
        cancel: 'Cancel',
        cancel_zh: '取消'
      },
      ip_pools_page: {
        ip_range_start: 'IP Range Start',
        ip_range_end: 'IP Range End',
        add_new_pool: 'Add new pool:',
        ip_range_start_label: 'IP Range Start:',
        ip_range_start_placeholder: 'e.g. 10.147.20.1',
        ip_range_end_label: 'IP Range End:',
        ip_range_end_placeholder: 'e.g. 10.147.20.254',
        submit: 'Submit',
        cancel: 'Cancel',
        // Chinese translations
        ip_range_start_zh: 'IP范围起始',
        ip_range_end_zh: 'IP范围结束',
        add_new_pool_zh: '添加新池:',
        ip_range_start_label_zh: 'IP范围起始:',
        ip_range_start_placeholder_zh: '例如: 10.147.20.1',
        ip_range_end_label_zh: 'IP范围结束:',
        ip_range_end_placeholder_zh: '例如: 10.147.20.254',
        submit_zh: '提交',
        cancel_zh: '取消'
      },
      dns_page: {
        no_dns: 'No DNS configuration on this network.',
        domain: 'Domain:',
        servers: 'Servers:',
        change_dns: 'Change DNS configuration:',
        domain_label: 'Domain:',
        servers_label: 'Servers:',
        servers_placeholder: '(one IP address per line)',
        submit: 'Submit',
        cancel: 'Cancel'
      },
  
      v4_assign_page: {
        auto_assign: 'Auto assign from ZT range'
      },
      v6_assign_page: {
        zt_6plane: '6PLANE (deprecated)',
        zt_rfc4193: 'RFC4193 (ULA fc00::/7)',
        auto_assign: 'Auto assign from ZT range'
      },
      easy_setup_page: {
        help: 'Help',
        help_note1: 'Please note that this utility only supports IPv4 at this stage.',
        help_note2: 'Use the following button to automatically generate a random network address, otherwise fill in the network address CIDR manually and the IP assignment pool will be automatically calculated for you. You can manually alter these calculated values.',
        generate_network: 'Generate network address',
        network_cidr: 'Network address in CIDR notation',
        network_cidr_placeholder: 'e.g. 10.11.12.0/24',
        pool_start: 'Start of IP assignment pool',
        pool_start_placeholder: 'e.g. 10.11.12.1',
        pool_end: 'End of IP assignment pool',
        pool_end_placeholder: 'e.g. 10.11.12.254',
        invalid_cidr: 'Invalid network CIDR',
        submit: 'Submit',
        cancel: 'Cancel'
      },
      member_detail: {
        title: 'for member',
        in_network: 'in network'
      },
      ip_assignments_page: {
        note_errors: 'Note errors listed below',
        member_name: 'Member name:',
        zt_address: 'ZeroTier address:',
        ip_address: 'IP address',
        ip_address_placeholder: 'IP address',
        managed_routes: 'Managed routes'
      },
      delete_page: {
        network_deleted: 'was deleted',
        warning: 'Warning! Deleting a network cannot be undone',
        delete_network: 'Delete',
        cancel: 'Cancel'
      },
      member_delete_page: {
        member_deleted: 'was deleted',
        members: 'Members',
        note1: 'To undo a member deletion, just get the member to join the network again.',
        note2: 'After deleting a member, you may see them appear in the list of members again. This is a ZeroTier issue. Just get the user to leave the network.',
        delete_member: 'Delete',
        cancel: 'Cancel'
      }
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
    },
    networks: {
      title: '网络',
      no_networks: '此网络控制器上没有网络 - 点击上方"添加网络"创建新网络。',
      table_headers: {
        name: '网络名称',
        nwid: '网络ID',
        operations: '操作'
      },
      network_name: '网络',
      private: '私有',
      public: '公开',
      easy_setup: '简单设置',
      routes: '路由',
      assignment_pools: '地址分配池',
      ipv4_assign_mode: 'IPv4分配模式',
      ipv6_assign_mode: 'IPv6分配模式',
      dns: 'DNS',
      detail: '网络详情',
      back_to_networks: '网络',
      refresh: '刷新',
      no_members: '此网络没有成员 - 邀请用户加入',
      create_button: '创建网络',
      name_label: '网络名称:',
      name_placeholder: '输入新网络名称',
      members_title: '成员',
      member_table: {
        name: '成员名称',
        id: '成员ID',
        authorized: '已授权',
        active_bridge: '活动网桥',
        ip_assignment: 'IP分配',
        peer_status: '对等体状态',
        peer_address: '对等体地址/延迟'
      },
      detail: '网络详情',
      network_fields: {
        authTokens: '认证令牌',
        authorizationEndpoint: '授权端点',
        capabilities: '能力',
        clientId: '客户端ID',
        creationTime: '创建时间',
        dns: 'DNS配置',
        enableBroadcast: '启用广播',
        id: '网络ID',
        ipAssignmentPools: 'IP分配池',
        mtu: 'MTU',
        multicastLimit: '多播限制',
        name: '网络名称',
        nwid: '网络ID',
        objtype: '对象类型',
        private: '私有网络',
        remoteTraceLevel: '远程跟踪级别',
        remoteTraceTarget: '远程跟踪目标',
        revision: '修订版本',
        routes: '路由',
        rules: '规则',
        rulesSource: '规则源',
        ssoEnabled: 'SSO启用',
        tags: '标签',
        v4AssignMode: 'IPv4分配模式',
        v6AssignMode: 'IPv6分配模式'
      },
      status: {
        online: '在线',
        relay: '中继',
        controller: '控制器',
        offline: '离线'
      },
      ip_assignment: 'IP分配',
      private_page: {
        enable_access_control: '启用访问控制。警告：如果您禁用此功能，将无法取消授权网络成员。请仅在您知道自己在做什么时禁用。'
      },
      routes_page: {
        target: '目标',
        gateway: '网关',
        add_new_route: '添加新路由:',
        target_label: '目标:',
        target_placeholder: '例如 10.11.12.0/24',
        gateway_label: '网关:',
        gateway_placeholder: '例如 172.16.2.1 或如果目标是ZT网络则留空',
        submit: '提交',
        cancel: '取消'
      },
      dns_page: {
        no_dns: '此网络没有DNS配置。',
        domain: '域名:',
        servers: '服务器:',
        change_dns: '更改DNS配置:',
        domain_label: '域名:',
        servers_label: '服务器:',
        servers_placeholder: '(每行一个IP地址)',
        submit: '提交',
        cancel: '取消'
      },
      ip_pools_page: {
        ip_range_start: 'IP范围起始',
        ip_range_end: 'IP范围结束',
        add_new_pool: '添加新IP分配池:',
        ip_range_start_label: 'IP范围起始:',
        ip_range_start_placeholder: 'IP范围起始',
        ip_range_end_label: 'IP范围结束:',
        ip_range_end_placeholder: 'IP范围结束',
        submit: '提交',
        cancel: '取消'
      },
      v4_assign_page: {
        auto_assign: '从IP分配池自动分配'
      },
      v6_assign_page: {
        zt_6plane: 'ZT 6plane (/80 每个设备可路由)',
        zt_rfc4193: 'ZT rfc4193 (/128 每个设备)',
        auto_assign: '从IP分配池自动分配'
      },
      easy_setup_page: {
        help: '帮助',
        help_note1: '请注意，此工具目前仅支持IPv4。',
        help_note2: '使用以下按钮自动生成随机网络地址，或者手动填写网络地址CIDR，IP分配池将自动为您计算。您可以手动修改这些计算值。',
        generate_network: '生成网络地址',
        network_cidr: 'CIDR格式的网络地址',
        network_cidr_placeholder: '例如 10.11.12.0/24',
        pool_start: 'IP分配池起始',
        pool_start_placeholder: '例如 10.11.12.1',
        pool_end: 'IP分配池结束',
        pool_end_placeholder: '例如 10.11.12.254',
        invalid_cidr: '无效的网络CIDR',
        submit: '提交',
        cancel: '取消'
      },
      member_detail: {
        title: '成员',
        in_network: '在网络'
      },
      ip_assignments_page: {
        note_errors: '请注意以下错误',
        member_name: '成员名称:',
        zt_address: 'ZeroTier地址:',
        ip_address: 'IP地址',
        ip_address_placeholder: 'IP地址',
        managed_routes: '托管路由'
      },
      delete_page: {
        network_deleted: '已删除',
        warning: '警告！删除网络无法撤销',
        delete_network: '删除',
        cancel: '取消'
      },
      member_delete_page: {
        member_deleted: '已删除',
        members: '成员',
        note1: '要撤销删除成员，只需让成员再次加入网络。',
        note2: '删除成员后，您可能会看到他们再次出现在成员列表中。这是ZeroTier的问题。只需让用户离开网络。',
        delete_member: '删除',
        cancel: '取消'
      }
    }
  }
};

module.exports = translations;
