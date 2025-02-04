import { Account, Client, ID } from "appwrite";
import envConfig from "../envConfig.js";
export class AuthServices {
    client = new Client()
    Account;
    constructor() {
        this.client.setEndpoint(envConfig.APPWRITE_URL).setProject(envConfig.APPWRITE_Project_ID);
        this.account = new Account(this.client);
    }
    async Signup({ email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password)
            if (userAccount) {
                console.log("successfully register to our database")
                return {
                    userAccount,
                    success: true
                };
            } else {
                console.log("Registeration got failed")
                return userAccount
            }
        } catch (error) {
            console.log("Error in signup user :- ", error)
        }
    }
    async Login({email,password}){
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
            if (response) {
                console.log("user is verifed successsfully")
                return {
                    response,
                    success:true
                };
            }
        } catch (error) {
            console.log('Error in login :- ',error)
            return{
                success:false,
                message:error.message
            }
        }
    }
    async getCurrentUser() {
        try {
            return  await this.account.get();
        } catch (error) {
            console.log("error in getting user details :- ",error)
        }
    }
    async Logout() {
        try {
           const res= await this.account.deleteSessions("current")
           return{
            res,
            success:true,
            message:"Session is delete"
           }            
        } catch (error) {
            console.log("error in logout of user :- ",error);
        }
    }
}
const authServices = new AuthServices();
export default authServices