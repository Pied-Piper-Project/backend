import { signInRoute } from "./signInRoute"
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute} from "./updateUserInfoRoute";
import { CreatePostsRoute } from "./CreatePostsRoute";
import { verifyEmailRoute} from "./verifyEmailRoute";
import { applyForPostRoute } from "./applyForPostRoute";

export const routes = [
    signInRoute,
    signUpRoute,
    testRoute,
    verifyEmailRoute,
    updateUserInfoRoute,
    CreatePostsRoute,
    applyForPostRoute
];