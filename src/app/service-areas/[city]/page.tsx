import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/common/CTA';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { generatePageMetadata, siteUrl } from '@/lib/metadata';

// Service area data
const serviceAreas = {
  'kalispell': {
    name: 'Kalispell',
    displayName: 'Kalispell, Montana',
    distance: '20 minutes from Somers',
    population: '24,558',
    description: 'Premier finish carpentry services in Kalispell, Montana\'s largest city in the Flathead Valley.',
    landmarks: ['Glacier National Park', 'Flathead Lake', 'Conrad Mansion', 'Woodland Park'],
    neighborhoods: ['Downtown Kalispell', 'Westside', 'Northridge', 'Ashley Creek'],
    zipCodes: ['59901', '59902', '59903', '59904'],
    coordinates: { lat: 48.1958, lng: -114.3089 },
    establishedYear: '1891',
    countySeats: 'Flathead County seat'
  },
  'whitefish': {
    name: 'Whitefish',
    displayName: 'Whitefish, Montana',
    distance: '15 minutes from Somers',
    population: '8,915',
    description: 'Expert custom carpentry serving Whitefish\'s luxury homes and resort properties.',
    landmarks: ['Whitefish Mountain Resort', 'Whitefish Lake', 'Historic Downtown', 'Big Mountain'],
    neighborhoods: ['Downtown Whitefish', 'Whitefish Lake', 'Mountain Harbor', 'Iron Horse'],
    zipCodes: ['59937'],
    coordinates: { lat: 48.4108, lng: -114.3372 },
    establishedYear: '1904',
    specialties: 'Resort and luxury home carpentry'
  },
  'bigfork': {
    name: 'Bigfork',
    displayName: 'Bigfork, Montana',
    distance: '10 minutes from Somers',
    population: '5,024',
    description: 'Artisan woodwork and custom carpentry for Bigfork\'s charming lakeside community.',
    landmarks: ['Flathead Lake', 'Swan River', 'Bigfork Summer Playhouse', 'Village Market'],
    neighborhoods: ['Downtown Bigfork', 'Woods Bay', 'Crescent Bay', 'Eagle Bend'],
    zipCodes: ['59911'],
    coordinates: { lat: 48.0633, lng: -114.0725 },
    establishedYear: '1902',
    specialties: 'Lakeside homes and artistic woodwork'
  },
  'columbia-falls': {
    name: 'Columbia Falls',
    displayName: 'Columbia Falls, Montana',
    distance: '25 minutes from Somers',
    population: '5,737',
    description: 'Reliable finish carpentry services for Columbia Falls families and businesses.',
    landmarks: ['Glacier National Park', 'Bad Rock Canyon', 'Columbia Falls Aluminum Company', 'Nucleus Avenue'],
    neighborhoods: ['Downtown Columbia Falls', 'Bad Rock', 'Meadow Lake', 'Tamarack'],
    zipCodes: ['59912'],
    coordinates: { lat: 48.3725, lng: -114.1816 },
    establishedYear: '1892',
    specialties: 'Family homes and commercial spaces'
  },
  'lakeside': {
    name: 'Lakeside',
    displayName: 'Lakeside, Montana',
    distance: '5 minutes from Somers',
    population: '2,682',
    description: 'Neighboring community custom carpentry with deep local knowledge and quick response.',
    landmarks: ['Flathead Lake', 'Blacktail Mountain Ski Area', 'Lakeside Marina', 'Angel Point'],
    neighborhoods: ['Lakeside Proper', 'Angel Point', 'Rollins', 'Yellow Bay'],
    zipCodes: ['59922'],
    coordinates: { lat: 48.0031, lng: -114.2089 },
    establishedYear: '1910',
    specialties: 'Immediate neighbors with fastest response time'
  },
  'polson': {
    name: 'Polson',
    displayName: 'Polson, Montana',
    distance: '30 minutes from Somers',
    population: '5,148',
    description: 'Quality finish carpentry extending our services to Polson and the southern Flathead Valley.',
    landmarks: ['Flathead Lake', 'Mission Mountains', 'Polson Bay Golf Course', 'Miracle of America Museum'],
    neighborhoods: ['Downtown Polson', 'Polson Bay', 'Cherry Hill', 'Riverside'],
    zipCodes: ['59860'],
    coordinates: { lat: 47.6933, lng: -114.1633 },
    establishedYear: '1898',
    specialties: 'Southern Flathead Valley reach'
  }
};

interface Params {
  city: string;
}

interface Props {
  params: Promise<Params>;
}

