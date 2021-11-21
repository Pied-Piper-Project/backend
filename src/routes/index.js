import { signInRoute } from "./signInRoute"
import { signUpRoute } from "./signUpRoute";
import { allResearchPosts } from "./allResearchPosts";
import { updateUserInfoRoute} from "./updateUserInfoRoute";
<<<<<<< HEAD
import { CreatePostsRoute } from "./CreatePostsRoute"; 
import { CreateSpreadsheetPosts } from "./CreateSpreadsheetPosts";
import { SearchwBoth } from "./SearchwBoth";
import { SearchwSchool } from "./SearchwSchool";
import { SearchwKeyword } from "./SearchwKeyword";
=======
import { CreatePostsRoute } from "./CreatePostsRoute";
import { verifyEmailRoute} from "./verifyEmailRoute";
>>>>>>> bcfbff369c777f6b1221eeead851e706847defe7

export const routes = [
    signInRoute,
    signUpRoute,
<<<<<<< HEAD
    allResearchPosts,
=======
    testRoute,
    verifyEmailRoute,
>>>>>>> bcfbff369c777f6b1221eeead851e706847defe7
    updateUserInfoRoute,
    CreatePostsRoute,
    CreateSpreadsheetPosts,
    SearchwBoth,
    SearchwSchool,
    SearchwKeyword
];