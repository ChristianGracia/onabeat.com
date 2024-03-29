const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export function login(user, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(user, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

async function callLoginApi(user, password, callback) {
  const userObject = {
    user: user,
    pass: password
  };
  console.log(userObject);
  const options = {
    method: "POST",

    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userObject)
  };

  const response = await fetch(
    "https://www.onabeat.com/api/login/login-user",
    options
  );
  const content = await response.json();
  console.log(content);

  if (content == null) {
    return callback(new Error("Invalid email and password"));
  } else {
    return callback(null);
  }
}

export default function reducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
  },
  action
) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}
