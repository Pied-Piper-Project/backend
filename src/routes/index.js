import { signInRoute } from "./signInRoute"
import { signUpRoute } from "./signUpRoute";
import { allResearchPosts } from "./allResearchPosts";
import { updateUserInfoRoute} from "./updateUserInfoRoute";
import { updateProfInfoRoute} from "./updateProfInfoRoute";
import { updateAdminInfoRoute} from "./updateAdminInfoRoute";
import { CreatePostsRoute } from "./CreatePostsRoute"; 
import { CreateSpreadsheetPosts } from "./CreateSpreadsheetPosts";
import { SearchwBoth } from "./SearchwBoth";
import { SearchwSchool } from "./SearchwSchool";
import { SearchwKeyword } from "./SearchwKeyword";
import { studentProfileRoute } from "./studentProfileRoute";
import { verifyEmailRoute} from "./verifyEmailRoute";
import { applyForPostRoute } from "./applyForPostRoute";
import {applicantManage} from "./applicantManage"

export const routes = [
    signInRoute,
    signUpRoute,
    verifyEmailRoute,
    allResearchPosts,
    updateUserInfoRoute,
    updateAdminInfoRoute,
    updateProfInfoRoute,
    CreatePostsRoute,
    CreateSpreadsheetPosts,
    SearchwBoth,
    SearchwSchool,
    SearchwKeyword,
    studentProfileRoute,
    applyForPostRoute,
    applicantManage
];