export async function generateStaticParams() {
  return Object.keys(serviceAreas).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const cityData = serviceAreas[resolvedParams.city as keyof typeof serviceAreas];
  
  if (!cityData) {
    return {
      title: 'City Not Found',
      description: 'The requested service area page could not be found.',
    };
  }

  return generatePageMetadata({
    title: `${cityData.name} Finish Carpenter | Custom Cabinets & Trim | Montana`,
    description: `Expert finish carpentry in ${cityData.displayName}. Custom cabinets, trim work, and built-ins. Only ${cityData.distance} - serving ${cityData.name} since 2004.`,
    path: `/service-areas/${resolvedParams.city}`,
    keywords: [
      `finish carpenter ${cityData.name}`,
      `custom cabinets ${cityData.name} MT`,
      `trim work ${cityData.displayName}`,
      `Montana carpenter ${cityData.name}`,
      `woodworker ${cityData.name} Montana`
    ]
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const resolvedParams = await params;
  const cityData = serviceAreas[resolvedParams.city as keyof typeof serviceAreas];
  
  if (!cityData) {
    notFound();
  }

  // Local business schema for this service area
  const localAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/service-areas/${resolvedParams.city}#service`,
    name: `Finish Carpentry Services in ${cityData.displayName}`,
    description: cityData.description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteUrl}#business`,
      name: 'Montana Finish Carpenter'
    },
    areaServed: {
      '@type': 'City',
      name: cityData.displayName,
      addressRegion: 'Montana',
      addressCountry: 'US',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: cityData.coordinates.lat,
        longitude: cityData.coordinates.lng
      }
    },
    availabilityStarts: '08:00',
    availabilityEnds: '18:00',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };

  return (
    <>
      {/* Local Area Schema */}
      <Script
        id="local-area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localAreaSchema),
        }}
      />
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-[#1A1A1A] text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/service-areas/${resolvedParams.city}-hero.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: cityData.name, href: `/service-areas/${resolvedParams.city}` }
            ]} />
            
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                {cityData.name} Finish Carpenter
              </h1>
              <p className="text-xl sm:text-2xl leading-relaxed mb-8">
                Expert custom carpentry serving {cityData.displayName}. Only {cityData.distance}, 
                we bring Montana craftsmanship directly to your door.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  Free {cityData.name} Estimate
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A3A2E] px-8 py-4 text-lg font-semibold"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Area Information */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold text-[#0F0F0F] mb-6">
                  Serving {cityData.displayName} Since 2004
                </h2>
                <p className="text-xl text-[#333333] mb-6 leading-relaxed">
                  {cityData.description}
                </p>
                <p className="text-[#333333] mb-8 leading-relaxed">
                  Located just {cityData.distance}, we&apos;ve been proudly serving {cityData.name} families 
                  and businesses with expert finish carpentry for over 20 years. Our deep knowledge of 
                  Montana living and quick response time make us the trusted choice for custom cabinetry, 
                  trim work, and built-in storage solutions.
                </p>

                {/* Area Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#FAFAF8] p-6 rounded-rustic border border-[#333333]">
                    <h3 className="font-semibold text-[#0F0F0F] mb-2">Distance from Shop</h3>
                    <p className="text-[#333333]">{cityData.distance}</p>
                  </div>
                  <div className="bg-[#FAFAF8] p-6 rounded-rustic border border-[#333333]">
                    <h3 className="font-semibold text-[#0F0F0F] mb-2">Population</h3>
                    <p className="text-[#333333]">{cityData.population} residents</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="relative aspect-[4/3] rounded-rustic overflow-hidden mb-6">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/service-areas/${resolvedParams.city}-landscape.jpg')`,
                    }}
                  />
                </div>
                <p className="text-sm text-[#333333] text-center">
                  Beautiful {cityData.displayName} - one of our favorite places to work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Landmarks & Neighborhoods */}
        <section className="py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-[#0F0F0F] mb-6">
                We Know {cityData.name}
              </h2>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
                Local knowledge matters. We&apos;ve worked throughout {cityData.name}, 
                from historic downtown to newer developments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Landmarks */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#0F0F0F] mb-6">
                  Famous Landmarks We Serve Near
                </h3>
                <ul className="space-y-3">
                  {cityData.landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[#333333]">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Neighborhoods */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#0F0F0F] mb-6">
                  Neighborhoods We Serve
                </h3>
                <ul className="space-y-3">
                  {cityData.neighborhoods.map((neighborhood, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[#333333]">{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services for This Area */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-[#0F0F0F] mb-6">
                Our {cityData.name} Services
              </h2>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
                From custom kitchen cabinets to precision trim work, we bring our full range 
                of finish carpentry services directly to {cityData.displayName}.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Custom Cabinetry', icon: '🏠', description: `Kitchen and bathroom cabinets designed for ${cityData.name} homes` },
                { name: 'Trim & Molding', icon: '📐', description: `Precision trim work that complements ${cityData.name} architecture` },
                { name: 'Built-in Storage', icon: '📦', description: `Custom storage solutions for ${cityData.name} living` },
                { name: 'Custom Furniture', icon: '🪑', description: `Handcrafted furniture pieces for ${cityData.name} families` }
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0A3A2E] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F0F0F] mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#333333] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <CTA 
          title={`Ready for Your ${cityData.name} Project?`}
          subtitle={`Get a free consultation and estimate for your ${cityData.displayName} home. Quick response time - only ${cityData.distance}!`}
          primaryButtonText={`Contact Us About ${cityData.name}`}
          backgroundVariant="solid"
        />
      </main>
      <Footer />
    </>
  );
}