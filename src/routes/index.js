import { signInRoute } from "./signInRoute"
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute} from "./updateUserInfoRoute";
import { verifyEmailRoute} from "./verifyEmailRoute";
import { forgotPasswordRoute} from "./forgotPasswordRoute";
import { resetPasswordRoute} from "./resetPasswordRoute";

export const routes = [
    signInRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute
];