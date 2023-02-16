const { ROLE } = require('./data')

// admin and user can view his project with id
function canViewProject(user, project) {
  return (
    user.role === ROLE.ADMIN ||
    project.userId === user.id
  )
}

// admin can view all but user only his
function scopedProjects(user, projects) {
  if (user.role === ROLE.ADMIN) return projects
  return projects.filter(project => project.userId === user.id)
}

// only user can delete his project
function canDeleteProject(user, project) {
  return project.userId === user.id
}

module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
}