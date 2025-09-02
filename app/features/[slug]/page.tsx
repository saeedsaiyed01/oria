
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Feature: ${params.slug}`,
    description: `Learn more about ${params.slug}`,
  };
}

export default function FeaturePage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Feature: {params.slug}
          </h1>
          <p className="text-lg text-gray-600">
            This is a dynamic feature page for {params.slug}.
          </p>
        </div>
      </div>
    </div>
  );
}

interface Params {
  params: { slug: string };
}

export function FeatureDetail({ params }: Params) {
  const { slug } = params;
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Feature: {slug}</h1>
        <p className="text-gray-600">Coming soon</p>
      </div>
    </main>

  );
}
