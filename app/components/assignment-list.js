// import Component from '@ember/component';
import Component from '@glimmer/component';
// import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AssignmentListComponent extends Component {
  @service('utility-methods') utils;
  // @computed('args.assignments.@each.isTrashed', 'args.currentUser.isStudent')
  get yourList() {
    let currentUser = this.args.currentUser;
    let yourList = this.args.assignments.filter((assignment) => {
      let userId = currentUser.get('id');
      let assigmentCreatorId = this.utils.getBelongsToId(
        assignment,
        'createdBy'
      );
      return userId === assigmentCreatorId && !assignment.get('isTrashed');
    });
    return yourList.sortBy('createDate').reverse();
  }
  // @computed(
  //   'args.assignmentList',
  //   'args.assignments.@each.isTrashed',
  //   'currentUser.isStudent'
  // )
  get adminList() {
    let currentUser = this.args.currentUser;
    let adminList = this.args.assignmentList.filter((assignment) => {
      let userId = currentUser.get('id');
      let assigmentCreatorId = this.utils.getBelongsToId(
        assignment,
        'createdBy'
      );
      return userId !== assigmentCreatorId && !assignment.get('isTrashed');
    });
    return adminList.sortBy('createDate').reverse();
  }
  // @computed(
  //   'args.assignmentList',
  //   'args.assignments.@each.isTrashed',
  //   'currentUser.isStudent'
  // )
  get pdList() {
    let currentUser = this.args.currentUser;
    let pdList = this.args.assignmentList.filter((assignment) => {
      let userId = currentUser.get('id');
      let assigmentCreatorId = this.utils.getBelongsToId(
        assignment,
        'createdBy'
      );
      return userId !== assigmentCreatorId && !assignment.get('isTrashed');
    });
    return pdList.sortBy('createDate').reverse();
  }
}
