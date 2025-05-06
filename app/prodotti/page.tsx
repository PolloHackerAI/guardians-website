import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

export const metadata = {
  title: "Prodotti | GUARDIANS - Un guardiano sempre al tuo polso",
  description: "Scopri la nostra gamma di bracciali intelligenti per la tua sicurezza personale",
}

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Prodotti</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bracciali intelligenti che combinano eleganza e sicurezza personale, progettati per proteggerti in ogni
            momento della giornata.
          </p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="classic" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="classic">Guardian Classic</TabsTrigger>
              <TabsTrigger value="pro">Guardian Pro</TabsTrigger>
            </TabsList>

            <TabsContent value="classic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Guardian Classic Bracelet"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-blue-900">Guardian Classic</h2>
                    <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">€89,99</Badge>
                  </div>
                  <p className="text-gray-700">
                    Il nostro modello base, elegante e discreto. Dotato di pulsante SOS nascosto che invia avvisi di
                    emergenza ai contatti preimpostati con la tua posizione GPS.
                  </p>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Caratteristiche</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                        <span>Design minimalista unisex disponibile in 3 colori</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                        <span>Pulsante SOS nascosto per chiamate di emergenza</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                        <span>Connessione Bluetooth al tuo smartphone</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                        <span>Batteria a lunga durata (fino a 7 giorni)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                        <span>App mobile per iOS e Android</span>
                      </li>
                    </ul>
                  </div>
                  <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                    Acquista Ora
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pro" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Guardian Pro Bracelet"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-purple-900">Guardian Pro</h2>
                    <Badge className="bg-purple-100 text-purple-900 hover:bg-purple-200">€149,99</Badge>
                  </div>
                  <p className="text-gray-700">
                    Il nostro modello premium con funzionalità avanzate. Oltre al pulsante SOS, include registrazione
                    audio, monitoraggio della frequenza cardiaca e connettività cellulare indipendente.
                  </p>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Caratteristiche</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-600 mr-2 shrink-0" />
                        <span>Tutte le funzionalità del Classic</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-600 mr-2 shrink-0" />
                        <span>Registrazione audio di emergenza</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-600 mr-2 shrink-0" />
                        <span>Connettività cellulare integrata (no smartphone richiesto)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-600 mr-2 shrink-0" />
                        <span>Monitoraggio frequenza cardiaca</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-600 mr-2 shrink-0" />
                        <span>Resistente all'acqua (IP67)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-600 mr-2 shrink-0" />
                        <span>Disponibile in 5 colori esclusivi</span>
                      </li>
                    </ul>
                  </div>
                  <Button size="lg" className="bg-purple-900 hover:bg-purple-800">
                    Acquista Ora
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Accessori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Cinturini Intercambiabili"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <CardTitle>Cinturini Intercambiabili</CardTitle>
                <CardDescription>Personalizza il tuo Guardian con diversi stili</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Set di cinturini in diversi materiali e colori per adattare il tuo bracciale Guardian a ogni occasione.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">€19,99</span>
                <Button variant="outline">Dettagli</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Caricatore Wireless"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <CardTitle>Caricatore Wireless</CardTitle>
                <CardDescription>Ricarica il tuo Guardian senza cavi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Base di ricarica wireless elegante e compatta per ricaricare il tuo Guardian in modo semplice e veloce.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">€29,99</span>
                <Button variant="outline">Dettagli</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Custodia da Viaggio"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <CardTitle>Custodia da Viaggio</CardTitle>
                <CardDescription>Proteggi il tuo Guardian in movimento</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custodia protettiva resistente agli urti con spazio per il bracciale e gli accessori.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">€24,99</span>
                <Button variant="outline">Dettagli</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">App Guardian</h2>
              <p className="text-gray-700">
                L'app Guardian è il centro di controllo per il tuo bracciale. Configura i contatti di emergenza,
                personalizza le impostazioni e monitora le tue statistiche di sicurezza.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                  <span>Configurazione dei contatti di emergenza</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                  <span>Monitoraggio della posizione in tempo reale</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                  <span>Cronologia degli avvisi e delle attività</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                  <span>Personalizzazione delle funzioni del bracciale</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button className="bg-black hover:bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="App Store"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  App Store
                </Button>
                <Button className="bg-black hover:bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Google Play"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=300"
                alt="App Guardian"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
