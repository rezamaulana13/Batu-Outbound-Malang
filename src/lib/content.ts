import { getCollection, type CollectionEntry } from 'astro:content';

export type Pkg = CollectionEntry<'packages'>;
export type Article = CollectionEntry<'articles'>;

export async function getPackages(): Promise<Pkg[]> {
  const all = await getCollection('packages', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

export const pkgUrl = (id: string) => `/paket/${id}/`;
export const articleUrl = (id: string) => `/artikel/${id}/`;

export interface PackageGroup {
  id: 'outbound-team-building' | 'adventure' | 'gathering-rombongan' | 'kombinasi';
  letter: string;
  name: string;
  shortName: string;
  desc: string;
  badgeClass: string;
}

export const packageGroups: PackageGroup[] = [
  {
    id: 'outbound-team-building',
    letter: 'A',
    name: 'Paket Outbound & Team Building',
    shortName: 'Outbound & Team Building',
    desc: 'Simulasi kerja sama, fun games interaktif, dan pembentukan karakter kepemimpinan di alam terbuka Batu Malang.',
    badgeClass: 'badge--yellow',
  },
  {
    id: 'adventure',
    letter: 'B',
    name: 'Paket Adventure',
    shortName: 'Adventure',
    desc: 'Wahana pemacu adrenalin di pegunungan: Offroad Jeep, Rafting, Paintball, ATV, hingga Glamping alam.',
    badgeClass: 'badge--orange',
  },
  {
    id: 'gathering-rombongan',
    letter: 'C',
    name: 'Paket Gathering & Rombongan',
    shortName: 'Gathering & Rombongan',
    desc: 'Acara kebersamaan instansi perusahaan, keluarga besar, komunitas hobi, dan rombongan sekolah.',
    badgeClass: 'badge--green',
  },
  {
    id: 'kombinasi',
    letter: 'D',
    name: 'Paket Kombinasi',
    shortName: 'Paket Kombinasi',
    desc: 'Paket bundling terintegrasi paling populer: paduan Outbound dengan Paintball, Rafting, Offroad 1 Hari atau 2D1N.',
    badgeClass: 'badge--blue',
  },
];

export const categoryLabel: Record<string, string> = {
  'outbound-team-building': 'Outbound & Team Building',
  adventure: 'Adventure',
  'gathering-rombongan': 'Gathering & Rombongan',
  kombinasi: 'Paket Kombinasi',
  outbound: 'Outbound & Team Building',
  gathering: 'Gathering & Rombongan',
  pelajar: 'Outbound & Team Building',
  'team-building': 'Outbound & Team Building',
};

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
}

export function formatRupiah(n: number): string {
  return 'Rp ' + new Intl.NumberFormat('id-ID').format(n);
}
