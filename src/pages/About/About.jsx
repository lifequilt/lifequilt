import React from 'react';

const styles = require('./About.css');
const backpackImage = require('../../assets/backpack-pic.jpg');

const About = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h2 className={styles.header}>About</h2>
      <p> The Universal Declaration of Human Rights makes clear that every child has
        the right to a free basic education, so poverty and lack of resources
        should not be a barrier to schooling.
        Life Quilt Foundation was founded on September 11, 2010 by a group of
        family and friends wanting to ensure that right.
      </p>
      <h3 className={styles.header}>Why Life Quilt Foundation is Needed</h3>
      <p>
        A 2015 study by Communities in Schools, an education advocacy group,
        outlined 10 surprising reasons why children don’t go to school.
        Among the list: They’re hungry, they need school supplies, they need
        clothes or shoes.  Life Quilt is there to help fill the gap,
        removing those barriers to school attendance.
      </p>
      <p>
        The Huntington Backpack Index, a measure of the cost of educational supplies
        and activities indicates that the cost of supplies and extracurricular activities
        has increased from 2007-2016 by 88 percent for elementary school students,
        81 percent for middle school students and 68 percent for high school students.
        For the 4 in 10 children in the US living near the poverty line, the ability
        to attend school and be an active participant can be nearly impossible.
        Life Quilt Foundation supports parents by helping to provide the tools
        needed to help their children succeed.
      </p>
      <p>
        Improved academic performance.  Fewer behavioral problems. Early identification
        of student learning problems. Greater teacher job satisfaction. These are
        all proven outcomes of parental involvement in their children’s education.
        Research from The National Association for the Education of Young Children
        highlighted the need for parental involvement, “School readiness involves
        more than just children.  School readiness in the broadest sense, is about
        children, families, early environments, schools and communities….
        Their skills and development are strongly influenced by families.”
      </p>
      <p>
        Life Quilt, in partnership with community resources works to help parents
        strengthen their roles as their child’s first teacher.
      </p>
      <div className={styles.image}>
        <img src={backpackImage} alt="kids with backpacks"/>
      </div>
    </div>
  </div>
);

export default About;
