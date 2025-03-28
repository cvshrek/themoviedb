import { Keys } from "@constants";
import AccountService from "@services/account.service";
import StorageUtils from "@utils/stores.util";
import { useState } from "react";

function useWatchlistScreen() {
  const [account, setAccount] = useState<Account>();
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const fetchAccount = async () => {
    const response = await AccountService.getAccountDetails();
    setAccount(response);
  }

  const fetchWatchlist = () => {
    const response = StorageUtils.getItem(Keys.watchlist_storage);
    if (response) {
      const parsedData = JSON.parse(response);
      setWatchlist(parsedData);
    }
  }

  const onWatchListRemove = (id: number) => {
    const watchlistCollection = StorageUtils.getItem(Keys.watchlist_collection)
    const watchlists = StorageUtils.getItem(Keys.watchlist_storage)
    if (watchlistCollection && watchlists) {
      const parsedCollection = JSON.parse(watchlistCollection);
      const parsedWatchlists = JSON.parse(watchlists).filter((item: Movie) => item.id !== id);
      parsedCollection[id] = false;
      StorageUtils.setItem(Keys.watchlist_collection, JSON.stringify(parsedCollection));
      StorageUtils.setItem(Keys.watchlist_storage, JSON.stringify(parsedWatchlists))
      setWatchlist(parsedWatchlists);
    }
  }

  return {
    account,
    watchlist,
    fetchAccount,
    fetchWatchlist,
    onWatchListRemove
  }
}

export default useWatchlistScreen;
