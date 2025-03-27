// ○ https://developer.themoviedb.org/reference/account-details
// ○ [Optional] https://developer.themoviedb.org/reference/movie-
// recommendations

import { http } from "@configs";
import Config from "react-native-config";


class AccountService {
  static getAccountDetails() {
    return http.get(`/account/${Config.ACCOUNT_ID}`);
  }
}

export default AccountService;
