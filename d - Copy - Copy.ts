export interface Menu_interface {
  store: Store_interface;
  categories: Category_Interface[];
  sub_categories: Sub_Category_Interface[];
  items: Item_Interface[];
}

export interface Store_interface {
  storeId: number;
  storeName: string;
  aboutUs?: string[];
  currency: string;
  phoneNumber: string;
  storeLogo: Img_Interface;
  mainLangId: number;
  languages: number[];
  sm?: {
    email?: string;
    location?: string;
    locationUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    whatsappUrl?: string;
    websiteUrl?: string;
  };
  openFrom?: string;
  openTo?: string;
  isActive?: boolean;
  showCategories?: boolean;
}

export interface Item_Interface {
  subCategoryId: number;
  itemId: number;
  order: number;
  itemLabel: string;
  price: number;
  itemImg?: Img_Interface;
  itemBackgroundImg?: Img_Interface;
  translation?: Translation_interface;
  hide?: boolean;
  calories?: number;
  discount?: Item_Discount_Interface;
  isStarred?: boolean;
  isNew?: boolean;
  itemDescription?: string;
  itemDescriptionTranslation?: Translation_interface;
  haveMultipleSizes?: boolean;
  sizes: Item_Size_Interface[];
}

export interface Sub_Category_Interface {
  subCategoryId: number;
  subCategoryLabel: string;
  order: number;
  subCategoryImg?: Img_Interface;
  subCategoryBackgroundImg?: Img_Interface;
  translation?: Translation_interface;
  hide?: boolean;
}

export interface Category_Interface {
  categoryId: number;
  categoryLabel: string;
  order: number;
  categoryImg?: Img_Interface;
  categoryBackgroundImg?: Img_Interface;
  translation?: Translation_interface;
  hide?: boolean;
}

export interface Translation_interface {
  AR?: string;
  FR?: string;
}

export interface Img_Interface {
  src?: string;
  alt?: string;
}

export interface Item_Size_Interface {
  label: string;
  price: number;
}

export interface Item_Discount_Interface {
  type: "direct" | "%";
  amount: number;
}

const languages = {
  EN: {
    id: 1,
    label: "english",
    short: "en",
    flag_src: "",
  },
  AR: {
    id: 2,
    label: "arabic",
    short: "ar",
    flag_src: "",
  },
  FR: {
    id: 3,
    label: "francais",
    short: "fr",
    flag_src: "",
  },
};
