'use client';

import { ServiceItem, SERVICES } from '@/data/studio-data';
import { TeslaServiceExperience } from '@/components/tesla/TeslaServiceExperience';

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://achtrex.com/services/${service.slug}#service`,
    'name': service.title,
    'description': service.description,
    'url': `https://achtrex.com/services/${service.slug}`,
    'provider': {
      '@type': 'Corporation',
      'name': 'Achtrex',
      'url': 'https://achtrex.com'
    },
    'serviceType': service.headline,
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `${service.title} Capabilities`,
      'itemListElement': (service.capabilities || []).map((cap) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': cap
        }
      }))
    }
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://achtrex.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://achtrex.com/services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': service.title,
        'item': `https://achtrex.com/services/${service.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <TeslaServiceExperience service={service} />
    </>
  );
}
