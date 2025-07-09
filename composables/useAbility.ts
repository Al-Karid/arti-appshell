// composables/useAbility.ts
export function useAbility() {

  const { permissions: userPermissions } = useAuth();

  const hasRole = (role: string): boolean => {
    return userPermissions.value.some((app) => app.roles.includes(role.toUpperCase()));
  };

  const can = (action: string, resource: string): boolean => {
    return userPermissions.value.some((app) => {
      const actionMatch =
        app.actions.includes(`${action}:${resource}`.toUpperCase()) || app.actions.includes("MANAGE:ALL");
      const resourceMatch =
        app.resources.includes(resource.toUpperCase()) || app.resources.includes("ALL");

      return actionMatch && resourceMatch;
    });
  };

  const getApproveStep = (resource: string): number | null => {
    const normalizedResource = resource.toUpperCase();

    for (const app of userPermissions.value) {
      if (!app.roles.includes("APPROVER")) continue;

      for (const action of app.actions) {
        const parts = action.toUpperCase().split(":");

        if (parts[0] === "APPROVE" && parts[1] === normalizedResource && parts.length === 3) {
          const step = parseInt(parts[2]);
          if (!isNaN(step)) {
            return step;
          }
        }
      }
    }

    return null;
  };

  const isAdmin = hasRole("ADMIN");
  const isApprover = hasRole("APPROVER");
  const canDeleteMission = can("DELETE", "MISSIONS") || isAdmin;
  const canManageMembers = can("MANAGE", "MEMBERS") || isAdmin;
  const canManageBudgets = can("MANAGE", "BUDGETS") || isAdmin;

  return {
    isAdmin,
    isApprover,
    hasRole,
    can,
    getApproveStep,
    canDeleteMission,
    canManageBudgets,
    canManageMembers
  };
}
