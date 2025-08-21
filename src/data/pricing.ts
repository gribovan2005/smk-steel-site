export interface PricingItem {
    name: string;
    price: string;
}

export const pricingData: PricingItem[] = [
    { name: "КМД (проектирование чертежей)", price: "1 500р" },
    { name: "Металлопрокат с учётом 5% отхода", price: "48 700р" },
    { name: "Грунт (ВЛ-023, 108 г/м2)", price: "880р" },
    { name: "Краска (360 г/м2)", price: "2 970р" },
    { name: "М-29 (расходники)", price: "730р" },
    { name: "Доставка металлопроката в цех", price: "400р" },
    { name: "Доставка до объекта заказчика", price: "400р" },
    { name: "Изготовление металлоконструкций", price: "19 950р" },
    { name: "Итого", price: "75 530р" },
];
