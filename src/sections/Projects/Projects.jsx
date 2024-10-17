import styles from './ProjectsStyles.module.css';
import fundaidhub from '../../assets/fundaidhub.png';
import stylespace from '../../assets/stylespace.png';
import designspace from '../../assets/designspace.png';
import resqfood from '../../assets/resqfood.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fundaidhub}
          link="https://github.com/dankeschun/Fund-Aid-Hub"
          h3="Fund Aid Hub"
          p="Fund Raising Website"
        />
        <ProjectCard
          src={stylespace}
          link="https://github.com/dankeschun/Style-Space"
          h3="Style Space"
          p="Furniture Shop"
        />
        <ProjectCard
          src={designspace}
          link="https://github.com/dankeschun/Design-Space"
          h3="Design Space"
          p="AR Application"
        />
        <ProjectCard
          src={resqfood}
          link="https://github.com/dankeschun/ResQ-Food"
          h3="ResQ Food"
          p="Food Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
