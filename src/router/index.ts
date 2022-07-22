import { Path } from "@cppay/mvc-server";
import { home} from "../controller/HomeController";
import { getBalance } from "../controller/AccountController";
import { UserController } from "../controller/UserController";

export const routes:Path[] = [
    {path:'/',handlerFunction:home,type:'get',name:'home'},
    {path:'/account/signup',handlerFunction:UserController.signup,type:'post',name:'signup'},
    {path:'/account/login',handlerFunction:UserController.login,type:'post',name:'login'},
    {path:'/getbalance',handlerFunction:getBalance,type:'post',name:'getBalance'},
]