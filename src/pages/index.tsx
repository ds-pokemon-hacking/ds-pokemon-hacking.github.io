import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type DisplayItem = {
  title: string;
  Svg: string;
  tag: string;
};

const GenerationIVCatalog: DisplayItem[] = [
  {
    title: 'Pokémon Diamond',
    Svg: require('@site/static/img/boxart/1015.jpg').default,
    tag: '/docs/generation-iv/guides/getting_started/'
  },
  {
    title: 'Pokémon Pearl',
    Svg: require('@site/static/img/boxart/1016.jpg').default,
    tag: '/docs/generation-iv/guides/getting_started/'
  },
  {
    title: 'Pokémon Platinum',
    Svg: require('@site/static/img/boxart/3541.jpg').default,
    tag: '/docs/generation-iv/guides/getting_started/'
  },
  {
    title: 'Pokémon HeartGold',
    Svg: require('@site/static/img/boxart/4787.jpg').default,
    tag: '/docs/generation-iv/guides/getting_started/'
  },
  {
    title: 'Pokémon SoulSilver',
    Svg: require('@site/static/img/boxart/4788.jpg').default,
    tag: '/docs/generation-iv/guides/getting_started/'
  },
];

const GenerationVCatalog: DisplayItem[] = [
  {
    title: 'Pokémon Black',
    Svg: require('@site/static/img/boxart/5586.jpg').default,
    tag: '/docs/generation-v/guides/getting_started/'
  },
  {
    title: 'Pokémon White',
    Svg: require('@site/static/img/boxart/5585.jpg').default,
    tag: '/docs/generation-v/guides/getting_started/'
  },
  {
    title: 'Pokémon Black 2',
    Svg: require('@site/static/img/boxart/6149.jpg').default,
    tag: '/docs/generation-v/guides/getting_started/'
  },
  {
    title: 'Pokémon White 2',
    Svg: require('@site/static/img/boxart/6150.jpg').default,
    tag: '/docs/generation-v/guides/getting_started/'
  },
];

function Feature({ title, Svg, tag }: DisplayItem) {
  return (
    <a className={clsx(styles.ds_boxart)} href={tag}>
      <img className="shadow--md rounded-img" src={Svg} role="img" />
    </a>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>About</h2>
        <p>Generation IV and V hacking has seen a resurgence in popularity. With this comes new research, tools, and methods that can be applied to the game.
          However, most of the public-facing documentation about the DS Pokémon hacking scenes are significantly outdated, and refer to methodologies which are obselete or unstable.
        </p>
        <p>This wiki aims to rectify this by providing the up-to-date information necessary to modify the Generation IV and V Pokémon games.</p>
        <h2>Getting Started</h2>
        <p>To get started, select the game you are hacking below. You will then be brought to a landing page which will provide more detailed information.</p>

        <hr></hr>
        <h3 className={styles.header_label}>Generation IV</h3>
        <div className="row">
          {GenerationIVCatalog.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr></hr>
        <h3 className={styles.header_label}>Generation V</h3>
        <div className="row">
          {GenerationVCatalog.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr></hr>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Guides and resources for hacking the DS Pokémon games.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
