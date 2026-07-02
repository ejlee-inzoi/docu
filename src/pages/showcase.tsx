import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './showcase.module.css';

type Feature = {
  icon: string;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: '⚛️',
    title: 'MDX + React',
    text: 'Markdown 안에서 React 컴포넌트를 그대로 사용합니다. 문서가 곧 인터랙티브 앱이 됩니다.',
  },
  {
    icon: '🗂️',
    title: '자동 사이드바',
    text: '폴더 구조에서 사이드바를 자동 생성하고, 버전 관리와 i18n 다국어를 기본 지원합니다.',
  },
  {
    icon: '🔍',
    title: '즉시 검색',
    text: '오프라인 로컬 검색과 Algolia DocSearch를 모두 지원해 빠르게 문서를 찾습니다.',
  },
  {
    icon: '🌗',
    title: '다크 모드',
    text: '라이트/다크 테마 토글이 내장되어 있고, CSS 변수만으로 브랜드 색을 입힙니다.',
  },
  {
    icon: '⚡',
    title: '정적 사이트',
    text: '빌드 결과는 순수 HTML/CSS/JS. GitHub Pages, Vercel, Netlify 어디든 배포됩니다.',
  },
  {
    icon: '🧩',
    title: '플러그인 & 테마',
    text: '블로그, 클라이언트 리다이렉트, PWA 등 플러그인으로 기능을 자유롭게 확장합니다.',
  },
];

const SAMPLE_TS = `// Docusaurus 설정은 타입 안전한 TypeScript입니다.
const config: Config = {
  title: 'ModKit Documentation',
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
  },
};`;

const SAMPLE_BASH = `# 설치부터 프리뷰까지 세 줄
npx create-docusaurus@latest my-site classic --typescript
cd my-site
npm start  # http://localhost:3000`;

function ColorModeCard(): ReactNode {
  const {colorMode} = useColorMode();
  return (
    <div className={styles.modeBox}>
      <p>현재 테마 모드 (우측 상단 토글로 바꿔 보세요)</p>
      <div className={styles.modeValue}>
        {colorMode === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </div>
      <p>
        <code>useColorMode()</code> 훅으로 실시간 반영됩니다.
      </p>
    </div>
  );
}

export default function Showcase(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const logo = useBaseUrl('/img/logo.png');

  return (
    <Layout
      title="Showcase"
      description="Docusaurus 핵심 기능을 한눈에 보여주는 마중물 페이지">
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <img src={logo} alt={siteConfig.title} className={styles.heroLogo} />
        <span className={styles.badge}>Powered by Docusaurus</span>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          MkDocs에서 Docusaurus로 — React·MDX·다크모드·즉시검색을 갖춘
          모던 문서 플랫폼으로 옮겨왔습니다.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--lg button--secondary" to="/">
            📖 문서 홈으로
          </Link>
          <Link
            className="button button--lg button--outline button--secondary"
            to="/ModKit/How-to/Getting-Started/01install">
            🚀 시작 가이드
          </Link>
        </div>
      </header>

      <main>
        {/* Feature cards */}
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              왜 Docusaurus 인가요?
            </Heading>
            <p className={styles.sectionLede}>
              문서를 코드처럼 다루면서, 보는 사람에게는 빠르고 아름다운 웹사이트를
              제공합니다.
            </p>
            <div className={styles.cardGrid}>
              {FEATURES.map((f) => (
                <div key={f.title} className={styles.card}>
                  <div className={styles.cardIcon}>{f.icon}</div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {f.title}
                  </Heading>
                  <p className={styles.cardText}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components in action */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              컴포넌트가 살아있는 문서
            </Heading>
            <p className={styles.sectionLede}>
              아래 요소들은 모두 Docusaurus 기본 테마 컴포넌트입니다 — 코드
              하이라이트, 복사 버튼, 탭, 알림 박스, 테마 훅.
            </p>

            <div className={styles.demoGrid}>
              <div>
                <Tabs groupId="lang">
                  <TabItem value="ts" label="config.ts" default>
                    <CodeBlock language="ts" title="docusaurus.config.ts">
                      {SAMPLE_TS}
                    </CodeBlock>
                  </TabItem>
                  <TabItem value="bash" label="terminal">
                    <CodeBlock language="bash" title="quick start">
                      {SAMPLE_BASH}
                    </CodeBlock>
                  </TabItem>
                </Tabs>
                <ColorModeCard />
              </div>

              <div>
                <Admonition type="tip" title="팁">
                  <code>:::tip</code> 한 줄이면 이런 강조 박스가 만들어집니다.
                </Admonition>
                <Admonition type="info" title="정보">
                  버전 관리·다국어·검색이 모두 내장되어 있습니다.
                </Admonition>
                <Admonition type="warning" title="주의">
                  MkDocs의 <code>!!! note</code> 문법은 <code>:::note</code> 로
                  바꿔야 동일하게 렌더링됩니다.
                </Admonition>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <Heading as="h2" className={styles.sectionTitle}>
            지금 바로 둘러보세요
          </Heading>
          <p className={styles.sectionLede}>
            좌측 사이드바에서 1,400여 개의 마이그레이션된 문서를 확인할 수
            있습니다.
          </p>
          <Link className="button button--lg button--primary" to="/">
            문서 둘러보기 →
          </Link>
        </section>
      </main>
    </Layout>
  );
}
