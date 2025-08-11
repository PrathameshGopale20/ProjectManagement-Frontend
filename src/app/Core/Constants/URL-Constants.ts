import { environment } from "../../../environment/environment";
import { Login } from "../../Component/login/login";


export const endpoints:any = {
    AUTH: {
        Login: `${environment.baseUrl}/auth/admin/login`
    },
}