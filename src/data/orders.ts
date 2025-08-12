export type PublicOrder = {
  id: string;
  title: string;
  createdAt: string; // ISO date string
  clientName?: string;
  location?: string;
  description?: string;
  images: string[]; // paths under /public or external URLs
  tags?: string[];
};

// Edit this list to add/update showcased orders. Images can be placed under /public and referenced as "/orders/filename.jpg".
export const publicOrders: PublicOrder[] = [
  {
    id: "ORD-OKEY-ALL-SPB",
    title: "Сеть гипермаркетов ОКЕЙ — металлоконструкции и монтаж",
    createdAt: new Date().toISOString(),
    clientName: "ОКЕЙ",
    location: "Санкт-Петербург, Ленинградская область, Москва, Ростов-на-Дону",
    description:
      [
        "СПб: пр. Просвещения, 80, корп.2, лит. А",
        "СПб: пр. Науки, 17, корп.1, лит. А",
        "СПб: ул. Малая Балканская, 27, лит. А",
        "СПб: пр. Просвещения, 80, корп.2, лит. А",
        "СПб: Выборгское шоссе, 19, корп.1, лит. А",
        "СПб: ул. Жукова, 31, корп.1, лит. А",
        "СПб: ул. Руставели, 43, лит. А",
        "Лен. обл.: Ломоносовский р-н, Виллозское г/п, Таллинское шоссе, 27",
        "Москва: ул. Озерная, 50",
        "Ростов-на-Дону: пересечение бул. Комарова и ул. Добровольского",
      ].join("\n"),
    images: [
      "/orders/ok_prosvet.webp",
      "/orders/ok_nauka.jpeg",
      "/orders/ok_balkan.jpeg",
      "/orders/ok_shosse.jpeg",
      "/orders/ok_zhukov.webp",
      "/orders/ok_rust.webp",
      "/orders/ok_msk.jpeg",
      "/orders/ok_rostov.webp",
    ],
    tags: ["торговые объекты", "монтаж", "металлоконструкции"],
  },
  {
    id: "ORD-DEVYATKINO-TC",
    title: "Торговый комплекс «Девяткино»",
    createdAt: new Date().toISOString(),
    location:
      "Ленинградская обл., Всеволожский р-н, Новодевяткинское сп, деревня Новое Девяткино, ул. Главная, 60, лит. А",
    images: ["/orders/torg_compl.webp"],
    tags: ["торговый комплекс"],
  },
  {
    id: "ORD-SCHOOL-1925",
    title:
      "Общеобразовательная школа на 1925 учащихся",
    createdAt: new Date().toISOString(),
    location:
      "Санкт-Петербург, пос. Парголово, Тихоокеанская ул., участок 4 (южнее дома 16, лит. А)",
    images: ["/orders/school.jpeg"],
    tags: ["образование"],
  },
  {
    id: "ORD-CONSERVATORY-RESTORE",
    title:
      "СПб государственная консерватория им. Н.А. Римского-Корсакова — реконструкция и реставрация",
    createdAt: new Date().toISOString(),
    location: "Санкт-Петербург",
    images: ["/orders/rimsk_kors.jpg"],
    tags: ["реконструкция", "культура"],
  },
  {
    id: "ORD-ALMAZOV-CENTER",
    title:
      "Нейрохирургический комплекс НМИЦ им. В.А. Алмазова — строительство",
    createdAt: new Date().toISOString(),
    location:
      "Санкт-Петербург, Заповедная ул., участок 1 (напротив дома 41, лит. А)",
    images: ["/orders/medecine.jpg"],
    tags: ["медицина", "строительство"],
  },
]; 