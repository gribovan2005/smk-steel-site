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
    id: "ORD-EX-001",
    title: "Металлокаркас склада",
    createdAt: new Date().toISOString(),
    clientName: "ООО Ромашка",
    location: "Санкт-Петербург",
    description: "Изготовление и монтаж металлокаркаса склада. Окраска, доставка, установка.",
    images: [
      "/orders/example-warehouse-1.jpg",
      "/orders/example-warehouse-2.jpg",
    ],
    tags: ["склад", "каркас", "монтаж"],
  },
  {
    id: "ORD-EX-002",
    title: "Навес над парковкой",
    createdAt: new Date().toISOString(),
    clientName: "ИП Иванов",
    location: "Ленинградская область",
    description: "Проектирование, изготовление и установка навеса.",
    images: [
      "/orders/example-canopy-1.jpg",
    ],
    tags: ["навес", "изготовление"],
  },
]; 