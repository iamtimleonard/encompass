Encompass.Assignment = DS.Model.extend(Encompass.Auditable, {
  assignmentId: Ember.computed.alias('id'),
  name: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true}),
  students: DS.hasMany('user', {inverse: null}),
  section: DS.belongsTo('section', {async: true}),
  problem: DS.belongsTo('problem', {async: true}),
  assignedDate: DS.attr('date'),
  dueDate: DS.attr('date'),
  taskWorkspace: DS.belongsTo('workspace', {inverse: null} ),
  assignmentType: DS.attr('string'),
  linkedWorkspaces: DS.hasMany('workspace'),
  parentWorkspace: DS.belongsTo('workspace', { inverse: null} ),
  reportDetails: DS.attr(), // for assignment report,
  linkedWorkspaceCreationOptions: DS.attr(),
  parentWorkspaceCreationOptions: DS.attr(),
  parentWorkspaceError: DS.attr('string'), // if parent workspace creation fails on assignment creation
});