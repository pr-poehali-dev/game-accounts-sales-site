import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "Fortnite",
      description: "V-Bucks и аккаунты",
      price: "от 500₽",
      image: "/img/04e88ee0-cb29-4a02-851f-b32d8f73ebbb.jpg",
      popular: true,
      currency: "V-Bucks"
    },
    {
      id: 2,
      title: "CS2",
      description: "Скины и аккаунты",
      price: "от 300₽",
      image: "/img/fc636fe8-3544-4b4a-89ae-9638d5509267.jpg",
      popular: true,
      currency: "Steam Credits"
    },
    {
      id: 3,
      title: "Valorant",
      description: "VP и премиум аккаунты",
      price: "от 700₽",
      image: "/img/04e88ee0-cb29-4a02-851f-b32d8f73ebbb.jpg",
      popular: false,
      currency: "Valorant Points"
    },
    {
      id: 4,
      title: "Genshin Impact",
      description: "Примогемы и аккаунты",
      price: "от 400₽",
      image: "/img/fc636fe8-3544-4b4a-89ae-9638d5509267.jpg",
      popular: true,
      currency: "Primogems"
    }
  ];

  const paymentMethods = [
    { name: "Банковская карта", icon: "CreditCard", secure: true },
    { name: "SBP", icon: "Smartphone", secure: true },
    { name: "QIWI", icon: "Wallet", secure: true },
    { name: "WebMoney", icon: "Globe", secure: true }
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" className="h-8 w-8 text-primary neon-glow" />
            <span className="text-2xl font-bold neon-text">GameStore</span>
          </div>
          <nav className="ml-auto flex items-center space-x-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#balance" className="text-sm font-medium hover:text-primary transition-colors">
              Баланс
            </a>
            <a href="#security" className="text-sm font-medium hover:text-primary transition-colors">
              Гарантии
            </a>
            <Button variant="outline" className="neon-glow">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 neon-text animate-float">
            Игровая валюта и аккаунты
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Быстро, безопасно, с гарантией. Пополни баланс в любимых играх или купи готовый аккаунт
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="neon-glow animate-neon-pulse">
              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
              Каталог товаров
            </Button>
            <Button variant="outline" size="lg" className="neon-glow">
              <Icon name="Shield" className="mr-2 h-5 w-5" />
              О безопасности
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold neon-text">Популярные игры</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Смотреть все <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="bg-card hover:bg-card/80 transition-all duration-300 neon-glow hover:scale-105 animate-float" style={{animationDelay: `${game.id * 0.2}s`}}>
                <CardHeader className="p-4">
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    {game.popular && (
                      <Badge className="absolute top-2 right-2 bg-primary neon-glow">
                        🔥 ТОП
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-secondary">{game.price}</span>
                    <Badge variant="outline">{game.currency}</Badge>
                  </div>
                  <Button className="w-full neon-glow hover:animate-cyber-glitch">
                    <Icon name="ShoppingBag" className="mr-2 h-4 w-4" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Balance Top-up */}
      <section id="balance" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 neon-text">Пополнение баланса</h2>
            <p className="text-muted-foreground">Выберите удобный способ оплаты</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {paymentMethods.map((method, index) => (
                  <TabsTrigger key={index} value={method.name.toLowerCase().replace(' ', '')} className="flex items-center">
                    <Icon name={method.icon as any} className="mr-2 h-4 w-4" />
                    {method.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="банковскаякарта" className="space-y-4">
                <Card className="neon-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="CreditCard" className="mr-2 h-5 w-5 text-primary" />
                      Банковская карта
                    </CardTitle>
                    <CardDescription>Мгновенное зачисление средств</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="amount">Сумма пополнения</Label>
                        <Input id="amount" placeholder="1000₽" />
                      </div>
                      <div>
                        <Label htmlFor="bonus">Бонус</Label>
                        <Input id="bonus" value="+50₽" disabled />
                      </div>
                    </div>
                    <Button className="w-full neon-glow">
                      <Icon name="Plus" className="mr-2 h-4 w-4" />
                      Пополнить баланс
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sbp" className="space-y-4">
                <Card className="neon-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Smartphone" className="mr-2 h-5 w-5 text-secondary" />
                      Система быстрых платежей
                    </CardTitle>
                    <CardDescription>Оплата через мобильный банк</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sbp-amount">Сумма пополнения</Label>
                        <Input id="sbp-amount" placeholder="1000₽" />
                      </div>
                      <div>
                        <Label htmlFor="sbp-phone">Номер телефона</Label>
                        <Input id="sbp-phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                    </div>
                    <Button className="w-full neon-glow">
                      <Icon name="Smartphone" className="mr-2 h-4 w-4" />
                      Оплатить через СБП
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Security & Guarantees */}
      <section id="security" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 neon-text">Гарантии и безопасность</h2>
            <p className="text-muted-foreground">Ваша безопасность - наш приоритет</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card neon-glow hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src="/img/263173ea-55d1-403f-9d1a-358fe28338cb.jpg" 
                    alt="Security"
                    className="w-20 h-20 object-cover rounded-full mx-auto neon-glow"
                  />
                </div>
                <CardTitle className="text-lg">🔒 Защита данных</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    SSL шифрование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Двухфакторная аутентификация
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Безопасные платежи
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card neon-glow hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Icon name="Shield" className="h-16 w-16 text-primary neon-glow" />
                </div>
                <CardTitle className="text-lg">⚡ Мгновенная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Автоматическая выдача
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    24/7 доступность
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Моментальное зачисление
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card neon-glow hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Icon name="Users" className="h-16 w-16 text-accent neon-glow" />
                </div>
                <CardTitle className="text-lg">🛡️ Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Возврат средств
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Проверенные аккаунты
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 h-4 w-4 text-secondary" />
                    Техподдержка 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" className="h-6 w-6 text-primary neon-glow" />
                <span className="text-lg font-bold neon-text">GameStore</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Твой надежный партнер в мире игр
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Fortnite</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">CS2</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Valorant</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Genshin Impact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат средств</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="neon-glow">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="neon-glow">
                  <Icon name="Mail" className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="neon-glow">
                  <Icon name="Phone" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GameStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;