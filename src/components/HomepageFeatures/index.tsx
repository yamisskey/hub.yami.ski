import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'メンタルファースト',
    Svg: require('@site/static/img/heart-unlock-svgrepo-com.svg').default,
    description: (
      <>
        法律に違反しておらず、運営にとって不利益が利益を超える行動をしない限り、ユーザーの病みノートを検閲しません。
      </>
    ),
  },
  {
    title: 'プライバシーファースト',
    Svg: require('@site/static/img/lock-svgrepo-com.svg').default,
    description: (
      <>
        個人情報の扱いに細心の注意を払います。ノーログポリシーです。IPアドレスを記録せず、Tor/VPN接続を検閲しません。
      </>
    ),
  },
  {
    title: 'ファーストフォーク',
    Svg: require('@site/static/img/fork-svgrepo-com.svg').default,
    description: (
      <>
        病みと闇が好きなやみすきーは、これらのスタンスを尊重するため、独自機能を追加すべくMisskeyフォークを使用します。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
