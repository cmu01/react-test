import $ from 'jquery';

export default (state = {isInit: true}, action) => {
  switch (action.type) {
    // username and password aren't state.
    // case 'updateName':
    //   return Object.assign(state, {'userName': action.value});
    // case 'updatePassWord':
    //   return Object.assign(state, {'passWord': action.value});
    case 'onCheck':
      return Object.assign(state, {'status': action.status, isInit: false});
    default:
      return state
  }
}