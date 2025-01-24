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
const CHATITEMS = "chatItems" as const;
const ALL = "all" as const;

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
    DEFAULT: [CHATITEMS],
    ALL: [CHATITEMS, ALL],
    SALE: [CHATITEMS, SELL],
    PURCHASE: [CHATITEMS, PURCHASES],
  }

} as const;
