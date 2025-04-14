import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">I Nostri Prodotti</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Bracciali intelligenti che combinano eleganza e sicurezza personale
        </p>

        <Tabs defaultValue="model1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="model1">Guardian Classic</TabsTrigger>
            <TabsTrigger value="model2">Guardian Pro</TabsTrigger>
          </TabsList>

          <TabsContent value="model1" className="mt-6">
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
                <h3 className="text-2xl font-bold text-blue-900">Guardian Classic</h3>
                <p className="text-gray-700">
                  Il nostro modello base, elegante e discreto. Dotato di pulsante SOS nascosto che invia avvisi di
                  emergenza ai contatti preimpostati con la tua posizione GPS.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Design minimalista unisex</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Pulsante SOS nascosto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Connessione Bluetooth al tuo smartphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Batteria a lunga durata (fino a 7 giorni)</span>
                  </li>
                </ul>
                <Button className="bg-blue-900 hover:bg-blue-800">Maggiori Informazioni</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="model2" className="mt-6">
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
                <h3 className="text-2xl font-bold text-purple-900">Guardian Pro</h3>
                <p className="text-gray-700">
                  Il nostro modello premium con funzionalità avanzate. Oltre al pulsante SOS, include registrazione
                  audio, monitoraggio della frequenza cardiaca e connettività cellulare indipendente.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Tutte le funzionalità del Classic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Registrazione audio di emergenza</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Connettività cellulare integrata (no smartphone richiesto)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Monitoraggio frequenza cardiaca</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Resistente all'acqua (IP67)</span>
                  </li>
                </ul>
                <Button className="bg-purple-900 hover:bg-purple-800">Maggiori Informazioni</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
