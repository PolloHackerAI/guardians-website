import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Target } from 'lucide-react'

export const metadata = {
  title: "Chi Siamo | GUARDIANS - Un guardiano sempre al tuo polso",
  description: "Scopri la nostra missione, visione e valori che guidano GUARDIANS",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            GUARDIANS è nata dalla passione per la sicurezza personale e il design innovativo.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/foto_insieme.png?height=900&width=600"
                alt="La storia di GUARDIANS"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">La Nostra Storia</h2>
              <p className="text-gray-700">
                GUARDIANS è nata nel 2023 da un gruppo di giovani professionisti con una visione comune: trasformare il
                concetto di sicurezza personale. Dopo aver notato l'aumento delle preoccupazioni sulla sicurezza
                individuale, abbiamo deciso di creare una soluzione che fosse sia efficace che elegante.
              </p>
              <p className="text-gray-700">
                Il nostro team multidisciplinare ha unito competenze in design, tecnologia e marketing per sviluppare un
                prodotto che potesse essere indossato con orgoglio, pur offrendo funzionalità di sicurezza
                all'avanguardia.
              </p>
              <p className="text-gray-700">
                Oggi, GUARDIANS è in rapida crescita, con l'obiettivo di diventare il punto di riferimento nel settore
                degli accessori smart per la sicurezza personale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">La Nostra Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                La nostra missione è trasformare dei semplici accessori in strumenti di protezione personale, combinando
                design e tecnologia avanzata. Ci impegniamo a offrire alle persone la possibilità di sentirsi sicure in
                ogni momento della giornata senza dare troppo nell'occhio, creando accessori che non solo abbelliscono,
                ma proteggono, connettendo le persone ai loro cari nei momenti di necessità. Ogni nostro pezzo incarna
                la promessa di sicurezza discreta e costante.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-purple-900 mr-3" />
                <h3 className="text-2xl font-bold text-purple-900">La Nostra Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Aspiriamo a rivoluzionare il concetto di sicurezza personale, creando un mondo in cui la protezione
                diventa parte naturale del proprio stile di vita. Immaginiamo un futuro in cui ogni accessorio Guardian
                rappresenti non solo un simbolo di bellezza, ma anche di sicurezza. Vogliamo essere riconosciuti come il
                punto di riferimento globale per gli accessori smart che uniscono estetica e sicurezza, contribuendo a
                creare una società in cui l'eleganza e la protezione personale coesistono armoniosamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex mb-6">
                <Shield className="h-10 w-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sicurezza</h3>
              <p className="text-gray-700">
                La sicurezza dei nostri clienti è la nostra priorità assoluta. Ogni prodotto è progettato con i più alti
                standard di affidabilità.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-flex mb-6">
                <Heart className="h-10 w-10 text-purple-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovazione</h3>
              <p className="text-gray-700">
                Ci impegniamo a spingere costantemente i confini della tecnologia per offrire soluzioni sempre più
                avanzate e intuitive.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-lg text-center">
              <div className="bg-indigo-100 p-4 rounded-full inline-flex mb-6">
                <Target className="h-10 w-10 text-indigo-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-gray-700">
                Crediamo che la sicurezza non debba sacrificare l'estetica. I nostri prodotti sono progettati per essere
                belli quanto funzionali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Il Nostro Target</h2>
              <p className="text-gray-700">
                Il nostro target comprende giovani di entrambi i sessi, poiché Guardians si dedica alla creazione di
                accessori unisex, pensati per essere indossati da chiunque con stile e versatilità.
              </p>
              <p className="text-gray-700">
                Ci rivolgiamo a persone che:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Sono attente alla propria sicurezza personale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Apprezzano il design e l'estetica nei prodotti che indossano</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Sono tecnologicamente connesse e aperte all'innovazione</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Conducono uno stile di vita attivo e dinamico</span>
                </li>
              </ul>
              <Button className="bg-blue-900 hover:bg-blue-800">Scopri i Nostri Prodotti</Button>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Il nostro target"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
