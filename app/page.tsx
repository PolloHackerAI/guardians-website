import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Users, Target } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">GUARDIANS</h1>
            <p className="text-xl md:text-2xl italic">"Un guardiano sempre al tuo polso"</p>
            <p className="text-lg md:text-xl max-w-md">
              Trasformiamo semplici accessori in strumenti di protezione personale, combinando design e tecnologia
              avanzata.
            </p>
            <div className="pt-4">
              <Link href="/prodotti">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                  Scopri i nostri prodotti <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="GUARDIANS Bracelet"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Sicurezza e Stile in un Unico Accessorio</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Shield className="h-10 w-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Protezione Discreta</h3>
              <p className="text-gray-600">
                Accessori eleganti che nascondono tecnologia avanzata per la tua sicurezza personale.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Users className="h-10 w-10 text-purple-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connessione Costante</h3>
              <p className="text-gray-600">
                Ti mantiene connesso ai tuoi cari nei momenti di necessità con un semplice gesto.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <Target className="h-10 w-10 text-indigo-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Unisex</h3>
              <p className="text-gray-600">
                Creati per tutti, i nostri accessori combinano versatilità e stile per ogni occasione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">La Nostra Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                La nostra missione è trasformare dei semplici accessori in strumenti di protezione personale, combinando
                design e tecnologia avanzata. Ci impegniamo a offrire alle persone la possibilità di sentirsi sicure in
                ogni momento della giornata senza dare troppo nell'occhio, creando accessori che non solo abbelliscono,
                ma proteggono, connettendo le persone ai loro cari nei momenti di necessità. Ogni nostro pezzo incarna
                la promessa di sicurezza discreta e costante.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-900">La Nostra Vision</h3>
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

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">I Nostri Prodotti</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Bracciali intelligenti che combinano eleganza e sicurezza personale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Guardian Classic Bracelet"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Guardian Classic</h3>
              <p className="text-gray-700 mb-4">
                Il nostro modello base, elegante e discreto. Dotato di pulsante SOS nascosto che invia avvisi di
                emergenza ai contatti preimpostati.
              </p>
              <Link href="/prodotti">
                <Button className="bg-blue-900 hover:bg-blue-800 w-full">Scopri di più</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Guardian Pro Bracelet"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-2">Guardian Pro</h3>
              <p className="text-gray-700 mb-4">
                Il nostro modello premium con funzionalità avanzate. Include registrazione audio, monitoraggio della
                frequenza cardiaca e connettività cellulare.
              </p>
              <Link href="/prodotti">
                <Button className="bg-purple-900 hover:bg-purple-800 w-full">Scopri di più</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Il Nostro Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Professionisti appassionati che lavorano insieme per rivoluzionare la sicurezza personale
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Merisi Martina",
              "Giulio Grossi",
              "Sara Meco",
              "Francesco Caratù",
              "Michael Tranchino",
              "Dario Battistini",
            ].map((name, index) => (
              <div key={index} className="text-center">
                <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image src={`/placeholder.svg?height=128&width=128`} alt={name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold">{name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/team">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                Conosci il Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto a Proteggere il Tuo Stile di Vita?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Scopri la collezione GUARDIANS e trasforma il modo in cui vivi la sicurezza personale.
          </p>
          <Link href="/contatti">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              Contattaci Ora
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
