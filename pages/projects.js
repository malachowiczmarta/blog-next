import Layout from 'components/Layout';
import { getList } from 'lib/markdownParser';
import Head from 'next/head';

// to wykonuje sie w momencie budowania projektu -> next wykonuje funkcje getList 
// która pobiera liste projektów
export const getStaticProps = () => {
    const projects = getList('_projects');

    return {
        props: {projects}
    };
};

export default function Projects({projects}) {
    console.log('projects', projects)
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      Projects
    </Layout>
  );
}
