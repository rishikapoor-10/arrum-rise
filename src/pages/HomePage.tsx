import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Compass, ShieldCheck, MapPin, 
  ArrowRight, Sparkles, Check, Phone, FileText, ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { BLOG_POSTS } from '../data/blog';
import { EnquiryForm } from '../components/EnquiryForm';

export const HomePage: React.FC = () => {
  const recentArticles = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#071914] text-white overflow-hidden pt-24 pb-16">
        {/* Background Image with editorial overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/casa-bliss-facade.png"
            alt="Aurrum Rise Architecture"
            className="w-full h-full object-cover object-top opacity-35 scale-105 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071914] via-[#071914]/75 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#071914]/40 to-[#071914]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#163B31]/80 border border-[#C9A050]/40 backdrop-blur-sm mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73]">
              Boutique Residences • Dronagiri, Navi Mumbai
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5] leading-tight sm:leading-snug max-w-4xl mx-auto">
            Elevated Living Through <br />
            <span className="gold-gradient-text">Considered Architectural Design</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Aurrum Rise curates limited-edition residential collections in Navi Mumbai’s most strategically connected coastal corridors. Thoughtful planning, enduring craftsmanship, and uncompromised transparency.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-[0.15em] font-bold rounded transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 border border-[#C9A050]/60 hover:border-[#DFBA73] text-[#DFBA73] hover:text-white text-xs uppercase tracking-[0.15em] font-semibold rounded transition-all flex items-center justify-center space-x-2"
            >
              <span>Enquire with Promoters</span>
            </Link>
          </div>

          {/* Quick stats / Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="p-3">
              <span className="block text-2xl font-serif-luxury font-bold text-[#DFBA73]">24 Only</span>
              <span className="text-xs text-gray-400">Exclusive Boutique Homes at Casa Bliss</span>
            </div>
            <div className="p-3">
              <span className="block text-2xl font-serif-luxury font-bold text-[#DFBA73]">G+7 Storey</span>
              <span className="text-xs text-gray-400">Low-Density Serenity at Casa One</span>
            </div>
            <div className="p-3">
              <span className="block text-2xl font-serif-luxury font-bold text-[#DFBA73]">~20 Mins</span>
              <span className="text-xs text-gray-400">To South Mumbai via Atal Setu</span>
            </div>
            <div className="p-3">
              <span className="block text-2xl font-serif-luxury font-bold text-[#DFBA73]">100% Verified</span>
              <span className="text-xs text-gray-400">RERA & Documented Architectural Plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND NARRATIVE */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#A78235]">
                <span>Brand Philosophy</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2A22]">
                Not Just Another Building. <br />
                <span className="text-[#C9A050]">Homes Crafted with Intent.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Aurrum Rise was founded on a simple conviction: luxury is not about towering concrete mega-blocks or overstated marketing slogans. True luxury is found in generous room dimensions, cross-ventilation, abundant sunlight, low-density exclusivity, and genuine peace of mind.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                In close collaboration with seasoned construction partners including Falcon Realty, Gagan Vives Architects, and Aaum Constructions, we create boutique residences that respect your privacy and protect your long-term capital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#EBF3F5] rounded text-[#2A4858]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-semibold text-sm text-[#0E2A22]">Low-Density Living</h4>
                    <p className="text-xs text-gray-600">Quiet residential communities with limited neighbors per floor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#F4EFE6] rounded text-[#A78235]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-semibold text-sm text-[#0E2A22]">Vastu & Climate Intent</h4>
                    <p className="text-xs text-gray-600">Cross-ventilated living rooms and dual balconies for natural airflow.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0E2A22] hover:text-[#C9A050] border-b border-[#0E2A22] pb-0.5 hover:border-[#C9A050] transition-colors"
                >
                  <span>Read our story & principles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#C9A050]/30 aspect-[4/3]">
                <img
                  src="/assets/casa-bliss-render.png"
                  alt="Casa Bliss Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#0E2A22] text-white p-6 rounded shadow-xl border border-[#C9A050]/40 max-w-xs">
                <p className="font-serif-luxury text-sm text-[#DFBA73] font-semibold">
                  Curated Convenience Retail
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Casa Arcade at Casa Bliss provides daily convenience right at your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-20 bg-[#0E2A22] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] block mb-2">
              Our Active Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9F5]">
              Boutique Residences in Dronagiri
            </h2>
            <p className="text-sm text-gray-300 mt-3 font-light">
              Explore our verified developments situated in the high-growth nodes of Navi Mumbai, directly benefiting from Atal Setu and the new International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-[#071914] rounded-lg overflow-hidden border border-[#C9A050]/30 shadow-xl flex flex-col group hover:border-[#C9A050] transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0E2A22]/90 backdrop-blur px-3 py-1 rounded border border-[#C9A050]/40 text-xs font-semibold text-[#DFBA73]">
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-xs bg-black/60 backdrop-blur text-gray-200 px-2.5 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1.5 text-xs text-[#DFBA73]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#DFBA73] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-[#C9A050] font-semibold block">
                        Verified Highlights:
                      </span>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {project.keyHighlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#DFBA73] shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs uppercase tracking-wider font-semibold text-[#DFBA73] hover:text-white flex items-center space-x-1.5 transition-colors"
                    >
                      <span>Explore Residences</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to="/contact"
                      className="bg-[#163B31] hover:bg-[#C9A050] hover:text-[#071914] text-xs font-semibold text-white px-4 py-2 rounded transition-all"
                    >
                      Enquire Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MACRO LOCATION & INFRASTRUCTURE */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden border border-[#C9A050]/40 shadow-xl">
                <img
                  src="/assets/dronagiri-location-aurrum.jpg"
                  alt="Dronagiri Strategic Connectivity"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-[11px] text-gray-500 mt-2 text-center">
                Strategic infrastructure nexus connecting Dronagiri to South Mumbai, NMIA, and JNPT.
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235]">
                Strategic Micro-Market
              </span>
              <h2 className="font-serif-luxury text-3xl font-bold tracking-tight text-[#0E2A22]">
                What Makes Dronagiri <br />
                <span className="text-[#C9A050]">The Right Address Today?</span>
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The right location today builds a better tomorrow. Dronagiri stands at the intersection of major national infrastructure investments that are reshaping the economic map of the Mumbai Metropolitan Region.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Connectivity & Atal Setu</h4>
                    <p className="text-xs text-gray-600">Direct freeway transit to South Mumbai via the 21.8 km Mumbai Trans Harbour Link.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Navi Mumbai International Airport (NMIA)</h4>
                    <p className="text-xs text-gray-600">Immediate access to the upcoming international aviation hub and trade corridors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Employment Hubs & Maritime Trade</h4>
                    <p className="text-xs text-gray-600">Direct adjacency to JNPT and Reliance SEZ, generating permanent rental and housing demand.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Planned CIDCO Town Planning</h4>
                    <p className="text-xs text-gray-600">Wide 22m and 11m sector roads, designated school plots, and dedicated playgrounds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LATEST BLOG & EDUCATIONAL INSIGHTS */}
      <section className="py-20 bg-[#F4EFE6] text-[#1E242B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235] block mb-2">
                Knowledge & Transparency
              </span>
              <h2 className="font-serif-luxury text-3xl font-bold tracking-tight text-[#0E2A22]">
                Property Due Diligence & Market Insights
              </h2>
              <p className="text-xs text-gray-600 mt-2">
                Empowering home buyers with objective legal, technical, and financial clarity.
              </p>
            </div>
            <Link
              to="/blog"
              className="mt-4 md:mt-0 text-xs uppercase tracking-wider font-semibold text-[#0E2A22] hover:text-[#C9A050] flex items-center space-x-1.5 transition-colors"
            >
              <span>View all 16 articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg overflow-hidden border border-[#C9A050]/20 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                    <span className="bg-[#EBF3F5] text-[#2A4858] font-semibold px-2 py-0.5 rounded">
                      {article.categoryLabel}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#0E2A22] mb-2 leading-snug line-clamp-2">
                    <Link to={`/blog/${article.slug}`} className="hover:text-[#C9A050] transition-colors">
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{article.publishDate}</span>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="font-semibold text-[#C9A050] hover:text-[#0E2A22] transition-colors"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEAD GENERATION SECTION */}
      <section className="py-20 bg-[#071914] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73]">
                Connect with Promoters
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9F5]">
                Begin Your Journey With Aurrum Rise
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Whether you are exploring a 1 BHK or 2 BHK boutique residence at CASA BLISS or CASA ONE, our advisory team provides complete floor plans, sanctioned approvals, and transparent payment structures.
              </p>

              <div className="space-y-4 pt-2 text-xs text-gray-300">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <span>Zero brokerage direct developer assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <span>Verified RERA documentation and floor plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <span>Assistance desk: <a href="tel:9867343005" className="text-[#DFBA73] underline">+91 98673 43005</a></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm defaultProject="both" sourceContext="Homepage Lead Banner" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
