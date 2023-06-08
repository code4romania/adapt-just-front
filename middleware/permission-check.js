import Util from '../util';

export default function ({store, route, redirect}) {
  const pageIsPublic = Util.routeMatchExactOption(route, 'auth', false);
  const pageIsInGuestMode = Util.routeMatchExactOption(route, 'auth', 'guest');
  const pageDisablesPermissionCheck = Util.routeMatchExactOption(route, 'permissionCheck', false);

  if (!pageDisablesPermissionCheck && !pageIsInGuestMode && route.name && !pageIsPublic) {
    if (!store.state.auth.loggedIn) {
      return redirect('/login');
    }

    let routePermission = null;
    let permissionCheck = false;
    const routeMeta = route.meta;
    for (let meta of routeMeta) {
      if (meta.hasOwnProperty('permission') && !_.isEmpty(meta.permission)) {
        permissionCheck = true;
        routePermission = meta.permission;
        break;
      }
    }

    if (permissionCheck && routePermission) {
      let allowed = false;
      let allPermissions = store.state.auth.user.permissions;
      if (allPermissions.includes(routePermission)) {
        allowed = true;
      }
      if (!allowed) {
        return redirect('/errors/not-authorized')
      }
    }
  }
}
