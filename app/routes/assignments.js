import AuthenticatedRoute from './_authenticated_route';
import { hash } from 'rsvp';
/**
 * # Assignments Route
 * @description Route for dealing with all assignment objects
 */
export default class AssignmentsRoute extends AuthenticatedRoute {
  async model() {
    let currentUser = this.modelFor('application');
    let assignments = await this.store.findAll('assignment');
    let assignmentList = assignments.filter((assignment) => {
      return assignment.id && !assignment.get('isTrashed');
    });
    return hash({
      currentUser,
      assignments,
      assignmentList,
    });
  }
}
