import { signInRoute } from "./signInRoute"
import { signUpRoute } from "./signUpRoute";
import { allResearchPosts } from "./allResearchPosts";
import { updateUserInfoRoute} from "./updateUserInfoRoute";
import { CreatePostsRoute } from "./CreatePostsRoute"; 
import { CreateSpreadsheetPosts } from "./CreateSpreadsheetPosts";
import { SearchwBoth } from "./SearchwBoth";
import { SearchwSchool } from "./SearchwSchool";
import { SearchwKeyword } from "./SearchwKeyword";

export const routes = [
    signInRoute,
    signUpRoute,
    allResearchPosts,
    updateUserInfoRoute,
    CreatePostsRoute,
    CreateSpreadsheetPosts,
    SearchwBoth,
    SearchwSchool,
    SearchwKeyword
];