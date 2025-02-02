const SESSION = "session" as const;
const PRODUCT = "product" as const;
const COMMENT = "comment" as const;
const AUCTION = "auction" as const;
const PURCHASES = "purchases" as const;
const BIDDING = "bidding" as const;
const TRANSACTION = "transaction" as const;
const SELL = "sell" as const;
const IN_PROGRESS = "in_progress" as const;
const COMPLETED = "completed" as const;
const BLOCK = "block" as const;
const CHAT_ITEMS = "chat_items" as const;
const ALL = "all" as const;
const SEARCH_RESULT = "search_result" as const;

export const queries = {
  session: {
    DEFAULT: [SESSION],
  },
  product: {
    DEFAULT: [PRODUCT],
    detail: (productId: string) => [PRODUCT, productId],
  },
  comment: {
    DEFAULT: (productId: string) => [COMMENT, productId],
  },
  auction: {
    DEFAULT: [AUCTION],
    purchases: [AUCTION, PURCHASES],
    bidding: [AUCTION, BIDDING],
  },
  transaction: {
    DEFAULT: [TRANSACTION],
    sell: {
      DEFAULT: [TRANSACTION, SELL],
      in_progress: [TRANSACTION, SELL, IN_PROGRESS],
      completed: [TRANSACTION, SELL, COMPLETED],
    },
  },
  block:{
    DEFAULT: [BLOCK],
  },
  // TODO: 다른 것들과 통일 필요
  chatItems: {
    DEFAULT: [CHAT_ITEMS],
    ALL: [CHAT_ITEMS, ALL],
    SALE: [CHAT_ITEMS, SELL],
    PURCHASE: [CHAT_ITEMS, PURCHASES],
  },
  searchResult: {
    DEFAULT: [SEARCH_RESULT],
  }

} as const;
