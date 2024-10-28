export type ISignInValues =  {
  email: string;
  password: string;
}

export type ISignUpValues = ISignInValues & {
  username: string;
  cpassword: string;
}