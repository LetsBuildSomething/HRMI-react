export const ACTION_SAMPLE = 'ACTION_SAMPLE';

export function doActionSample(number) {
  return { type: ACTION_SAMPLE, number };
}









/*
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors()
      .then(authors => { dispatch(loadAuthorsSuccess(authors)); })
      .catch(error => { throw(error); });
  };
}
*/