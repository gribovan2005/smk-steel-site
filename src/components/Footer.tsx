import Link from "next/link";
import { services } from "@/data/services";
import { constructions } from "@/data/constructions";

const serviceUrls: Record<string, string> = {
  "Вальцовка обечаек": "/services/valtsovka-obechaek",
  "Плазменная резка": "/services/plazmennaya-rezka",
  "Гибка листа до 8мм": "/services/gibka-lista",
  "Вальцовка профиля": "/services/valtsovka-profilya", 
  "Разработка КМ КМД": "/services/km-kmd",
  "Монтажные работы": "/services/montazh",
};

const constructionUrls: Record<string, string> = {
  "Фермы": "/constructions/fermy",
  "Прогоны, балки покрытия": "/constructions/progony-balki-pokrytiya",
  "Электросварной двутавр": "/constructions/elektrosvarnoj-dvutavr",
  "Колонны": "/constructions/kolonny",
  "Связи, фахверк, распорки": "/constructions/svyazi-fahverk-rasporki",
  "Балки перекрытий": "/constructions/balki-perekrytij",
  "Лестницы, ограждения, площадки": "/constructions/lestnitsy-ograzhdeniya-ploshhadki",
  "Закладные изделия": "/constructions/zakladnye-izdeliya",
  "Створные знаки": "/constructions/stvornye-znaki",
  "Дымовые трубы": "/constructions/dymovye-truby",
  "Подкрановые балки": "/constructions/podkranovye-balki",
  "Приварка статичных болтов": "/constructions/privarka-statichnykh-boltov",
  "Пространственные конструкции": "/constructions/prostranstvennye-konstruktsii",
  "Опоры ЛЭП": "/constructions/opory-lep",
  "Емкости и резервуары": "/constructions/emkosti-rezervuary",
  "Нестандартные изделия": "/constructions/nestandartnye-izdeliya",
};

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">СМК Сталь</h3>
            <p className="text-sm text-gray-300 mb-4">
              Изготовление металлоконструкций, плазменная резка, монтаж. 
              Полный цикл от проектирования до монтажа.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Работаем с 2013 года</div>
              <div>Допуски СРО</div>
              <div>Собственное производство</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Все услуги
                </Link>
              </li>
              {services.map((service) => {
                const url = serviceUrls[service.name];
                return url ? (
                  <li key={service.name}>
                    <Link href={url} className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Типовые конструкции</h3>
            <ul className="space-y-2 text-sm max-h-64 overflow-y-auto">
              <li>
                <Link href="/#constructions" className="text-gray-300 hover:text-white transition-colors">
                  Все конструкции
                </Link>
              </li>
              {constructions.map((construction) => {
                const url = constructionUrls[construction.name];
                return url ? (
                  <li key={construction.name}>
                    <Link href={url} className="text-gray-300 hover:text-white transition-colors">
                      {construction.name}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div>
                <a 
                  href="tel:+79219472911" 
                  className="text-white font-medium hover:text-blue-300 transition-colors"
                >
                  +7 (921) 947-29-11
                </a>
              </div>
              <div>
                <a 
                  href="mailto:zakaz@smksteel-spb.ru" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  zakaz@smksteel-spb.ru
                </a>
              </div>
              <div className="text-gray-300">
                <div className="font-medium">Офис:</div>
                <div>192012, г. Санкт-Петербург, ул. Мурзинская, д. 11, литера А, офис 701</div>
              </div>
              <div className="text-gray-300">
                <div className="font-medium">Производство:</div>
                <div>м. Парнас, ул. Домостроительная 10Б</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    Вопросы и ответы
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="text-gray-300 hover:text-white transition-colors">
                    Наши заказы
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-gray-300 hover:text-white transition-colors">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2025 СМК Сталь. Все права защищены.
            </div>
            <div>
              ИНН 7811564681 • ОГРН 1137847431028
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 