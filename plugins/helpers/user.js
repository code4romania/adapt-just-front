
export default (context, inject) => {
  const user = {
    permissions: () => context.$auth?.user?.permissions || [],
    initials: () => {
      const name = context.$auth?.user?.full_name
      return name ? `${name[0].charAt(0)}${name[1] ? name[1].charAt(0) : ''}` : ''
    }
  }

  user.hasRoles = (roles) => {
    return (roles.includes('*') || roles.filter(value => context.$auth?.user?.roles.includes(value)).length)
  }

  user.hasPermission = (permissionName) => {
    if (!context.$auth?.loggedIn) {
      return false
    }
    const permissions = user.permissions()
    return permissions.includes(permissionName)
  }

  inject('user', user)
}
